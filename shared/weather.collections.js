
/**
 * @description collections / enums for weather app
 * @param Object WeatherCollections $global_namespace for collection / enums
 * @todo transfer to factory/service one day
 */

var WeatherCollections={};

WeatherCollections.icons = function() {

      'use strict';

      var _enums = [
          [/3\d\d/g, 'wi wi-rain', '#6C7A89'],
          [/7+\d+\d/g, 'wi wi-fog', '#BDC3C7'],
          [/800/g, 'wi wi-day-sunny', '#F4B350'],
          [/802|803|804/g, 'wi wi-cloudy', '#52b3d9'],
          [/2\d\d/g, 'wi wi-thunderstorm', '#67809F'],
          [/(6+\d+\d)|(511)/g, 'wi wi-snow', '#ABB7B7'],
          [/801/g, 'wi wi-day-sunny-overcast', '#52b3d9'],
          [/(5+0+[0-4])|(5+2+\d)|(531)/g, 'wi wi-day-rain-mix', '#3498DB']
      ];

      var methods = {
            getIcon: getIcon,
            getColor : getColor
          };

      return methods;

      ///////////////

      function getIcon(id) {
         return get(id, 1);
      }

       function getColor(id) {
          return get(id, 2);
       }

      function get(id, selector) {
          var tempId = id.toString();
          id = tempId;

          for( var i=0, length = _enums.length; i !== length; i++ ) {
             id = id.replace(_enums[i][0], _enums[i][selector]);
             if(tempId !== id) return id;
          }

          // @todo: change with default value
          return null;
      }
};

WeatherCollections.weeakDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

WeatherCollections.monthName = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June",
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];