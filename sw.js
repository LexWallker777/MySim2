const CACHE_NAME = 'npc-trade-app-v2';
const ASSETS = [
    '/MySim2/',
    '/MySim2/index.html',
    '/MySim2/styles.css',
    '/MySim2/script.js',
    '/MySim2/app.js',
    '/MySim2/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});