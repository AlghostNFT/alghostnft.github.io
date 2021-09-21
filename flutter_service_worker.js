'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e9403ad95726372b95641482971b2d69",
"assets/assets/ab2.png": "a58edb38fc88ec1e9bed6ffe60c8c0b0",
"assets/assets/alghost.json": "1a7ce87460f919e3a6f2824cbd25551f",
"assets/assets/alghost2.json": "820372676096ce5fa2f7650ac0547aff",
"assets/assets/alghost_icon.png": "79f8fe6bc78538791f71410670bc5faa",
"assets/assets/chart3.png": "65235631c02e73a810c7ef6762e51195",
"assets/assets/chart3new.png": "f9e16fe4adaaf57184d92c1e3ba35e07",
"assets/assets/discord_logo.png": "a29bebe8ec341ff93356975d0cc7f30d",
"assets/assets/exp.png": "58c4724cf1b349ffea2ffadd89616579",
"assets/assets/rg.png": "16d78d4270c8631b0c7e0bba9e0a4e52",
"assets/assets/twitter_logo.png": "b36ad77387e6497a2c5f87841f18fc07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/Alghost%2520%25231.png": "60a8e30610c1c6852f93b608839d2773",
"assets/images/Alghost%2520%252310.png": "c492a64ec53fe8e1925f6aa429e9dab1",
"assets/images/Alghost%2520%2523100.png": "3b341c81f3bd9e3dca8f52527aba4e95",
"assets/images/Alghost%2520%252311.png": "94afe0fe5afd3a62089c71ffd3b1f001",
"assets/images/Alghost%2520%252312.png": "adf71334730bd0732db17b8d0c4769e2",
"assets/images/Alghost%2520%252313.png": "f8621b5f6644e54967a8b93095af2e3c",
"assets/images/Alghost%2520%252314.png": "275c61c6b5ee1525a3518279df096266",
"assets/images/Alghost%2520%252315.png": "06c273af0923d5ee160786ccecf696ac",
"assets/images/Alghost%2520%252316.png": "9e075fecbddba7ca9dc42f25693f3780",
"assets/images/Alghost%2520%252317.png": "8ee3f1473f914f7c670772455f5c4fa1",
"assets/images/Alghost%2520%252318.png": "fe230844e823337107d2e5602a276621",
"assets/images/Alghost%2520%252319.png": "d87b9b6ad8c08278482ca9b9b67c8cc8",
"assets/images/Alghost%2520%25232.png": "5bd197d22134a88108fb33ac02bcfd9a",
"assets/images/Alghost%2520%252320.png": "6f08315283bf39e2cf4c07eac81c2b60",
"assets/images/Alghost%2520%252321.png": "55a8d1ed956fe8956243b88fa4f8f54d",
"assets/images/Alghost%2520%252322.png": "59d0819cc8af6100f808c27712827edd",
"assets/images/Alghost%2520%252323.png": "63ae9c9342db992b23bbb610c09a9910",
"assets/images/Alghost%2520%252324.png": "31264a2f00feb9de0f3a28e25795b202",
"assets/images/Alghost%2520%252325.png": "17434624ef26ee572e99bb7437d5a8db",
"assets/images/Alghost%2520%252326.png": "fff4217b21ebc9d619aaa6884db52567",
"assets/images/Alghost%2520%252327.png": "6140ee0f30213c7abc42e8d87bb5111f",
"assets/images/Alghost%2520%252328.png": "539a7c927fa4615dc8ed1044b1fd7f41",
"assets/images/Alghost%2520%252329.png": "51c3cb9a67bcaf60ecba62af960e12f4",
"assets/images/Alghost%2520%25233.png": "04a49623febf7b067bfc0eece8cc07b4",
"assets/images/Alghost%2520%252330.png": "c62f9fe5ed0e49eb48b036048abf183c",
"assets/images/Alghost%2520%252331.png": "590934a8ca0430710963d244212ece8a",
"assets/images/Alghost%2520%252332.png": "f3edf16555d20ed44beb5799973bee55",
"assets/images/Alghost%2520%252333.png": "9bc15f388938c913048ab40d5897b6ab",
"assets/images/Alghost%2520%252334.png": "add2d6d71c33d2a5cc36017605514a10",
"assets/images/Alghost%2520%252335.png": "0348df5042696bd266b2e314b9a06f37",
"assets/images/Alghost%2520%252336.png": "1f0c938334b5697eabc20e817fbfad5e",
"assets/images/Alghost%2520%252337.png": "de52f7dbdc131d705fd3394a82a41e9d",
"assets/images/Alghost%2520%252338.png": "7c9b3dfdb9a549a6e56047d2dc068061",
"assets/images/Alghost%2520%252339.png": "5f336b5aebdb8275cbbe413c25b0d517",
"assets/images/Alghost%2520%25234.png": "555208bca4d0e9b5e3e9793ab11fff74",
"assets/images/Alghost%2520%252340.png": "ca925873f9557c1bdebf66471f51b88d",
"assets/images/Alghost%2520%252341.png": "d8c146d664f029d1c3e572ae7a29861a",
"assets/images/Alghost%2520%252342.png": "f08e87ae8de0a7d471f769d241f9b479",
"assets/images/Alghost%2520%252343.png": "5c9d7c67962ec33a3cd5c4d1bbdbdd4a",
"assets/images/Alghost%2520%252344.png": "8c9e086dd311b3e8f4bc73e42d39214b",
"assets/images/Alghost%2520%252345.png": "5762f4ed97908615b315928f4f4a94de",
"assets/images/Alghost%2520%252346.png": "382494f71f87377b136bfbbe51cc191a",
"assets/images/Alghost%2520%252347.png": "3c871cd99f006c70d5e7e0c90e3d40a9",
"assets/images/Alghost%2520%252348.png": "aae3d8dc36d7d16a6ae0e71f0462e861",
"assets/images/Alghost%2520%252349.png": "e60b184aa2d8ec0375d9480d7f489d8a",
"assets/images/Alghost%2520%25235.png": "3ae088f8a7c5ccd5ba788fa23cfdff6c",
"assets/images/Alghost%2520%252350.png": "e44bbdd4e5c925d79e6b68edfa34233e",
"assets/images/Alghost%2520%252351.png": "11ec28368024d8476d81bb4d790fbf92",
"assets/images/Alghost%2520%252352.png": "02718e29a647fe5a1b0242392f70c41c",
"assets/images/Alghost%2520%252353.png": "69af241d38270a359d530a48dfbd4ae2",
"assets/images/Alghost%2520%252354.png": "b5f39563e5fc1c74a36269589119fcd9",
"assets/images/Alghost%2520%252355.png": "dc83df3ac294766da8619723cabc1f63",
"assets/images/Alghost%2520%252356.png": "83b667c17d3c28968ae76d1109f44c19",
"assets/images/Alghost%2520%252357.png": "c1df08f47444ff8c2dae01c27334847c",
"assets/images/Alghost%2520%252358.png": "0a91d2f9d732cc642b70e7eb01c91263",
"assets/images/Alghost%2520%252359.png": "e319e92535c34faab41c87494d716fcd",
"assets/images/Alghost%2520%25236.png": "0c1a8982601aab94c6a99dfd725cbce7",
"assets/images/Alghost%2520%252360.png": "18516bd805c1597f41ef356aa0c5f01f",
"assets/images/Alghost%2520%252361.png": "936cdfa70adb4a065ac823056fadd97e",
"assets/images/Alghost%2520%252362.png": "b63c050b110d8081c0f420bd1884b20f",
"assets/images/Alghost%2520%252363.png": "0b75b26668ce3250dcab2909a8ceec88",
"assets/images/Alghost%2520%252364.png": "48b6e028a3acfe0f5cfe607f81b322e4",
"assets/images/Alghost%2520%252365.png": "c2bac26515de56bb4a433ab6aea14d0d",
"assets/images/Alghost%2520%252366.png": "34c22678aa86526770009c1e8b4ba429",
"assets/images/Alghost%2520%252367.png": "18e8102b782e261a34cd7631816f0ea3",
"assets/images/Alghost%2520%252368.png": "23fe41869b0d411ef37f6173ba72aad3",
"assets/images/Alghost%2520%252369.png": "d01d2bb7890fe5eb87a91656edcbed0d",
"assets/images/Alghost%2520%25237.png": "6aaf009939191ba1f1be5397386dc6ed",
"assets/images/Alghost%2520%252370.png": "ed3ab910f5ef7ba52dd93aaecbef5880",
"assets/images/Alghost%2520%252371.png": "9ca88340cd1a976e086e9c4c74e62f07",
"assets/images/Alghost%2520%252372.png": "49d106b2bbeb250759cff3dffe484e9a",
"assets/images/Alghost%2520%252373.png": "d66778d4f07b33b09efab32ad3b9eae2",
"assets/images/Alghost%2520%252374.png": "cc0c9fb810ff8cf1b2044539ececea92",
"assets/images/Alghost%2520%252375.png": "ecf697e1d61ba0536991e3c827b9b133",
"assets/images/Alghost%2520%252376.png": "e68c5f680b7141df176b674d2fc787cb",
"assets/images/Alghost%2520%252377.png": "0efde3a81019da39679a42ea3442ecdc",
"assets/images/Alghost%2520%252378.png": "6eb8b41e07654f65b2de8e8925f855e0",
"assets/images/Alghost%2520%252379.png": "853919336af40af88cab6dfd39c6a751",
"assets/images/Alghost%2520%25238.png": "29362c526bdb763dde858af5546de2d5",
"assets/images/Alghost%2520%252380.png": "d2c8036ebe6fb5b66dc23a2096d070b9",
"assets/images/Alghost%2520%252381.png": "29875471f4387907875d114168f501ff",
"assets/images/Alghost%2520%252382.png": "f508fff1b697ff927132956caae86cd4",
"assets/images/Alghost%2520%252383.png": "63b8c7524972134fe46b8cc9d8c53dbb",
"assets/images/Alghost%2520%252384.png": "de40bb74f365c741df362dd9b4f98fdc",
"assets/images/Alghost%2520%252385.png": "082557c33a0f3f0febdae47002b7291e",
"assets/images/Alghost%2520%252386.png": "f8049b022681e5f72b70d055b5d803bc",
"assets/images/Alghost%2520%252387.png": "5724636afdfa7a9d7bb58605bac8fc1a",
"assets/images/Alghost%2520%252388.png": "b6c2c95d45af3fb14a7782b80f668e21",
"assets/images/Alghost%2520%252389.png": "8bb8d52904380ae366a3cebc4a2bd65a",
"assets/images/Alghost%2520%25239.png": "fa0a9342cb2c058ac30c0d3484250dce",
"assets/images/Alghost%2520%252390.png": "a98c451be22256fe838f865c3e637067",
"assets/images/Alghost%2520%252391.png": "e076f35020baff48b296b518d0eb0daa",
"assets/images/Alghost%2520%252392.png": "7d3fcd7f5f7319922d41ef45581c20cb",
"assets/images/Alghost%2520%252393.png": "0717267f7969ee7ef03bce451dd356c9",
"assets/images/Alghost%2520%252394.png": "21316ad01af0d82a8c48f651cf4815a2",
"assets/images/Alghost%2520%252395.png": "04d5ef89515f79a720158dd9aced00f1",
"assets/images/Alghost%2520%252396.png": "6947219309f08c54382613ee8d25768c",
"assets/images/Alghost%2520%252397.png": "291d9a2503130a2aa96e8011309d1485",
"assets/images/Alghost%2520%252398.png": "7337c89c3bc741dc43c84e52663bcfa4",
"assets/images/Alghost%2520%252399.png": "fe6c999b93f5de90a5394735ff83cf87",
"assets/NOTICES": "fdb932d0c5b4b9b38df7746d616e3446",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "4cbd4836503de665edaea47b9005125d",
"icons/Icon-192.png": "79f8fe6bc78538791f71410670bc5faa",
"icons/Icon-512.png": "36d28832eaa46b828006e3a8ef7593d7",
"index.html": "1a611b4c81aa6306cded09a67021f242",
"/": "1a611b4c81aa6306cded09a67021f242",
"main.dart.js": "b57a8794a90d03a450fd1837b6721307",
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
