require('angular');

var _=require('lodash');

module.exports = angular.module('home-controller-module',[
	
	])
	.controller('homeController',['$rootScope',function ($rootScope){

		var ctrl = this,
			_road = '';

		_.extend(ctrl,{
			init : function () {
			},
			road : (...args) => {
				return args.length > 0 ? _road = args[0] : _road;
			},
			searchRoad : ()=> {
				console.log(_road);
			},
			modelOptions: {
				getterSetter: true
			}
		})
	}]);
