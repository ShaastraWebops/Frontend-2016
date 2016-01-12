'use strict';

angular.module('shaastra2016App')
  .controller('accomCalcCtrl', function ($scope) {

    $scope.pageClass = 'page-accomCalc';

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'auto',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.costPerDay = 100;
    $scope.totalCost = 0;
    $scope.accomNumber = 0;
    $scope.members = [];
    $scope.numDaysOfStay = [];
    $scope.individualCost = [];
    $scope.changeAccomNum = function (n) {
      $scope.numDaysOfStay = [];
      $scope.individualCost = [];
      $scope.members = [];
      for(var i=0; i<n; i++) {
        $scope.members.push(i);
        $scope.numDaysOfStay.push(0);
        $scope.individualCost.push(0);
      }
    };

  });
