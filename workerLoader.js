navigator.serviceWorker.register(
	'/appCache.js'
).then(function(registration) {
	console.log('ServiceWorker registration', registration);
	// строкой ниже можно прекратить работу serviceWorker’а
	//registration.unregister();
}).catch(function(err) {
	throw new Error('ServiceWorker error: ' + err);
});