require('angular');
var _ = require('lodash');

module.exports = angular.module('nav-panel-controller-module', [
	
]).controller('navBarController', [ function () {

	var ctrl = this,
		_dataSet = '',
		_searchTerm = '',
		_dataSets = ['Marker posts', 'SOS Boxes', 'Junctions', 'Service Stations'];

	_.extend(ctrl, {
		clearMap: function () {
		
		},
		dataSet: function (val) {
			if (arguments.length) {
				_dataSet = val;
				_searchTerm = '';
				console.log(val);
			}
			return arguments.length ? _dataSet = val : _dataSet;
		},
		searchTerm: function (val) {
			return arguments.length ? _searchTerm = val : _searchTerm;
		},
		search: function () {
			console.log('searching ... ', _searchTerm);
		},
		searchTermPlaceHolder: function () {
			return _.isEmpty(_dataSet) ? 'Plase select data set' : _dataSet + ' search for ..';
		},
		options: function () {
			return _dataSets;
		},
		isSelected: function (option) {
			return _dataSet === option;
		},
		modelOptions: {
			getterSetter: true
		}
	});
}]);