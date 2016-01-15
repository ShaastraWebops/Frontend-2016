'use strict';

angular.module('shaastra2016App')
  .controller('hospiCtrl', function ($scope) {

    $scope.pageClass = 'page-hospitality';

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'auto',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";

    $scope.hospiSponsor = [{
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/c_scale,w_300,fl_lossy,f_auto,q_80/v1452713528/sponsors/2016/Hospitality-Partner/sbi.jpg',
        link1: 'http://www.sbi.co.in'
      },
      {
        image1: 'http://res.cloudinary.com/shaastra-org/image/upload/v1452031701/sponsors/2016/Stay-Partner/stayzilla.jpg',
        link1: 'http://stayzilla.com/'
      }];
  });
