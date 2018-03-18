var _ = require('lodash');

require('angular');

module.exports = angular.module('home-route-module', [
		require('./home.controller').name
	])
	.config(['$stateProvider', '$urlRouterProvider', 'homeController', function HomeCondif($stateProvider,
		$urlRouterProvider, homeController) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/',
			views: {
				search: {
					templateUrl: "partials/home.template.html",
					controller: 'homeController',
					controllerAs: 'ctrl'
				},
				panel: {
					templateUrl:"partils/results-ui-logs.template.html"	
				}
			}
		});

	}]);