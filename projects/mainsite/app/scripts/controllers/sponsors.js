'use strict';

angular.module('shaastra2016App')
  .controller('sponsorsCtrl', function ($scope) {

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.message = "hello";
  });
