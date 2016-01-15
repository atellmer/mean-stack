'use strict';

var app = angular.module('app',[]);


app.controller('AppCtrl', ['$scope', '$http', function ($scope, $http){
		console.log('Hello world from controller!');
}]);