'use strict';

angular.module('shaastra2016App')
  .controller('EventsCtrl', function ($scope, $http, $routeParams) {
    $scope.tabsTemp = [{ 
	    	'name': 'About', 
	    	'data': 'tab one data' 
    	}, 
    	{ 
    		'name': 'Event Format', 
    		'data': 'tab two data' 
    	}, 
    	{ 
    		'name': 'Problem Statement',
  			'data': 'tab three data' 
  		}, 
  		{ 
  			'name': 'FAQ', 
  			'data': 'tab four data' 
  		}, 
  		{ 
  			'name': 'Prize Money', 
  			'data': 'tab five data' 
  		}, 
  		{ 
  			'name': 'Contact Details', 
  			'data': 'tab six data' 
  		}
		];
    
    $scope.eve = [];
    $http.get('http://0.0.0.0:8001/api/events/showWeb/' + $routeParams.eventId)
      .then(function (response) {
        $scope.eve = response.data;
      });

    $scope.i = 0;
    
    $scope.info = function (ch) {
    	$scope.i = ch;
    };
  
  });
