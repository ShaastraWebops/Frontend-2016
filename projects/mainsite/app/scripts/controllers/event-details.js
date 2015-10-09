'use strict';

angular.module('shaastra2016App')
  .controller('EventsCtrl', function ($scope, $http, $routeParams) {

    var backButton = $('#back-button');
    backButton.attr('link', '/event-category/' + $routeParams.eventCategoryId);

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'auto'});
    
    var converter = new showdown.Converter();
    $scope.xmark = function (b) {
      return converter.makeHtml(b);
    };

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
