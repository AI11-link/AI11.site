'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"AI11.LINK.png": "a15fbb602d74cf458de2321192fecfa6",
"ai11.png": "0a88ddc4f025a2df75001197ce8de1d0",
"assets/AssetManifest.bin": "e7afa95acec1e41ba0f162cdfcb1d584",
"assets/AssetManifest.bin.json": "4803830279d6f5cf53a75311849ba736",
"assets/AssetManifest.json": "afee10fced8c040d234d769ba60aa0c0",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/images/adaptive_foreground_icon.png": "0a88ddc4f025a2df75001197ce8de1d0",
"assets/assets/images/AI11.LINK.png": "a15fbb602d74cf458de2321192fecfa6",
"assets/assets/images/ai11.png": "0a88ddc4f025a2df75001197ce8de1d0",
"assets/assets/images/app_launcher_icon.png": "0a88ddc4f025a2df75001197ce8de1d0",
"assets/assets/images/arrow1.png": "3b887f9f0dd4b25b03120055ed4b8178",
"assets/assets/images/arrowright.png": "3303a4fc5546b7d9e078a907eea8eb50",
"assets/assets/images/arrowtop.png": "5d0d874c649f1c4315fedb799dfd30b7",
"assets/assets/images/dows.png": "b6eb469c18321ca2e35b253c5143ac7f",
"assets/assets/images/dows2.png": "7609d17c990c8a3a1679c7f9d5620b82",
"assets/assets/images/edulearn.png": "8ec9f7afce40a317c9583c6e2feb060e",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/foodfinder.png": "e784c6e2f74b0165fb89e93b0e20e217",
"assets/assets/images/freelancehunt.png": "7e93f0c5500459f1e70f20ec37a13367",
"assets/assets/images/healthtrack.png": "55d1d20313fda70bcf81e66e661b34cf",
"assets/assets/images/my_photo3_sora_suit.png": "ea8689f0af58ba7df2e75aa4d6852ee6",
"assets/assets/images/right.png": "2f609cbbab1dedbc936428b7feaa1b35",
"assets/assets/images/shopezy.png": "c822e14ee7d2dbe9ab69f4c3c93f9597",
"assets/assets/images/telegram.png": "02c49791e4d40169e8cf7b6192e34fad",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "1e4d50991b4dade804166de841cf6e67",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "cd12063b889b2d59edda899145f00dfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/packages/devtools_app_shared/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Bold.ttf": "7c13b04382bb3c4a6a50211300a1b072",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Light.ttf": "9d1044ccdbba0efa9a2bfc719a446702",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Medium.ttf": "7cfbd4284ec01b7ace2f8edb5cddae84",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Regular.ttf": "b4618f1f7f4cee0ac09873fcc5a966f9",
"assets/packages/devtools_app_shared/fonts/Roboto_Mono/RobotoMono-Thin.ttf": "288302ea531af8be59f6ac2b5bbbfdd3",
"assets/packages/flutterflow_debug_panel/assets/fonts/FFIcons.ttf": "2d8699d7fc799fc94f451fb871a5d2e6",
"assets/packages/flutterflow_debug_panel/assets/fonts/NewFFIcons.ttf": "67512e85f8b2e9fedc649468c3b958cb",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Bold.ttf": "6604358fd7e8863a191bb23dd37b7b21",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Light.ttf": "751f3fcb15ee3b0f1b83b2dcfbf09106",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Medium.ttf": "73b7e20983e8bcdfd1600aa7b0fe1f3c",
"assets/packages/flutterflow_debug_panel/assets/fonts/Product-Sans-Regular.ttf": "40d7a2b41de60ab0d603f5d8b744b434",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "58bceaa5961579e8580eba464e20807a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"debug.js": "5d7a759c398cf57505423fa490a78b86",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "577bbf9048b27944f89ce88d656beba2",
"icons/app_launcher_icon.png": "0a88ddc4f025a2df75001197ce8de1d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e39f27c6a936bb1f129e085ed73f1f2b",
"/": "e39f27c6a936bb1f129e085ed73f1f2b",
"main.dart.js": "20ee101345d83ff8f656104557818e36",
"version.json": "948209bca6fa8cd67a15b1edee119620"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
