'use strict';

angular.module('shaastra2016App')
	.directive('backgroundImageDirective', function () {
    return function (scope, element, attrs) {
      element.css({
        'background-image': 'url(' + attrs.backgroundImageDirective + ')',
        'background-repeat': 'no-repeat',
        'background-color': '#5E610B'
      });
    };
	});
