// T2 Mobil Útikönyv — service worker: full offline caching.
// App-shell files are precached on install; everything else (including
// cross-origin CDN/font/Wikimedia requests) is cached the first time it's
// fetched, then served stale-while-revalidate.
const VERSION = 'v1';
const PRECACHE = 'precache-' + VERSION;
const RUNTIME = 'runtime-' + VERSION;

const APP_SHELL = [
  './',
  './index.html',
  './T2%20Mobil%20Utikonyv.dc.html',
  './manifest.json',
  './support.js',
  './guide-data.js',
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
  if (!isCacheable(url)) return;

  const sameOrigin = url.origin === self.location.origin;

  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        // Cross-origin no-cors responses come back "opaque" (status 0) —
        // still cacheable and servable, just not inspectable.
        if (res && (res.status === 200 || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(sameOrigin ? PRECACHE : RUNTIME).then(cache => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
