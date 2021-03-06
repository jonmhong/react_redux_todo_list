var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./dist'));

// if we get a request to the root, we send the client to the client/index.html
app.use('/', function (req, res) {
	res.sendFile(path.resolve('client/index.html'));
})

// what port we're listening to for incoming traffic
var port = 3000;

app.listen(port, function(err) {
	if(error) throw error;
	console.log("Express server is listening on port", port);
})
