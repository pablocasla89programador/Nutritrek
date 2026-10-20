const C='nia-v3',F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','/__/firebase/init.json','/__/firebase/8.10.1/firebase-app.js','/__/firebase/8.10.1/firebase-auth.js','/__/firebase/8.10.1/firebase-firestore.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>Promise.allSettled(F.map(u=>c.add(new Request(u,{cache:'reload'}))))).then(()=>skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!='GET'||new URL(e.request.url).origin!=location.origin)return;
e.respondWith(caches.match(e.request).then(r=>{const n=fetch(e.request,{cache:'no-cache'}).then(x=>{if(x.ok){const y=x.clone();caches.open(C).then(c=>c.put(e.request,y))}return x}).catch(()=>r);return r||n}))});
