require('angular');

var _=require('lodash');

module.exports = angular.module('home-controller-module',[
		require('../../services/ui-search.service').name
	])
	.controller('homeController',['$rootScope','UiSearchService',function ($rootScope, UiSearchService){

		var ctrl = this;
		
		_.extend(ctrl,{
			init : function () {
			},
			payload : SearchService.payload,
			dateStart : SearchService.dateStart,
			dateEnd : SearchService.dateEnd,
			search : SearchService.search,
			searchRoad : ()=> {
				console.log(_road);
			},
			modelOptions: {
				getterSetter: true
			}
		})
	}]);
