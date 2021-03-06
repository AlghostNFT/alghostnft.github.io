'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d4d7c4b0c15536614506003a83e2cdb6",
"assets/assets/ab2.png": "a58edb38fc88ec1e9bed6ffe60c8c0b0",
"assets/assets/alghost.json": "1a7ce87460f919e3a6f2824cbd25551f",
"assets/assets/alghost2.json": "6fdbb10b033e94128dc37a18f3dbbb5e",
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
"assets/images/Alghost%2520%2523101.png": "68c8d10e1594b63f10457b2cfb5b0e65",
"assets/images/Alghost%2520%2523102.png": "431a5af0ca6481e67df58a6110a386b2",
"assets/images/Alghost%2520%2523103.png": "043c1b5f89489a30fb63b815b7882ee3",
"assets/images/Alghost%2520%2523104.png": "1a7d1325a34a26541790420ace351c8f",
"assets/images/Alghost%2520%2523105.png": "5ef4038ad74b9d067c8696a7dd59ec33",
"assets/images/Alghost%2520%2523106.png": "43bc5e273ebc9171b49f6479c482c646",
"assets/images/Alghost%2520%2523107.png": "deb7cc506b35d30577fea3040f3f349b",
"assets/images/Alghost%2520%2523108.png": "139ab9dcb7cf309aac4f96fc961e5f8b",
"assets/images/Alghost%2520%2523109.png": "0adfc174cdfb7563ff18d0346c16a801",
"assets/images/Alghost%2520%252311.png": "94afe0fe5afd3a62089c71ffd3b1f001",
"assets/images/Alghost%2520%2523110.png": "9955f0e412553249e6f812b8f26e1d87",
"assets/images/Alghost%2520%2523111.png": "7a744534802b5330d23a6d7c5e5f423a",
"assets/images/Alghost%2520%2523112.png": "4904441fcf00cbffa53781f3e1358052",
"assets/images/Alghost%2520%2523113.png": "12bb553ea498c435f07931ebabf86ad5",
"assets/images/Alghost%2520%2523114.png": "bbc75ba995a44f08a16f64037f8b5c45",
"assets/images/Alghost%2520%2523115.png": "7137f70be16cc96a210a6b943a2e4e17",
"assets/images/Alghost%2520%2523116.png": "e58adde06a432923ddba2c152226a989",
"assets/images/Alghost%2520%2523117.png": "5e258ef64d9e41257a3bd9ee5bc2bca8",
"assets/images/Alghost%2520%2523118.png": "03524608644ec37c78df63cfc433d08a",
"assets/images/Alghost%2520%2523119.png": "fdac8fad26a65f5b91fea03b0273bd3f",
"assets/images/Alghost%2520%252312.png": "adf71334730bd0732db17b8d0c4769e2",
"assets/images/Alghost%2520%2523120.png": "27fab0f431769c0c196d0cfe683e1a16",
"assets/images/Alghost%2520%2523121.png": "f12fe70abd38400619c48c517b030b33",
"assets/images/Alghost%2520%2523122.png": "ae9732ab722b6f66d7a48938697bfd72",
"assets/images/Alghost%2520%2523123.png": "5fea561e2bb96925c2db004d960e804e",
"assets/images/Alghost%2520%2523124.png": "414eec6f8b180e8d5736fe263cac9ca8",
"assets/images/Alghost%2520%2523125.png": "f33228aebe07612fddeb13ab8401140b",
"assets/images/Alghost%2520%2523126.png": "2c07eeaa234c0aa3b3b855980a414356",
"assets/images/Alghost%2520%2523127.png": "7351b1db00aacda9c93e91d8276e0097",
"assets/images/Alghost%2520%2523128.png": "615d7aebd1c7a0abc033bd36cc19087e",
"assets/images/Alghost%2520%2523129.png": "816592563cbbf6622a354ffaafe3f0a9",
"assets/images/Alghost%2520%252313.png": "f8621b5f6644e54967a8b93095af2e3c",
"assets/images/Alghost%2520%2523130.png": "1bf433400825343e929c99e8fcbeed61",
"assets/images/Alghost%2520%2523131.png": "b9476f78ff2ae1978e45c28ac194cb19",
"assets/images/Alghost%2520%2523132.png": "51073797f879e2c1881aacf15069c455",
"assets/images/Alghost%2520%2523133.png": "0af4fcc560b199a8a1faaf2424a4d710",
"assets/images/Alghost%2520%2523134.png": "c533f6c6458debba2940023eeb0e0fe6",
"assets/images/Alghost%2520%2523135.png": "40c4f8fe72755609df060c2d922315b7",
"assets/images/Alghost%2520%2523136.png": "9419667927f17888a4e7daea80b12b40",
"assets/images/Alghost%2520%2523137.png": "3144b4a45c3d1ecde6571c377203f07c",
"assets/images/Alghost%2520%2523138.png": "4c0f0f186421afa3e0e6707204af3ff7",
"assets/images/Alghost%2520%2523139.png": "eeeb161521906180d553176aaef6546e",
"assets/images/Alghost%2520%252314.png": "275c61c6b5ee1525a3518279df096266",
"assets/images/Alghost%2520%2523140.png": "e0bf4db491059f500889b7c6d5ba0bf7",
"assets/images/Alghost%2520%2523141.png": "130deabffbd57eb6243dc6833eefc773",
"assets/images/Alghost%2520%2523142.png": "07137844e47e3423d417ccb310e0e358",
"assets/images/Alghost%2520%2523143.png": "4a4cb21f45267967c28a47f5f023c60b",
"assets/images/Alghost%2520%2523144.png": "c6386b751416a243b0dbcd8a7bf4180b",
"assets/images/Alghost%2520%2523145.png": "bf8d651eccab182836b2b3c877290554",
"assets/images/Alghost%2520%2523146.png": "5488f9ed44c99ee1203a41faf2e4c6d6",
"assets/images/Alghost%2520%2523147.png": "62779c8e2cb60420e6f83757cacff741",
"assets/images/Alghost%2520%2523148.png": "9b3422418f0c6f3a1b2626c04fbfe84f",
"assets/images/Alghost%2520%2523149.png": "358060588b3611b844aeb80e09f74312",
"assets/images/Alghost%2520%252315.png": "06c273af0923d5ee160786ccecf696ac",
"assets/images/Alghost%2520%2523150.png": "2c14db03c3b4e7cd1c751fbd13e40961",
"assets/images/Alghost%2520%2523151.png": "83871d8bf11f71b5c53eb469af004773",
"assets/images/Alghost%2520%2523152.png": "e0a8d399fd2b2c43576a46964b686d33",
"assets/images/Alghost%2520%2523153.png": "3771be0ab2e33b7c407aa54d8b716539",
"assets/images/Alghost%2520%2523154.png": "15992f98cfdfd86284f5ba38ff837b9e",
"assets/images/Alghost%2520%2523155.png": "e6e668a53fec54667736d64f5bbb3678",
"assets/images/Alghost%2520%2523156.png": "a5b64936272f120d86d39d88e296e292",
"assets/images/Alghost%2520%2523157.png": "b960bfad7c157e36d7da198aa480e7d0",
"assets/images/Alghost%2520%2523158.png": "e8207aae0584b5a94fb0950b58c0df78",
"assets/images/Alghost%2520%2523159.png": "dd6537a81b969010a9f1507fb370369d",
"assets/images/Alghost%2520%252316.png": "9e075fecbddba7ca9dc42f25693f3780",
"assets/images/Alghost%2520%2523160.png": "74d9bcfb76c1fa7c0d7ebb576c130f9a",
"assets/images/Alghost%2520%2523161.png": "c2c1696979d982df52516aaba147f60e",
"assets/images/Alghost%2520%2523162.png": "54e063fab2a61f24b2b64d34be8a12ab",
"assets/images/Alghost%2520%2523163.png": "4a7885d8a174f4d448a0688df6fa0374",
"assets/images/Alghost%2520%2523164.png": "a907f47a60ebda25b33af69be017d5b0",
"assets/images/Alghost%2520%2523165.png": "072bd9869e2a645066cebecfae6db087",
"assets/images/Alghost%2520%2523166.png": "3307b9938565940e0d507c0270b52660",
"assets/images/Alghost%2520%2523167.png": "8d2aa472740fdab2ca9444fe716ba9f4",
"assets/images/Alghost%2520%2523168.png": "87608ce92970754a519c32bacc49c8df",
"assets/images/Alghost%2520%2523169.png": "b87cf97f12200b54fa0fa81f1b002a04",
"assets/images/Alghost%2520%252317.png": "8ee3f1473f914f7c670772455f5c4fa1",
"assets/images/Alghost%2520%2523170.png": "03429fd220d3196a5173e29137d5dc9b",
"assets/images/Alghost%2520%2523171.png": "734fb5fbee7089769ae1e4955884d371",
"assets/images/Alghost%2520%2523172.png": "c865b7c0c0de8f2d5622612005fa026b",
"assets/images/Alghost%2520%2523173.png": "63a5fc8a5b9e1e2f5a8ce47885c692ab",
"assets/images/Alghost%2520%2523174.png": "0e2e13153d8e5872d81bda6735c3d764",
"assets/images/Alghost%2520%2523175.png": "261690863b77c1075406d381ed16da65",
"assets/images/Alghost%2520%2523176.png": "d726fbc7d7dbea9d9c2c590465c9c45b",
"assets/images/Alghost%2520%2523177.png": "cacce912ff396b26932f589a3cae1070",
"assets/images/Alghost%2520%2523178.png": "2794b2c2776f2940940457955fe25d9d",
"assets/images/Alghost%2520%2523179.png": "b0ff82770779b7169e7f93a015b63b65",
"assets/images/Alghost%2520%252318.png": "fe230844e823337107d2e5602a276621",
"assets/images/Alghost%2520%2523180.png": "1f7a5cb72a5494c05391e90108585936",
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
"index.html": "6ba471329f8b2657a3e78e1fc1bc9eea",
"/": "6ba471329f8b2657a3e78e1fc1bc9eea",
"main.dart.js": "12ea86ad9c39ce7d748343c7249bb6d7",
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
