var app=angular.module("computer", ["ngRoute"]);

.config(['$routeProvider', function($routeProvider){
$routeProvider.
when('/main', {
	templateUrl:'main.html',
	controller:'mainCtrl'
	});
}])
.controller('MainCtrl', [function(){
	console.log('this is the main controler')
}])
