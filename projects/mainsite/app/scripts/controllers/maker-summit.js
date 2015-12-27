'use strict';

angular.module('shaastra2016App')
  .controller('makerSummitCtrl', function ($scope, $location, $anchorScroll) {

    $scope.pageClass = 'page-makerSummit';

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

    $scope.makersTabs = ['Home', 'Event', 'Tracks', 'Speakers', 'Registration', 'Schedule', 'Contact Us'];
    $scope.tab = 0;

    $scope.changeTab = function (index) {
      $scope.tab = index;
    };

  });
