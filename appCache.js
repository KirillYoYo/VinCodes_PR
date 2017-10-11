self.addEventListener('install', function(event) {
	// инсталляция
	console.log('install', event);
});

self.addEventListener('activate', function(event) {
	// активация
	console.log('activate', event);
});

// наименование для нашего хранилища кэша
var CACHE_NAME = 'app_serviceworker_v_1',
	cacheUrls = [
		// '/VinCodes_PR/',
		// '/VinCodes_PR/index.html',
		'/',
		'/index.html',
	];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			// загружаем в наш cache необходимые файлы
			return cache.addAll(cacheUrls);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		// ищем запрашиваемый ресурс в хранилище кэша
		caches.match(event.request).then(function(cachedResponse) {

			// выдаём кэш, если он есть
			if (cachedResponse) {
				return cachedResponse;
			}

			// иначе запрашиваем из сети как обычно
			return fetch(event.request);
		})
	);
});