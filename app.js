'use strict';

var buttonFailFastApp = angular.module('buttonFailFastApp', []);

buttonFailFastApp.config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/index', {
			template: 'index.html'
		});
	}
]);

buttonFailFastApp.constant('RESOURCES', [{
	'withDelay': 'http://localhost:3000/withDelay',
	'withoutDelay': 'http://localhost:3000/withoutDelay'
}]);

buttonFailFastApp.controller('buttonFailFastController', ['$scope', 'buttonFailFastServices',
	function buttonFailFastController($scope, buttonFailFastServices) {

		$scope.withDelay = function() {
			return buttonFailFastServices.withDelay().then(function(response) {
				$scope.response = response;
			}, function(error) {
				console.log(error);
			});
		};

		$scope.withoutDelay = function() {
			return buttonFailFastServices.withoutDelay().then(function(response) {
				$scope.response = response;
			}, function(error) {
				console.log(error);
			});
		};
	}
]);

buttonFailFastApp.service('buttonFailFastServices', ['$http', 'RESOURCES', function($http, RESOURCES) {

	function withDelay() {

		return $http({
			method: 'GET',
			url: RESOURCES.withDelay,
			headers: {
				'Content-Type': 'application/json'
			}

		}).success(function(response) {

		}).error(function(error) {

		});

	}

	function withoutDelay() {

		return $http({
			method: 'GET',
			url: RESOURCES.withoutDelay,
			headers: {
				'Content-Type': 'application/json'
			}

		}).success(function(response) {

		}).error(function(error) {

		});

	}

	return {
		withDelay: withDelay,
		withoutDelay: withoutDelay
	};

}]);
