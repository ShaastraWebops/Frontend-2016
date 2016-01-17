'use strict';

angular.module('shaastra2016App')
  .controller('lecturesCtrl', function ($scope, $location, $anchorScroll) {

    $scope.pageClass = 'page-lectures';

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.message = "hello";

    $scope.scrollDown = function (element) {
      var temp = $location.hash();
      $location.hash(element);
      $anchorScroll();
      $location.hash(temp);
    };
  });
