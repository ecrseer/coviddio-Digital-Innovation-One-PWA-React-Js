var CACHE_NAME = 'gjpwa';
var urlsToCache = ['/'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
     .then(function(cache){
       console.log('cache aberto');
       return cache.addAll(urlsToCache);
     }
     )
  );
});