'use strict';

angular.module('shaastra2016App')
  .controller('sisFellowshipCtrl', function ($scope, $location, $anchorScroll) {

    $scope.pageClass = 'page-sisFellowship';

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow': 'auto',
      'background-color': '#f3f3f3'
    });

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.scrollDown = function (element) {
      var temp = $location.hash();
      $location.hash(element);
      $anchorScroll();
      $location.hash(temp);
    };

  });
