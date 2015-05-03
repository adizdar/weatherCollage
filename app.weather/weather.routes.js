// app.routes

(function() {

    'use strict';

    // state config
    angular.module('weatherApp').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('weather', {
            abstract: true
        })

        .state('weather.search', {
            url: '/',
            views: {
                'search@': {
                    templateUrl: 'components/search/search.html',
                    controller: 'searchController as searchCtrl'
                }
            }
        })

        .state('weather.search.result', {
            url: '/:result',
            views: {
                'result@': {
                    templateUrl: 'components/result/result.html',
                    controller: 'resultController as resultCtrl'
                }
            }
        });

    });

})();
