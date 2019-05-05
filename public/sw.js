"use strict";

self.addEventListener("install", function (e) {
    console.log("Performing service worker install...");
});

const CACHE_NAME = "my-cache";
const urlsToCache = ['/',
    '/index.html',
    '/overview.html',
    '/assets/styles/bootstrap.min.css',
    '/assets/styles/Reset.css',
    '/assets/styles/screen.css',
    '/assets/picograms/bonzai.svg',
    '/assets/images/4066.jpg',
    '/assets/images/600145-PMXAGX-487.jpg',
    '/assets/js/index.js'];

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

/*
    '/assets/js/index.js',
    '/assets/styles/bootstrap.min.css',
    '/assets/styles/Reset.css',
    '/assets/styles/screen.css',
    
    '/assets/images/600145-PMXAGX-487.jpg'];*/