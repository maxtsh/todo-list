// This is the V1 Cache For Service Workers
// Currently the serviceWorker V2 is active and you can change it in index.html anytime.

const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install Service Worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cache!");
      return cache.addAll(urlsToCache);
    })
  );
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
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match("offline.html"));
    })
  );
});
