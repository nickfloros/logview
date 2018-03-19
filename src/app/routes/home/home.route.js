const _ = require('lodash');

require('angular');

module.exports = angular.module('home-route-module', [
		require('../search/ui-logs/search-ui-logs.controller').name
	])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,
		$urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home', {
			url: '/home',
			views: {
				search: {
					templateUrl: "partials/search-ui-logs.template.html",
					controller: 'searchUiLogsController',
					controllerAs: 'ctrl'
				},
				panel: {
					templateUrl:"partials/results-ui-logs.template.html"	
				}
			}
		});

	}]);