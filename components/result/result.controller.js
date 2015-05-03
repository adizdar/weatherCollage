
// Result Page Controller

(function() {
    'use strict';

    angular
          .module('weather.result')
          .controller('resultController', resultController);

    resultController.$inject = ['$log', 'weatherFactory', '$scope', '$stateParams', '$timeout'];

    function resultController($log, weatherFactory, $scope, $stateParams, $timeout) {
        var vm = this;
  
        /**
         * @description properties
         */
        
        vm.data = null;
        vm.forecast = null;
        vm.dailyWeather = null;
        vm.hideForecast = true;

        init();

        /**
         * [weather:updated, custom listener to inform the result controller of weather data update]
         * @type {listener}
         */
        $scope.$on('weather:updated', updateListener.bind(this));

        /**
         * @description function declerations 
         */

        function init() {
            var data = weatherFactory.getForecast('weatherResult');
            var forecast = data.list,
                city = data.city;

            vm.data = data;
            vm.city = city;
            vm.forecast = forecast;

            // delay so the show animation can take effect
            // if the app is loaded for the first time just hide the loading bar
            if(!vm.hideForecast) {            
                $timeout( showForecast, 800 ); 
            } else {
                weatherFactory.triggerLoadingIndicator(false);
            }
        }

        /**
         * [updateListener, update the forcast data after the user triggers new search]
         * @param  {event: browserEvent}
         * @param  {data: Object || boolean}
         * @return {none}
         */
         function updateListener( event, data ) {           
           this.hideForecast = false;
           if(data) init();
        }

        /**
         * [showForecast, show carousel after a shor delay so the animation can take effect]
         */
        function showForecast() {
            weatherFactory.triggerLoadingIndicator(false);
            vm.hideForecast = true;
        }

    }

})();
