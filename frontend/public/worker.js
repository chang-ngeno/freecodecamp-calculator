var CACHE_NAME='gewec-blog-site';
var urlsToCache = [
    '/',
    '/signup',
    '/login',
    '/dashboard',
];

// Install a service worker
self.addEventListener('install', event =>{
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
         .then(function(cache){
             console.log('Opened cache');
             return cache.addAll(urlsToCache);
         })
    );
});

// Cache and retun requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
         .then(function(response) {
             // Cache hit - return response
             if(response){
                 return response;
             }
             return fetch(event.request);
         })
    );
});

// Update the service worker
self.addEventListener('activate', event =>{
    var cacheWhiteList = ['gewec-blog-site'];
    event.waitUntil(
        caches.keys().then(cacneNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if(cacheWhiteList.indexOf(cacheName)=== -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
