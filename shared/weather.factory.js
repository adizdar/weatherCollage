
// Search Factory

(function() {
    'use strict';

    angular
          .module('weather.factory')
          .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$log', '$http', '$rootScope'];

    function weatherFactory($log, $http, $rootScope) {

        var _baseUrl = 'http://api.openweathermap.org/data/2.5/',
            _forecast = {};

        var _factory = {
            triggerLoadingIndicator: triggerLoadingIndicator,            
            getWeatherData : getWeatherData,
            setForecast : setForecast,
            getForecast : getForecast,
            update : update
        };

        return _factory;

        ////////////////

        function triggerLoadingIndicator(key) {
            $rootScope.$broadcast('loading:toggle', key);
        }

        function getWeatherData(params) {

         return $http({
            method: 'GET',
            url: _baseUrl + 'forecast/daily?q=' + params + '&cnt=5&units=metric'
          });
        
        }

        function getForecast(key) {
            return _forecast[key] || null;
        }

        function setForecast(key,value) {
            _forecast[key] = value || null;
        }

        function update(data) {
           $rootScope.$broadcast('weather:updated', data || true);
        }

    }

})();
