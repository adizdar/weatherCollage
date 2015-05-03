
// app.js

(function () {

  'use strict';

  // root modul decleration & dependency injection
  angular.module('weatherApp', [
	  'ui.router',
	  'ui.bootstrap', 
	  'weather.search',
    'weather.result',
    'weather.factory',
    'weather.directive'
	])
  .config(['$httpProvider', function ( $httpProvider ) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]);

	// sub-modul declerations
  angular.module('weather.search', ['ui.bootstrap.typeahead']);
  angular.module('weather.result', []);
  angular.module('weather.factory', []);
  angular.module('weather.directive', []);

})();