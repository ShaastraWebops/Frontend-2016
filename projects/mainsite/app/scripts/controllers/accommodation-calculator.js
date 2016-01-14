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

    $scope.costPerDay = 300;
    $scope.totalCost = 0;
    $scope.accomNumber = 0;
    $scope.members = [];
    $scope.numDaysOfStay = [];
    $scope.individualCost = [];
    $scope.firstDate = [];
    $scope.secondDate = [];
    $scope.validation = [];
    $scope.selectedTimes = ["00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

    $scope.changeAccomNum = function (n) {
      $scope.totalCost = 0;
      $scope.numDaysOfStay = [];
      $scope.individualCost = [];
      $scope.firstDate = [];
      $scope.secondDate = [];
      $scope.validation = [];
      $scope.members = [];
      for(var i=0; i<n; i++) {
        $scope.members.push(i);
        $scope.numDaysOfStay.push(0);
        $scope.individualCost.push(0);
        $scope.validation.push(false);
      }
    };

    $scope.addInDate = function (index, value, n) {
      $scope.numDaysOfStay[index] = 0;
      $scope.individualCost[index] = 0;
      var date1 = new Date(value);
      $scope.firstDate[index] = date1.getTime();
      if ($scope.firstDate[index] == undefined) {
        $scope.firstDate[index] = "null"
      }
      if ($scope.secondDate[index] == undefined) {
        $scope.secondDate[index] = "null"
      }
      if ($scope.firstDate[index] != "null" && $scope.secondDate[index] != "null" && $scope.secondDate[index] >= $scope.firstDate[index]) {
        $scope.totalCost = 0;
        var timeDiff = Math.abs($scope.secondDate[index] - $scope.firstDate[index]);   
        $scope.numDaysOfStay[index] = Math.ceil((timeDiff / (1000 * 3600 * 24)) + 1);
        $scope.individualCost[index] = $scope.costPerDay * $scope.numDaysOfStay[index];
        for(var i=0; i<n; i++) {
          $scope.totalCost = $scope.totalCost + $scope.individualCost[i];
        }
      }
    }

    $scope.addOutDate = function (index, value, n) {
      $scope.numDaysOfStay[index] = 0;
      $scope.individualCost[index] = 0;
      var date2 = new Date(value);
      $scope.secondDate[index] = date2.getTime();
      if ($scope.firstDate[index] == undefined) {
        $scope.firstDate[index] = "null"
      }
      if ($scope.secondDate[index] == undefined) {
        $scope.secondDate[index] = "null"
      }
      if ($scope.firstDate[index] != "null" && $scope.secondDate[index] != "null" && $scope.secondDate[index] >= $scope.firstDate[index]) {
        $scope.validation[index] = false;
        $scope.totalCost = 0;
        var timeDiff = Math.abs($scope.secondDate[index] - $scope.firstDate[index]);   
        $scope.numDaysOfStay[index] = Math.ceil((timeDiff / (1000 * 3600 * 24)) + 1);
        $scope.individualCost[index] = $scope.costPerDay * $scope.numDaysOfStay[index];
        for(var i=0; i<n; i++) {
          $scope.totalCost = $scope.totalCost + $scope.individualCost[i];
        }
      }
      if ($scope.firstDate[index] != "null" && $scope.secondDate[index] != "null" && $scope.secondDate[index] < $scope.firstDate[index]) {
        $scope.validation[index] = true;
      }
    }

  });
