// Search Factory

(function() {
    'use strict';

    angular
        .module('weather.search')
        .factory('searchFactory', searchFactory);

    searchFactory.$inject = ['$log', '$http'];

    function searchFactory($log, $http) {

        var _geoBaseUrl = 'http://gd.geobytes.com/',
            _data = {};

        var _factory = {
            getCountrys: getCountrys,
            getLocationFromUserIP: getLocationFromUserIP
        };

        return _factory;

        ////////////////

        function getCountrys(value) {

            return $http({
                method: 'GET',
                url: _geoBaseUrl + 'AutoCompleteCity?q=' + value
            });

        }

        function getLocationFromUserIP() {

            return $http({
                method: 'GET',
                url: 'http://ipinfo.io/json'
            });

        }

    }

})();
