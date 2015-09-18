'use-strict';
angular.module('shaastra2016App')
	.controller('eventsCategoryCtrl', function ($scope, $rootScope, $location, $anchorScroll, $window) {
		$rootScope = "page-eventCategory";

		$scope.boolFixDiv = false;
	
		$scope.eventsJSON = {
			eventCategoryName:'Coding Events',
			eventCategoryImage: 'images/coding.png',
			events:[{
		  		name: 'Big Data Challenge',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/268px-IIT_Kharagpur_Logo.svg.png',
		  		eventURL: ''
				},
				{
		  		name: 'Crypto',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.sit.iitd.ac.in/site-assets/images/iitd_logo.png',
		  		eventURL: ''
				},
				{
		  		name: 'Hackathon',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.iitb.ac.in/sites/all/themes/touchm/logo.png',
		  		eventURL :''
				},
				{
		  		name: 'Hackfest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
				},
				{
		  		name: 'Online Programming Contest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.iitk.ac.in/rfidlabs/images/logo6.png',
		  		eventURL: ''
				},
				{
		  		name: 'Reverse Coding',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
	    	},
				{
		  		name: 'Hackfest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
				},
				{
		  		name: 'Online Programming Contest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.iitk.ac.in/rfidlabs/images/logo6.png',
		  		eventURL: ''
				},
				{
		  		name: 'Reverse Coding',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
	    	}
			]
  	};

	  $scope.scrollDown = function(element) {
			var temp = $location.hash();
			$location.hash(element);
			$anchorScroll();
			$location.hash(temp);
		};

		var winWidth = $(window).width();

		if(winWidth < 768 ) {
   		$scope.bootClassUsed = 'xs';
   		$scope.noOfCols = 2;
    } else if( winWidth >= 768 && winWidth <= 991) {
      console.log($scope.bootClassUsed);
   		$scope.noOfCols = 2;
    } else if( winWidth >= 992 && winWidth <= 1199) {
   		$scope.bootClassUsed = 'md';
   		$scope.noOfCols = 3;
    } else if( winWidth >= 1200 ) {
   		$scope.bootClassUsed = 'lg';
   		$scope.noOfCols = 3;
    }

		angular.element($window).bind("resize", function() {
			var winWidth =  $(window).width();
			if(winWidth < 768 ) {
				$scope.bootClassUsed = 'xs';
				$scope.noOfCols = 2;
			} else if( winWidth >= 768 && winWidth <= 991) {
			  console.log($scope.bootClassUsed);
			  $scope.noOfCols = 2;
			} else if( winWidth >= 992 && winWidth <= 1199) {
				$scope.bootClassUsed = 'md';
				$scope.noOfCols = 3;
			} else if( winWidth >= 1200 ) {
				$scope.bootClassUsed = 'lg';
				$scope.noOfCols = 3;
			}
  	});


		Array.prototype.chunk = function(chunkSize) {
	    var array = this;
	    return [].concat.apply([],
        array.map(function(elem, i) {
 	        return i%chunkSize ? [] : [array.slice(i, i+chunkSize)];
        })
	    );
		};
	
		$scope.val = $scope.eventsJSON.events.chunk($scope.noOfCols);

	});

	app.directive("scroll", function($window) {
		return function(scope, element, attrs) {
			angular.element($window).bind("scroll", function() {
					var ele = document.querySelector(".events");
					var top = ele.getBoundingClientRect().top;
					//115 is sum of event category div height and marginTop of events div - 5px for better display
					if(top <= 115) {	
						scope.boolFixDiv = true;
					} else {
						scope.boolFixDiv = false;
					}
					scope.$apply();
			});
		};
	});