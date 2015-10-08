'use strict';

angular.module('shaastra2016App')
  .controller('EventsCtrl', function ($scope, $http, $routeParams) {

    var backButton = $('#back-button');
    backButton.attr('link', '/event-category/' + $routeParams.eventId);
    
    $scope.eve = [];
    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.eventId)
      .then(function (response) {
        $scope.eve = response.data;
      });

    $scope.i = 0;
    
    $scope.info = function (ch) {
    	$scope.i = ch;
    };
  
  });
