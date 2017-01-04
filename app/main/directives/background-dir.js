'use strict';
angular.module('main')
.directive('backImg', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      attrs.$observe('backImg', function (value) {
        element.css({
          'background-image': 'url(' + value + ')',
          'background-size': 'cover'
        });
      });
    }
  };
});
