'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1a7864e5dc085fc4015e8004df2e4cb6",
"assets/assets/ab2.png": "a58edb38fc88ec1e9bed6ffe60c8c0b0",
"assets/assets/alghost.json": "1a7ce87460f919e3a6f2824cbd25551f",
"assets/assets/alghost2.json": "497c90911bc0d182d824c218a9059364",
"assets/assets/alghost_icon.png": "79f8fe6bc78538791f71410670bc5faa",
"assets/assets/discord_logo.png": "a29bebe8ec341ff93356975d0cc7f30d",
"assets/assets/twitter_logo.png": "b36ad77387e6497a2c5f87841f18fc07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/Alghost%25231.png": "60a8e30610c1c6852f93b608839d2773",
"assets/images/Alghost%252310.png": "c492a64ec53fe8e1925f6aa429e9dab1",
"assets/images/Alghost%252311.png": "94afe0fe5afd3a62089c71ffd3b1f001",
"assets/images/Alghost%252312.png": "adf71334730bd0732db17b8d0c4769e2",
"assets/images/Alghost%252313.png": "f8621b5f6644e54967a8b93095af2e3c",
"assets/images/Alghost%252314.png": "275c61c6b5ee1525a3518279df096266",
"assets/images/Alghost%252315.png": "06c273af0923d5ee160786ccecf696ac",
"assets/images/Alghost%252316.png": "9e075fecbddba7ca9dc42f25693f3780",
"assets/images/Alghost%252317.png": "8ee3f1473f914f7c670772455f5c4fa1",
"assets/images/Alghost%252318.png": "fe230844e823337107d2e5602a276621",
"assets/images/Alghost%252319.png": "d87b9b6ad8c08278482ca9b9b67c8cc8",
"assets/images/Alghost%25232.png": "5bd197d22134a88108fb33ac02bcfd9a",
"assets/images/Alghost%252320.png": "6f08315283bf39e2cf4c07eac81c2b60",
"assets/images/Alghost%252321.png": "55a8d1ed956fe8956243b88fa4f8f54d",
"assets/images/Alghost%252322.png": "59d0819cc8af6100f808c27712827edd",
"assets/images/Alghost%252323.png": "63ae9c9342db992b23bbb610c09a9910",
"assets/images/Alghost%252324.png": "31264a2f00feb9de0f3a28e25795b202",
"assets/images/Alghost%252325.png": "17434624ef26ee572e99bb7437d5a8db",
"assets/images/Alghost%252326.png": "fff4217b21ebc9d619aaa6884db52567",
"assets/images/Alghost%252327.png": "6140ee0f30213c7abc42e8d87bb5111f",
"assets/images/Alghost%252328.png": "539a7c927fa4615dc8ed1044b1fd7f41",
"assets/images/Alghost%252329.png": "51c3cb9a67bcaf60ecba62af960e12f4",
"assets/images/Alghost%25233.png": "04a49623febf7b067bfc0eece8cc07b4",
"assets/images/Alghost%252330.png": "c62f9fe5ed0e49eb48b036048abf183c",
"assets/images/Alghost%252331.png": "590934a8ca0430710963d244212ece8a",
"assets/images/Alghost%252332.png": "f3edf16555d20ed44beb5799973bee55",
"assets/images/Alghost%252333.png": "9bc15f388938c913048ab40d5897b6ab",
"assets/images/Alghost%252334.png": "add2d6d71c33d2a5cc36017605514a10",
"assets/images/Alghost%252335.png": "0348df5042696bd266b2e314b9a06f37",
"assets/images/Alghost%252336.png": "1f0c938334b5697eabc20e817fbfad5e",
"assets/images/Alghost%252337.png": "de52f7dbdc131d705fd3394a82a41e9d",
"assets/images/Alghost%252338.png": "7c9b3dfdb9a549a6e56047d2dc068061",
"assets/images/Alghost%252339.png": "5f336b5aebdb8275cbbe413c25b0d517",
"assets/images/Alghost%25234.png": "555208bca4d0e9b5e3e9793ab11fff74",
"assets/images/Alghost%252340.png": "ca925873f9557c1bdebf66471f51b88d",
"assets/images/Alghost%25235.png": "3ae088f8a7c5ccd5ba788fa23cfdff6c",
"assets/images/Alghost%25236.png": "0c1a8982601aab94c6a99dfd725cbce7",
"assets/images/Alghost%25237.png": "6aaf009939191ba1f1be5397386dc6ed",
"assets/images/Alghost%25238.png": "29362c526bdb763dde858af5546de2d5",
"assets/images/Alghost%25239.png": "fa0a9342cb2c058ac30c0d3484250dce",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "4cbd4836503de665edaea47b9005125d",
"icons/Icon-192.png": "79f8fe6bc78538791f71410670bc5faa",
"icons/Icon-512.png": "36d28832eaa46b828006e3a8ef7593d7",
"index.html": "e405b888d86626be654e0f48930a111d",
"/": "e405b888d86626be654e0f48930a111d",
"main.dart.js": "f5e34ea627e56c70f57b5d716751df3b",
"manifest.json": "8eb48514daa7a92160e43d9809a0f400",
"version.json": "0c34ef5a1506994ac82e83b6aaa0288a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
