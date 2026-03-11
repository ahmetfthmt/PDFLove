/**
 * Service Worker for PdfCraft PWA
 * 
 * Provides offline capabilities with cache-first strategy for static assets
 * and network-first for dynamic content.
 */

const CACHE_NAME = 'pdfcraft-cache-v3';
const DATA_CACHE_NAME = 'pdfcraft-data-cache-v1';

// Static assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/favicon.svg',
  '/manifest.json',
];

// Large WASM assets (cache-first, lazy loaded)
const WASM_ASSETS = [
  '/pymupdf-wasm/',
  '/libreoffice-wasm/',
  '/pdfjs-viewer/',
  '/pdfjs-annotation-viewer/',
];

// Font assets
const FONT_ASSETS = [
  '/fonts/',
];

/**
 * Install event - cache static assets
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== DATA_CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => clients.claim())
  );
});

/**
 * Check if request is for WASM assets
 */
function isWasmAsset(url) {
  return WASM_ASSETS.some(path => url.pathname.startsWith(path)) &&
    (url.pathname.endsWith('.wasm') ||
     url.pathname.endsWith('.wasm.gz') ||
     url.pathname.endsWith('.whl') ||
     url.pathname.endsWith('.tar') ||
     url.pathname.endsWith('.data') ||
     url.pathname.endsWith('.data.gz') ||
     url.pathname.endsWith('.js'));
}

/**
 * Check if request is for font assets
 */
function isFontAsset(url) {
  return FONT_ASSETS.some(path => url.pathname.startsWith(path)) &&
    (url.pathname.endsWith('.ttf') ||
     url.pathname.endsWith('.otf') ||
     url.pathname.endsWith('.woff') ||
     url.pathname.endsWith('.woff2'));
}

/**
 * Check if request is for static assets (CSS, JS, images)
 */
function isStaticAsset(url) {
  return url.pathname.endsWith('.css') ||
         url.pathname.endsWith('.js') ||
         url.pathname.endsWith('.svg') ||
         url.pathname.endsWith('.png') ||
         url.pathname.endsWith('.jpg') ||
         url.pathname.endsWith('.ico');
}

/**
 * Check if request is for API/data
 */
function isApiRequest(url) {
  return url.pathname.startsWith('/api/') ||
         url.searchParams.has('data');
}

/**
 * Fetch event - handle different asset types
 */
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // WASM assets: cache-first (lazy loaded, large files)
  if (isWasmAsset(url) || isFontAsset(url)) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // Return offline fallback if available
            return new Response('Offline - WASM asset not cached', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
        });
      })
    );
    return;
  }

  // Static assets: cache-first with network fallback
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached, but update cache in background
          fetch(event.request).then((networkResponse) => {
            if (networkResponse.ok) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(() => {});
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // API requests: network-first with cache fallback
  if (isApiRequest(url)) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(DATA_CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Navigation requests: network-first with offline fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/').then((cachedResponse) => {
            return cachedResponse || new Response('Offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
        })
    );
    return;
  }
});

/**
 * Handle messages from main thread
 */
self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((names) => {
      names.forEach((name) => caches.delete(name));
    });
  }

  if (event.data.type === 'CACHE_URLS') {
    const urls = event.data.urls;
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(urls);
    });
  }
});

/**
 * Background sync for offline operations (if supported)
 */
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Handle background sync for offline data
      Promise.resolve()
    );
  }
});

console.log('[ServiceWorker] PdfCraft PWA Service Worker loaded v3');