'use strict';

angular.module('shaastra2016App')
  .controller('showsExhibitonsCtrl', function ($scope) {

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";
  });
