// Landing Page Controller

(function() {
    'use strict';
    angular
        .module('weather.search')
        .controller('searchController', searchController);

    searchController.$inject = ['$log', 'weatherFactory', 'searchFactory', '$state'];

    function searchController($log, weatherFactory, searchFactory, $state) {

        var vm = this;

        // Propertys
        vm.countryList = '';
        vm.isSearchVisible = false;
        vm.searchString = '';

        // Functions
        vm.callFactory = callFactory;
        vm.autoCompleate = autoCompleate;

        // bind controller to function init
        (init.bind(this))();

        // Function declerations
        function init() {

            searchFactory
                .getLocationFromUserIP()
                .then(locationDoneCallback.bind(this), locationFailCallback);
        }

        function callFactory(params) {
            if(!params) return;

            weatherFactory
                .triggerLoadingIndicator(true);

            weatherFactory
                .getWeatherData(params)
                .then(weatherDataDoneCallback.bind(this), weatherDataFailCallback);

            vm.searchString = '';

        }

        function autoCompleate(value) {

            if (value.length < 3) {
                vm.countryList = "";
                return;
            }

            searchFactory
                .getCountrys(value)
                .then(countryDataDoneCallback, countryDataFailedCallback);

        }

        // Callbacks

        // location
        function locationDoneCallback(response) {

            var data = response.data;
            var value = data.city + ',' + data.country;

            this.callFactory(value);

        }

        function locationFailCallback(err) {

            //@todo: set default picture
            $log.error(err);

        }

        // weather
        function weatherDataDoneCallback(response) {

            weatherFactory.setForecast('weatherResult', response.data || null);
            weatherFactory.update();

            $state.go('weather.search.result');

        }

        function weatherDataFailCallback(err) {

            //@todo: notify user about the error
            $log.error(err);

        }

        // country
        function countryDataDoneCallback(response) {

            vm.countryList = ( response.data[0] !== "" )
                             ? response.data
                             : [];

        }

        function countryDataFailedCallback(err) {

            //@todo: hide typeahead 
            $log.log(err);

        }
    }

})();
