const CACHE = 'v1';

const FILES = [
  'index.html',
  'horoscope.html',
  'kundli.html',
  'matchmaking.html',
  'tarot.html',
  'numerology.html',
  'ai-chat.html',
  'style.css', 
  'offline.html',

  // Icons cache
  'assets/icons/icon-72.png',
  'assets/icons/icon-96.png',
  'assets/icons/icon-128.png',
  'assets/icons/icon-192.png',
  'assets/icons/icon-384.png',
  'assets/icons/icon-512.png'
];

// Install Event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

// Fetch Event
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request).catch(() => caches.match('offline.html'));
    })
  );
});
