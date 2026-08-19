// T2 Mobil Útikönyv — service worker: full offline caching.
// App-shell files are precached on install; everything else (including
// cross-origin CDN/font/Wikimedia requests) is cached the first time it's
// fetched, then served stale-while-revalidate.
const VERSION = 'v3';
const PRECACHE = 'precache-' + VERSION;
const RUNTIME = 'runtime-' + VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './T2%20Mobil%20Utikonyv.dc.html',
  './manifest.json',
  './version.json',
  './support.js',
  './trips/registry.js',
  './trips/tatra.js',
  './trips/gombaszog.js',
  './_ds/nocturne-ac2cafb2-92d5-4812-bf7e-e1f1372013a8/styles.css',
  './_ds/nocturne-ac2cafb2-92d5-4812-bf7e-e1f1372013a8/_ds_bundle.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './vendor/react/react.production.min.js',
  './vendor/react/react-dom.production.min.js',
  './vendor/phosphor/regular/style.css',
  './vendor/phosphor/regular/Phosphor.woff2',
  './vendor/phosphor/fill/style.css',
  './vendor/phosphor/fill/Phosphor-Fill.woff2',
  './photos/hero.webp',
  './photos/a3.webp',
  './photos/b4.webp',
  './photos/b6.webp',
  './photos/d4.webp',
  './photos/e4.webp',
  './photos/e5.webp',
  './photos/cp1.webp',
  './photos/cp2.webp',
  './photos/cp3.webp',
  './photos/cp4.webp',
  './photos/p5.webp',
  './photos/gombaszog/aggtelek.webp',
  './photos/gombaszog/baradla-a.webp',
  './photos/gombaszog/baradla-c.webp',
  './photos/gombaszog/betliar-a.webp',
  './photos/gombaszog/cover.webp',
  './photos/gombaszog/dedinky.webp',
  './photos/gombaszog/derenk-a.webp',
  './photos/gombaszog/gombasecka.webp',
  './photos/gombaszog/haj.webp',
  './photos/gombaszog/karszt.webp',
  './photos/gombaszog/krasnohorska.webp',
  './photos/gombaszog/mauzoleum.webp',
  './photos/gombaszog/medzev.webp',
  './photos/gombaszog/ochtina.webp',
  './photos/gombaszog/potok.webp',
  './photos/gombaszog/roznava.webp',
  './photos/gombaszog/rudabanya.webp',
  './photos/gombaszog/silica.webp',
  './photos/gombaszog/straw.webp',
  './photos/gombaszog/szadvar-b.webp',
  './photos/gombaszog/torna.webp',
  './photos/gombaszog/zadiel-b.webp',
  './maps/01-map.png',
  './maps/02-map.png',
  './maps/03-map.png',
  './maps/04-map.png',
  './maps/05-map.png'
];

// Cross-origin hosts this app still depends on at runtime: Inter from Google
// Fonts (cosmetic — falls back to a system font if unreachable) and POI
// photos from Wikimedia (falls back to the "photo hamarosan" placeholder).
// React/ReactDOM/Phosphor icons are vendored locally, so they're already
// covered by APP_SHELL above and don't need a CDN at all.
const RUNTIME_HOSTS = new Set([
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'commons.wikimedia.org',
  'upload.wikimedia.org'
]);

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== PRECACHE && k !== RUNTIME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// The app asks for this when it finds a newer version.json but sw.js itself did
// not change (a content-only deploy), so no install event would run. Re-fetching
// the shell *over* the existing precache keeps every entry available throughout:
// deleting the cache first would leave a window where a reload finds nothing to
// serve and the page comes up without its stylesheet.
self.addEventListener('message', event => {
  const data = event.data || {};
  if (data.type !== 'refresh') return;
  const reply = msg => { if (event.source) event.source.postMessage(msg); };
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(APP_SHELL.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => reply({ type: 'refreshed' }))
      .catch(err => reply({ type: 'refresh-failed', error: String(err) }))
  );
});

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); });
  });
}

function isCacheable(url) {
  if (url.origin === self.location.origin) return true;
  if (RUNTIME_HOSTS.has(url.hostname)) return true;
  if (/(^|\.)wikipedia\.org$/.test(url.hostname)) return true; // page-summary API (image lookups)
  return false;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // version.json drives the app's update check and needs two different answers:
  //   ?live=…  → straight to the network: what the server serves right now.
  //   plain    → cache-first and never revalidated, so it keeps stamping the
  //              build this worker actually serves. On a miss it refills from
  //              the network, which is what makes the app's "clear the cache and
  //              reload" recovery self-healing.
  // Everything else same-origin stays stale-while-revalidate, which would
  // overwrite the stamp on the first read and break the comparison.
  if (url.origin === self.location.origin && url.pathname.endsWith('/version.json')) {
    if (url.searchParams.has('live')) return;
    event.respondWith(caches.match(req).catch(() => undefined).then(cached => cached || fetch(req).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(PRECACHE).then(cache => cache.put(req, copy)).catch(() => {});
      }
      return res;
    })).catch(() => fetch(req)));
    return;
  }

  if (!isCacheable(url)) return;

  const sameOrigin = url.origin === self.location.origin;

  const store = res => {
    // Cross-origin no-cors responses come back "opaque" (status 0) — still
    // cacheable and servable, just not inspectable.
    if (res && (res.status === 200 || res.type === 'opaque')) {
      const copy = res.clone();
      caches.open(sameOrigin ? PRECACHE : RUNTIME)
        .then(cache => cache.put(req, copy)).catch(() => {});
    }
    return res;
  };

  // The Inter stylesheet is the app's only remaining external dependency, and it
  // arrives as a render-blocking @import inside the design-system stylesheet. A
  // dead or captive network can leave that request hanging rather than failing,
  // and the page then never paints at all. Cap the wait and fall back to empty
  // CSS so the app comes up in the system font instead of not coming up.
  if (url.hostname === 'fonts.googleapis.com') {
    event.respondWith(
      caches.match(req).catch(() => undefined)
        .then(cached => cached || withTimeout(fetch(req), 3000).then(store))
        .catch(() => new Response('/* Inter unavailable — system font */', {
          headers: { 'Content-Type': 'text/css' }
        }))
    );
    return;
  }

  event.respondWith(
    caches.match(req).catch(() => undefined).then(cached => {
      if (cached) {
        // Stale-while-revalidate: hand over the cached copy and refresh behind
        // it, swallowing any failure so it can't affect this response.
        fetch(req).then(store).catch(() => {});
        return cached;
      }
      // Nothing cached: pass the network response (or its failure) straight
      // through, exactly as if the worker weren't here. Resolving respondWith
      // with undefined — which the previous shape did whenever an uncached
      // request failed — turns into a hard error for the page instead.
      return fetch(req).then(store);
    }).catch(() => fetch(req))
  );
});
