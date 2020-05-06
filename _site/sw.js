const version = '20200506170206';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/ios/talks/swift/xcode/wwdc/altconf/2020/03/11/wwdc-or-altconf/","/ios/swiftui/swift/xcode/uikit/uiviewrepresentable/2020/03/09/how-to-add-UIKit-component-on-your-SwiftUI-project/","/ios/dark%20theme/swift/color/xcode/2019/11/04/how-to-turn-darkmode-ios9/","/about/","/categories/","/blog/","/","/manifest.json","/assets/search.json","/assets/styles.css","/redirects.json","/sitemap.xml","/robots.txt","/feed.xml","https://secure.gravatar.com/avatar/e8aad27c12f50d24f6d9bc759d08710e", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
