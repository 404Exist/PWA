const CASH_NAME = 'version-1';
const urlsToCashe = [ 'index.html', 'offline.html' ];

// install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CASH_NAME)
        .then((cache) => {
            console.log('Opend');
            return cache.addAll(urlsToCashe);
        })
    )
})

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
            .catch(() => caches.match('offline.html'))
        })
    )
})

// Activate the service worker
self.addEventListener('activate', (event) => {
    
})