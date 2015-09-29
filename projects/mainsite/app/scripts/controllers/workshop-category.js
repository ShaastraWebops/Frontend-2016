'use strict';

angular.module('shaastra2016App')
	.controller('workshopsCategoryCtrl', function ($scope, $rootScope, $location, $anchorScroll, $window, $http, $routeParams) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'scroll'});

		$scope.boolFixDiv = false;

		var workshopCategoryId = $routeParams.workshopCategoryId;
		$scope.workshopsJSON = [];
		$http.get('http://0.0.0.0:8001/api/eventLists/workshops/' + workshopCategoryId)
			.then(function (response) {
				var num = response.data.events.length;
				for(var i=0; i<num; i++) {
					if(response.data.events[i].acceptedByAdmin === true) {
						response.data.events[i].imageURL = 'http://0.0.0.0:8001/api/uploads/' + response.data.events[i].imageid + '/' + response.data.events[i].imagename;
					} else {
						response.data.events.splice(i, 1);
					}
				}
				$scope.workshopsJSON = response.data;
			});
		
  	$scope.gotoWorkshopDetails = function (index) {
  		$location.path('workshop/' + $scope.workshopsJSON.events[index]._id);
  	};

	  $scope.scrollDown = function (element) {
			var temp = $location.hash();
			$location.hash(element);
			$anchorScroll();
			$location.hash(temp);
		};

		// var winWidth = $(window).width();

		// if(winWidth < 768 ) {
  //  		$scope.bootClassUsed = 'xs';
  //  		$scope.noOfCols = 2;
  //   } else if( winWidth >= 768 && winWidth <= 991) {
  //     console.log($scope.bootClassUsed);
  //  		$scope.noOfCols = 2;
  //   } else if( winWidth >= 992 && winWidth <= 1199) {
  //  		$scope.bootClassUsed = 'md';
  //  		$scope.noOfCols = 3;
  //   } else if( winWidth >= 1200 ) {
  //  		$scope.bootClassUsed = 'lg';
  //  		$scope.noOfCols = 3;
  //   }

		// angular.element($window).bind("resize", function() {
		// 	var winWidth =  $(window).width();
		// 	if(winWidth < 768 ) {
		// 		$scope.bootClassUsed = 'xs';
		// 		$scope.noOfCols = 2;
		// 	} else if( winWidth >= 768 && winWidth <= 991) {
		// 	  console.log($scope.bootClassUsed);
		// 	  $scope.noOfCols = 2;
		// 	} else if( winWidth >= 992 && winWidth <= 1199) {
		// 		$scope.bootClassUsed = 'md';
		// 		$scope.noOfCols = 3;
		// 	} else if( winWidth >= 1200 ) {
		// 		$scope.bootClassUsed = 'lg';
		// 		$scope.noOfCols = 3;
		// 	}
  // 	});


		Array.prototype.chunk = function(chunkSize) {
	    var array = this;
	    return [].concat.apply([],
        array.map(function(elem, i) {
 	        return i%chunkSize ? [] : [array.slice(i, i+chunkSize)];
        })
	    );
		};
	
		// $scope.val = $scope.eventsJSON.events.chunk($scope.noOfCols);

	});

// angular.module('shaastra2016App')
// 	.directive("scroll", function ($window) {
// 		return function (scope, element, attrs) {
// 			angular.element($window).bind("scroll", function() {
// 				var ele = document.querySelector(".events");
// 				var top = ele.getBoundingClientRect().top;
// 				//115 is sum of event category div height and marginTop of events div - 5px for better display
// 				if(top <= 115) {	
// 					scope.boolFixDiv = true;
// 				} else {
// 					scope.boolFixDiv = false;
// 				}
// 				scope.$apply();
// 			});
// 		};
// 	});
