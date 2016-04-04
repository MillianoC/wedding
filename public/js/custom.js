// Init Angular app and controller
var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope) {

	$scope.menuItemMouseHover = false;

	// Set default view to home index page
	$scope.viewIndex = 'home';


	// Handles mouse hovering events
	$scope.menuItemHover = function(event) {
		$scope.menuItemMouseHover = true;
	};

});