'use strict';

angular.module('shaastra2016App')
  .controller('sponsorsCtrl', function ($scope) {

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";
  });
