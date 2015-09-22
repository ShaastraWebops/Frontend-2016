angular.module('shaastra2016App')
  .controller('EventsCtrl', function ($scope, Auth) {
    $scope.tabs = [{ 'name': 'About', 'data': 'tab one data' }, { 'name': 'Event Format', 'data': 'tab two data' }, { 'name': 'Problem Statement', 'data': 'tab three data' }, { 'name': 'FAQ', 'data': 'tab four data' }, { 'name': 'Prize Money', 'data': 'tab five data' }, { 'name': 'Contact Details', 'data': 'tab six data' }];
    $scope.i = 0;
    
    $scope.data = function(ch) {
    	$scope.i = ch;
    }
  
  });
