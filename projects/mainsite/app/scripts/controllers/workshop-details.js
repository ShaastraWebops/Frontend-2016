'use strict';

angular.module('shaastra2016App')
  .controller('WorkshopsCtrl', function ($scope, $http, $routeParams) {

    var backButton = $('#back-button');
    backButton.attr('link', '/workshop-category/' + $routeParams.eventId);
    
    $scope.eve = [];
    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.workshopId)
      .then(function (response) {
        if(response.data.eventTabs.length) {
          // Add contact info here
          // response.data.eventTabs.push()
        }
        $scope.eve = response.data;
      });

    $scope.i = 0;
    
    $scope.info = function (ch) {
    	$scope.i = ch;
    };
  
  });
