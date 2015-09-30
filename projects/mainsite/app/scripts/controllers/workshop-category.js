'use strict';

angular.module('shaastra2016App')
	.controller('workshopsCategoryCtrl', function ($scope, $rootScope, $location, $anchorScroll, $window, $http, $routeParams) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'scroll'});

		$scope.boolFixDiv = false;

		var workshopCategoryId = $routeParams.workshopCategoryId;
		$scope.workshopsJSON = [];
		$http.get('http://shaastra.org:8001/api/eventLists/workshops/' + workshopCategoryId)
			.then(function (response) {
				var num = response.data.events.length;
				for(var i=0; i<num; i++) {
					if(response.data.events[i].acceptedByAdmin === true) {
						response.data.events[i].imageURL = 'http://shaastra.org:8001/api/uploads/' + response.data.events[i].imageid + '/' + response.data.events[i].imagename;
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

		Array.prototype.chunk = function(chunkSize) {
	    var array = this;
	    return [].concat.apply([],
        array.map(function(elem, i) {
 	        return i%chunkSize ? [] : [array.slice(i, i+chunkSize)];
        })
	    );
		};

	});
