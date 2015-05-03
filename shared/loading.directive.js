/**
 * @desc directive for loading indicator
 * @example <div weather-loading></div>
 */

(function() {

    'use strict';

    angular
        .module('weather.directive')
        .directive('weatherLoading', weatherLoading);

    function weatherLoading() {
        var directive = {
          link: link,
          template: //@todo change with url's   
          '<div class="square-loader" ng-if="vm.loading"><div class="square-loader-inner"><span class="glyphicon glyphicon-cloud"></span></div></div>', 
          restrict: 'EA',
          controller: loadingController,
          controllerAs: 'vm',
          bindToController: true
        };

        return directive;

        loadingController.$inject = ['$scope'];

        function loadingController($scope) {
           var vm = this;

           vm.loading = false;

           $scope.$on('loading:toggle', toggleLoadingIndicator);

           function toggleLoadingIndicator(event, key) {
              vm.loading = key;
           }

        }

        function link(scope, element, attrs, vm) {

            /**
             * @description position loader always on screen center
             * @todo if css solution sucks on some screen uncoment this
             */

            // // get browser height and substract a litle bit
            // var positionY = window.innerHeight/2;
            // var htmlNode = element[0];

            // // center verticaly loading bar 
            // htmlNode.style.marginTop = positionY + 'px';
        }


    }

})();

