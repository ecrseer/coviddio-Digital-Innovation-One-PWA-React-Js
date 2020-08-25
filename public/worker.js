var CACHE_NAME = 'gjpwa';
var urlsToCache = ['/'];

//instala o servico no celular
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

//cache and return requests
self.addEventListener('fetch',event=>{
  event.respondWith(
    caches.match(event.request)
     .then(function(response){
       if(response)
        return response;

        return fetch(event.request);
     })
  );
});

//atualiza o service worker
self.addEventListener('activate',event=>{
  var cacheWhiteList=['pwa-task-manager'];

  event.waitUntil(
    cache.keys().then(cacheNames=>{
      return Promise.all(
        cacheNames.map(cacheName=>{
          if(cacheWhiteList.indexOf(cacheName)===-1)
            return caches.delete(cacheName);


        })
      )
    })
  );
});