'use strict';

angular.module('shaastra2016App')
  .controller('showsExhibitonsCtrl', function ($scope, $anchorScroll, $location) {

    $scope.pageClass = 'page-showsAndExhibitions';

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.showsTabs = ["Tech and Innovation Fair 2016", "Past Performances"];
    $scope.tab = 0;

    $scope.changeTab = function (index) {
      $scope.tab = index;
    };

    $scope.scrollDown = function (element) {
      var temp = $location.hash();
      $location.hash(element);
      $anchorScroll();
      $location.hash(temp);
    };

  });
