var express = require('express');
var path = require('path');

var app = express();

// store and access all static files in this /dist folder
app.use(express.static('./dist'));

// if we get a request to the root, we send the client to the client/index.html
app.use('/', function (req, res) {
	res.sendFild(path.resolve('client/index.html'));
})

// what port we're listening to for incoming traffic
var port = 3000;

app.listen(port, function(err) {
	if(error) throw error;
	console.log("Express server is listening on port", port);
})
