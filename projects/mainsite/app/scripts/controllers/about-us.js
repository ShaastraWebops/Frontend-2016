'use strict';

angular.module('shaastra2016App')
  .controller('aboutUsCtrl', function ($scope) {

    $scope.pageClass = 'page-aboutUs';

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'auto',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";
  });
