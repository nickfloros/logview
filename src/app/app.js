require('angular');

const uiBootstrap = require('angular-ui-bootstrap'),
	uiRouter = require('angular-ui-router');

angular.module('logview',[
	uiBootstrap,
	uiRouter,
	// routes
	require('./routes/home/home.route').name,
	// directives
	require('./components/nav-bar/nav-bar.directive').name,
	require('./components/search-options/search-options.directive').name
	]);