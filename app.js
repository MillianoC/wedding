// Declare express app
var express = require('express');
var app = express();


// Send hello world
app.use(express.static(__dirname + '/public'));


// 
app.listen(3000, function () {
	console.log("Listening on port 3000");
});