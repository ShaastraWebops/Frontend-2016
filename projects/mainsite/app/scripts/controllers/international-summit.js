'use strict';

angular.module('shaastra2016App')
  .controller('internationalSummitCtrl', function ($scope) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'auto'});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";
  });
