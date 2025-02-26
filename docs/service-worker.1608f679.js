const e=["./","./index.html","./style.css","./app.js","./manifest.json"];self.addEventListener("install",t=>{t.waitUntil(caches.open("Budget-Planner-cache-v1").then(t=>t.addAll(e)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))});
//# sourceMappingURL=service-worker.1608f679.js.map
