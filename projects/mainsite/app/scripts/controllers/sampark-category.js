'use strict';

angular.module('shaastra2016App')
  .controller('samparksCategoryCtrl', function ($scope, $location, $anchorScroll) {

    $scope.pageClass = 'page-samparkCategory';

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow': 'auto',
      'background-color': '#f3f3f3'
    });

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = "hello";

    $scope.samparksJSON = [{ 
      'id': 1,
      'completed': true,
    	'name': 'Madurai', 
    	'eventDate': "" 
  	}, 
  	{ 
      'id': 2,
  		'name': 'Trichy', 
      'image': 'images/sampark/Trichy.jpg',
  		'eventDate': "" 
  	},
    { 
      'id': 3,
      'name': 'Coimbatore', 
      'image': 'images/sampark/Coimbatore.jpg',
      'eventDate': "" 
    },
    { 
      'id': 4,
      'completed': true,
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
      'completed': true,
      'name': 'Hyderabad', 
      'image': 'images/sampark/Hyderabad.jpg',
      'eventDate': "" 
    },
    { 
      'id': 8,
      'completed': true,
      'name': 'Pune', 
      'image': 'images/sampark/Pune.jpg',
      'eventDate': "" 
    },
    { 
      'id': 9,
      'completed': true,
      'name': 'Chennai', 
      'status': 'Completed',
      'eventDate': "" 
    },
    { 
      'id': 10,
      'completed': true,
      'name': 'Media Island', 
      'status': 'Completed',
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
