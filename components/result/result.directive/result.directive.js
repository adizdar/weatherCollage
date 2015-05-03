(function() {

    'use strict';

    angular
        .module('weather.directive')
        .directive('weatherResult', weatherResult);

    function weatherResult() {
        var directive = {
            link: link,
            templateUrl: 'components/result/result.directive/result.weather.html',
            restrict: 'EA',
            controller: weatherResultController,
            controllerAs: 'result',
            bindToController: true,
            scope: { weather : '=', city : '=', active: '=?' }
        };

        return directive;
    }

    /*=============================================
    =            Section controller               =
    =============================================*/
    
    weatherResultController.$inject = ['$scope', '$element', '$attrs'];

    function weatherResultController($scope, $element, $attrs) {

        var vm = this,
            collections = WeatherCollections;

        /**
         * @description function assigment to controller
         */
        
        vm.convertUnixDate = convertUnixDate;
        vm.addIconViaId = addIconViaId;

        /**
         * @description function decleration
         */
        
        function convertUnixDate(unixDate) {
            var date = new Date(unixDate * 1000);

            return collections.weeakDay[date.getDay()] + ', ' 
            + collections.monthName[date.getMonth()] + ' ' 
            + date.getDate();
        }

        function addIconViaId( id ) {

            var icons = collections.icons();
            return icons.getIcon( id );
            
        }
    }

    /*-----  End of Section controller   ------*/


    /*=============================================
    =            Section link function            =
    =============================================*/

    function link(scope, element, attrs, $document) {

          var vm = this;

          /**
           * @description watch for slider item change
           */
          scope.$watch('active', getActiveSlider.bind(scope));

    }

    /**
     * [getActiveSlider, get active item in carousel, change body & search color]
     * @param  {active :boolean}
     */
     function getActiveSlider(active) {
        var id, body;

        if (active) {
           id = this.weather.weather[0].id;
           body = document.querySelector('body');
           
           body.querySelector('.glyphicon-search').style.color = 
           body.style.backgroundColor = WeatherCollections.icons().getColor(id);
           
           body = null;
        }
      }

    /*-----  End of Section link function  ------*/

})();