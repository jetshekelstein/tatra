// Mobil Útikönyv — service worker.
//
// Two-tier offline model:
//   core-<APP_VERSION>  the app shell: html, css, js, icons, vendor, trip data
//                       files. Small (~1.5 MB) and installed ATOMICALLY — if it
//                       is present, the app opens with full content offline.
//   trip-<id>           that guidebook's photos/maps (plus its Wikimedia
//                       images). Filled ONE FILE AT A TIME on request from the
//                       page, so a single failed download never blocks offline
//                       readiness — it is just re-tried later. Survives app
//                       updates; refreshed only when the guidebook's own
//                       version changes.
//   runtime             everything cached opportunistically (fonts, wiki
//                       images seen before a trip download finished).
//
// Data policy: cache-first with NO background revalidation. Updates happen only
// through the explicit version check (version.json) and the refresh messages
// below — so a day of heavy use in the mountains costs zero data.
const APP_VERSION = 'v15';
const CORE = 'core-' + APP_VERSION;
const RUNTIME = 'runtime';

const CORE_ASSETS = [
  './',
  './index.html',
  './T2%20Mobil%20Utikonyv.dc.html',
  './manifest.json',
  './version.json',
  './support.js',
  './config.js',
  './trips/registry.js',
  './trips/tatra.js',
  './trips/aggtelek.js',
  './trips/nograd.js',
  './trips/tisza.js',
  './trips/gombaszog.js',
  './trips/bukkalja.js',
  './_ds/nocturne-ac2cafb2-92d5-4812-bf7e-e1f1372013a8/styles.css',
  './_ds/nocturne-ac2cafb2-92d5-4812-bf7e-e1f1372013a8/_ds_bundle.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/social-card.jpg',
  './vendor/react/react.production.min.js',
  './vendor/react/react-dom.production.min.js',
  './vendor/phosphor/regular/style.css',
  './vendor/phosphor/regular/Phosphor.woff2',
  './vendor/phosphor/fill/style.css',
  './vendor/phosphor/fill/Phosphor-Fill.woff2'
];

// Cross-origin hosts served from cache once seen. places.googleapis.com is
// deliberately absent: rating lookups must not be cached as HTTP — the app
// caches the numbers themselves in IndexedDB.
const RUNTIME_HOSTS = new Set([
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'commons.wikimedia.org',
  'upload.wikimedia.org'
]);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CORE)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      // Old core versions go; trip-* and runtime survive app updates.
      .then(keys => Promise.all(keys
        .filter(k => k.indexOf('core-') === 0 && k !== CORE)
        // Pre-split builds used precache-*/runtime-* names — clear those too.
        .concat(keys.filter(k => /^(precache|runtime)-/.test(k)))
        .map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); });
  });
}

const ok = res => res && (res.status === 200 || res.type === 'opaque');

// Fetch one asset into a cache, tolerating failure. Same-origin requests are
// plain; cross-origin falls back to no-cors so Wikimedia images can still be
// stored as opaque responses if CORS ever fails.
function fill(cache, url, reload) {
  const req = new Request(url, reload ? { cache: 'reload' } : {});
  return fetch(req)
    .catch(() => fetch(new Request(url, { mode: 'no-cors', cache: reload ? 'reload' : 'default' })))
    .then(res => { if (!ok(res)) throw new Error('bad response'); return cache.put(url, res); })
    .then(() => true)
    .catch(() => false);
}

self.addEventListener('message', event => {
  const data = event.data || {};
  const reply = msg => { if (event.source) event.source.postMessage(msg); };

  // Refetch the app shell over the existing core cache (content-only update:
  // sw.js unchanged so no install event runs). Never delete-then-fill — that
  // leaves a window where a reload finds nothing and comes up unstyled.
  if (data.type === 'refresh') {
    event.waitUntil(
      caches.open(CORE)
        .then(cache => cache.addAll(CORE_ASSETS.map(u => new Request(u, { cache: 'reload' }))))
        .then(() => reply({ type: 'refreshed' }))
        .catch(err => reply({ type: 'refresh-failed', error: String(err) }))
    );
    return;
  }

  // Download (or update) one guidebook's assets. Tolerant and resumable:
  // already-cached files are skipped unless `reload`, failures are counted and
  // reported, progress is streamed so the page can show "12/22".
  if (data.type === 'ensure-trip' || data.type === 'refresh-trip') {
    const id = data.id, assets = data.assets || [];
    const reload = data.type === 'refresh-trip';
    event.waitUntil(caches.open('trip-' + id).then(async cache => {
      let done = 0, failed = 0;
      for (const url of assets) {
        const have = reload ? undefined : await cache.match(url).catch(() => undefined);
        if (!have) {
          const got = await fill(cache, url, reload);
          if (!got) failed++;
        }
        done++;
        if (done % 3 === 0 || done === assets.length) {
          reply({ type: 'trip-progress', id, done, total: assets.length });
        }
      }
      reply({ type: 'trip-ready', id, version: data.version, failed, total: assets.length });
    }));
    return;
  }
});

// Tapping a proximity notification should land you in the app, not open a second
// copy of it. Focus an existing window if one is around, otherwise open one.
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of all) {
      if ('focus' in c) { await c.focus(); return; }
    }
    if (self.clients.openWindow) await self.clients.openWindow('./');
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Any same-origin request marked ?live= is a deliberate freshness probe
  // (version.json, events.json): never answer or pollute the cache with it —
  // each call carries a unique timestamp and would pile up as dead entries.
  if (url.origin === self.location.origin && url.searchParams.has('live')) return;

  // version.json: ?live= goes straight to the network (what is deployed right
  // now); the plain path is cache-first and never revalidated, so it keeps
  // stamping the running build. On a miss it refills from network — that makes
  // "clear the cache" recovery self-healing.
  if (url.origin === self.location.origin && url.pathname.endsWith('/version.json')) {
    if (url.searchParams.has('live')) return;
    event.respondWith(caches.match(req).catch(() => undefined).then(cached => cached || fetch(req).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CORE).then(cache => cache.put(req, copy)).catch(() => {});
      }
      return res;
    })).catch(() => fetch(req)));
    return;
  }

  const sameOrigin = url.origin === self.location.origin;
  if (!sameOrigin && !RUNTIME_HOSTS.has(url.hostname) && !/(^|\.)wikipedia\.org$/.test(url.hostname)) return;

  // The Inter stylesheet arrives as a render-blocking @import; on a dead or
  // captive network the request can hang rather than fail and the page never
  // paints. Cap it and fall back to empty CSS (system font).
  if (url.hostname === 'fonts.googleapis.com') {
    event.respondWith(
      caches.match(req).catch(() => undefined)
        .then(cached => cached || withTimeout(fetch(req), 3000).then(res => {
          if (ok(res)) { const copy = res.clone(); caches.open(RUNTIME).then(c => c.put(req, copy)).catch(() => {}); }
          return res;
        }))
        .catch(() => new Response('/* Inter unavailable — system font */', {
          headers: { 'Content-Type': 'text/css' }
        }))
    );
    return;
  }

  // Cache-first, no revalidation. caches.match searches core, trip-* and
  // runtime alike. Uncached requests pass the network result (or its failure)
  // straight through, as if the worker weren't here.
  event.respondWith(
    caches.match(req).catch(() => undefined).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (ok(res)) {
          const copy = res.clone();
          // Opportunistic fills go to RUNTIME, never CORE: CORE dies with the
          // next app version, and these (photos viewed before a trip download
          // finished) deserve to survive it.
          caches.open(RUNTIME).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      });
    }).catch(() => fetch(req))
  );
});
