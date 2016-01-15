'use strict';

var express = require('express');
var app = express();

/*
app.get('/', function(req, res){
	res.send('hello world from server node.js!');
});
*/
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('server is run on port 3000');