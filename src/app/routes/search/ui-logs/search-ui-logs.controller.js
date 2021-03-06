require('angular');

const _ = require('lodash');

module.exports = angular.module('search-ui-logs-controller.module', [
		require('../../../services/ui-search.service').name
	])
	.controller('searchUiLogsController', ['UiSearchService', function(UiSearchService) {

		const ctrl = this;
		
		_.extend(ctrl, {
			init: function() {},
			operatorId : UiSearchService.operatorId,
			userName : UiSearchService.userName,
			payload : UiSearchService.payload,
			dateStart : UiSearchService.dateStart,
			search : ()=>{
				UiSearchService.clean(); // remove old results;
				UiSearchService.search();
			},
			modelOptions: {
				getterSetter: true
			}
		})
	}]);