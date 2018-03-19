require('angular');
var _ = require('lodash');

module.exports = angular.module('ui-search-service-module', [])
	.service('UiSearchService', ['$http', function UiSearchService($http) {
		var _svc = this,
			_results = [],
			_payload = null,
			_operatorId = null,
			_userName = null,
			_dateStart = new Date(),
			_dateEnd = new Date(_dateStart.setHours(_dateStart.getHours() - 1));

		_.extend(_svc, {
			dateStart: (...args) => {
				return args.length > 0 ? _dateStart = args[0] : _dateStart;
			},
			dateEnd: (...args) => {
				return args.length > 0 ? _dateEnd = args[0] : _dateEnd;
			},
			payload: (...args) => {
				return args.length > 0 ? _payload = args[0] : _payload;
			},
			userName: (...args) => {
				return args.length ? _userName = args[0] : _userName;
			},
			operatorId: (...args) => {
				return args.length ? _operatorId = args[0] : _operatorId;
			},
			results: () => {
				return _results;
			},
			reset: () => {
				_results = [];
				_dateStart = new Date();
				_dateEnd = new Date(_dateStart.setHours(_dateStart.getHours() - 1));
			},
			search: () => {
				console.log('about to search');
			}
		});

	}]);