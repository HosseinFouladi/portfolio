const assets = ['/', 'src/main.ts', 'service-worker.js', 'src/assets/css/style.css']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('assets').then((cache) => {
      cache.addAll(assets)
    })
  )
})

//always update cache if not update
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((founded) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        caches.open('assets').then((cache) => {
           cache.put(event.request, networkResponse.clone())
          return networkResponse
        })
      })
      return founded || fetchPromise
    })
  )
})
