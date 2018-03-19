require('angular');

const _ = require('lodash');

module.exports = angular.module('search-res-logs-controller.module', [
		require('../../../services/ui-search.service').name
	])
	.controller('searchResLogsController', ['ResSearchService', function(UiSearchService) {

		const ctrl = this;
		
		_.extend(ctrl, {
			init: function() {},
			payload : UiSearchService.payload,
			dateStart : UiSearchService.dateStart,
			dateEnd : UiSearchService.dateEnd,
			search : ()=>{
				UiSearchService.clean(); // remove old results;
				UiSearchService.resSearch();
			},
			modelOptions: {
				getterSetter: true
			}
		})
	}]);