'use strict';

angular.module('shaastra2016App')
  .controller('sponsorsCtrl', function ($scope) {

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });
$scope.tab_2016=true;
$scope.tab_2015=false;
$scope.show2015 = function (){
  $scope.tab_2015 = true;
  $scope.tab_2016= false;
  
}

$scope.show2016 = function (){
  $scope.tab_2016 = true;
  $scope.tab_2015 = false; 
  
}

    $scope.message = "hello";
  });
  