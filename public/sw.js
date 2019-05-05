"use strict";

self.addEventListener("install", function (e) {
    console.log("Performing service worker install...");
});

const CACHE_NAME = "my-cache";
const urlsToCache = [];


self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (res) {
            if (res) {
                return res;
            } else {
                return fetch(e.request);
            }
        })
    );
});

/*    '/',
    '/index.html',
    '/overview.html',
    '/assets/js/index.js',
    '/assets/js/localforage.js',
    '/assets/styles/bootstrap.min.css',
    '/assets/styles/Reset.css',
    '/assets/styles/screen.css',
    '/assets/images/4066.jpg',
    '/assets/images/600145-PMXAGX-487.jpg'];*/