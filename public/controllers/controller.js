'use strict';

var app = angular.module('app',[]);


app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http){
	console.log('Hello world from controller!');

	$http.get('/contactlist').success(function(response){
		console.log ('i got the data');

		$scope.contactList = response;
	});


}]);