self.addEventListener('fetch', function(event) {
  // Este código permite que la app cargue desde la memoria del cel
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
