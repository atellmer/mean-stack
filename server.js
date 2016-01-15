'use strict';

var express = require('express');
var app = express();

/*
app.get('/', function(req, res){
	res.send('hello world from server node.js!');
});
*/
app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res){
	console.log('I received a GET request');

	var person1 = {
		name: 'Tim',
		email: 'tim@mail.com',
		number: '222-222-222'
	};

	var person2 = {
		name: 'Emily',
		email: 'emily@mail.com',
		number: '333-333-333'
	};

	var person3 = {
		name: 'John',
		email: 'john@mail.com',
		number: '444-444-444'
	};

	var contactList = [person1, person2 ,person3];

	res.json(contactList);

});

app.listen(3000);
console.log('server is run on port 3000');