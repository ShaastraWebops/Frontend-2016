'use strict';

angular.module('shaastra2016App')
  .controller('samparksCategoryCtrl', function ($scope, $location, $anchorScroll) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'auto'});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";

    $scope.samparksJSON = [{ 
      'id': 1,
    	'name': 'Madurai', 
    	'eventDate': "" 
  	}, 
  	{ 
      'id': 2,
  		'name': 'Trichy', 
      'image': 'images/Trichy.jpg',
  		'eventDate': "" 
  	},
    { 
      'id': 3,
      'name': 'Coimbatore', 
      'image': 'images/Coimbatore.jpg',
      'eventDate': "" 
    },
    { 
      'id': 4,
      'name': 'Cochin', 
      'eventDate': "" 
    },
    { 
      'id': 5,
      'name': 'Bengaluru', 
      'eventDate': "" 
    },
    { 
      'id': 6,
      'name': 'Vizag', 
      'eventDate': "" 
    },
    { 
      'id': 7,
      'name': 'Hyderabad', 
      'image': 'images/Hyderabad.jpg',
      'eventDate': "" 
    },
    { 
      'id': 8,
      'name': 'Pune', 
      'image': 'images/Pune.jpg',
      'eventDate': "" 
    }];

    $scope.gotoSamparkDetails = function (index) {
      $location.path('/samparks/' + index + '/' + $scope.samparksJSON[index].name);
    };

    $scope.scrollDown = function (element) {
      var temp = $location.hash();
      $location.hash(element);
      $anchorScroll();
      $location.hash(temp);
    };

  });
