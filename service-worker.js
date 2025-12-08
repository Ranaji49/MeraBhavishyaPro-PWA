
const CACHE='v1';
const FILES=[
 'index.html','horoscope.html','kundli.html','matchmaking.html','tarot.html',
 'numerology.html','ai-chat.html','assets/style.css','offline.html'
];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
self.addEventListener('fetch',e=>{
 e.respondWith(
   caches.match(e.request).then(res=>res || fetch(e.request).catch(()=>caches.match('offline.html')))
 );
});
