self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("iloilo-route-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
