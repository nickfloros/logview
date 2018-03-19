require('angular');

const _ = require('lodash');

module.exports = angular.module('search-ui-logs-controller.module', [
		require('../../../services/ui-search.service').name
	])
	.controller('searchUiLogsController', ['UiSearchService', function(UiSearchService) {

		const ctrl = this;
		let _payload = 'x';

		_.extend(ctrl, {
			init: function() {},
			payload : UiSearchService.payload,
			dateStart : UiSearchService.dateStart,
			search : UiSearchService.payload,
			modelOptions: {
				getterSetter: true
			}
		})
	}]);