'use strict';

var app = angular.module('app',[]);


app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http){
	console.log('Hello world from controller!');

	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			console.log ('i got the data!');
			$scope.contactList = response;
			$scope.contact = '';
		});
	}

	refresh();

	$scope.addContact = function(){
		//console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});

	}

}]);