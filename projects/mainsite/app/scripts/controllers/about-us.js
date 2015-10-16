'use strict';

angular.module('shaastra2016App')
  .controller('aboutUsCtrl', function ($scope) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'auto'});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";
  });
