// This is The V2 Cache For ServiceWorkers
// This is active by default in index.html

const CACHE_NAME = "version-2";

const self = this;

// Install Service Worker
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
});

// Active Service Workers
self.addEventListener("active", (e) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  // Removing unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            console.log("ServiceWorker: Clearing Old Cache");
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Listen For Requests
self.addEventListener("fetch", (e) => {
  // this will get rid of error of chrome-extension
  if (e.request.url.indexOf("http") === 0) {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          // Make Copy/Clone of response
          const resClone = res.clone();
          // Open a cache
          caches.open(CACHE_NAME).then((cache) => {
            // Add entire response to cache
            cache.put(e.request, resClone);
          });
          return res;
        })
        .catch((err) => caches.match(e.request))
        .then((res) => res)
    );
  }
});
