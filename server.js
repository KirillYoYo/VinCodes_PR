// Require express and create an instance of it
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
	res.sendfile('./index.html');
});

// On localhost:3000/welcome
app.get('/index.html', function (req, res) {
	res.sendfile('./index.html');
});

app.get('/workerLoader.js', function (req, res) {
	res.sendfile('./workerLoader.js');
});

app.get('/appCache.js', function (req, res) {
	res.sendfile('./appCache.js');
});

app.get('/testConnection.js', function (req, res) {
	res.sendfile('./testConnection.js');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
	res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
	console.log('got to http://localhost:3000/');
});