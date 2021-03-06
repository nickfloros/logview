require('angular');
var _ = require('lodash');

module.exports = angular.module('res-search-service-module', [])
	.service('ResSearchService', ['$http', function ResSearchService($http) {
		var _svc = this,
			_results = [],
			_payload = null,
			_dateStart = new Date(),
			_dateEnd = new Date(_dateStart.setHours(_dateStart.getHours() - 1));

		_export(_svc, {
			dateStart: (...args) => {
				return args.length > 0 ? _dateStart = args[0] : _dateStart;
			},
			dateEnd: (...args) => {
				return args.length > 0 ? _dateEnd = val : _dateEnd;
			},
			payload: (...args) => {
				return arguments.length > 0 ? _payload = val : _payload;
			},
			
			results: ()=>{
				return _results;
			},
			reset : ()=>{
				_results=[];
				_dateStart = new Date();
				_dateEnd = new Date(_dateStart.setHours(_dateStart.getHours() - 1));
			},
			search: () => {
				console.log('about to search');
			}
		});

	}]);