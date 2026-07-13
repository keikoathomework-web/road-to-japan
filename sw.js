// Road to Japan — Service Worker v1.0
const CACHE = 'rtj-v1';
const CORE = [
  '/road-to-japan/',
  '/road-to-japan/index.html',
  '/road-to-japan/home.html',
  '/road-to-japan/auth.html',
  '/road-to-japan/story.html',
  '/road-to-japan/hiragana.html',
  '/road-to-japan/katakana.html',
  '/road-to-japan/manifest.json',
  '/road-to-japan/icon-192.svg',
  '/road-to-japan/icon-512.svg',
  '/road-to-japan/supabase-client.js',
  '/road-to-japan/lang.js',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for HTML/API, cache-first for assets
self.addEventListener('fetch', e => {
  const { request } = e;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin requests
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  if (request.destination === 'document') {
    // HTML: network first, fall back to cache
    e.respondWith(
      fetch(request)
        .then(r => { const c = r.clone(); caches.open(CACHE).then(ch => ch.put(request, c)); return r; })
        .catch(() => caches.match(request).then(r => r || caches.match('/road-to-japan/home.html')))
    );
  } else {
    // Assets: cache first
    e.respondWith(
      caches.match(request).then(r => r || fetch(request).then(nr => {
        const c = nr.clone();
        caches.open(CACHE).then(ch => ch.put(request, c));
        return nr;
      }))
    );
  }
});
