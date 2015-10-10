'use strict';

angular.module('shaastra2016App')
	.controller('workshopsCategoryCtrl', function ($scope, $rootScope, $location, $anchorScroll, $window, $http, $routeParams) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'scroll'});

    var backButton = $('#back-button');
    backButton.attr('link', '/event-list');

		$scope.boolFixDiv = false;
		$scope.message = 'Loading...';
		var workshopCategoryId = $routeParams.workshopCategoryId;
		$scope.workshopsJSON = [];
		$scope.workshopList = [];
		$http.get('http://shaastra.org:8001/api/eventLists/workshops/' + workshopCategoryId)
			.then(function (response) {
				$scope.workshopList = response.data;
				response.data.events.sort(function (a, b) {
					if(a.name < b.name) { return -1 }
					if(a.name > b.name) { return 1 }
					return 0;
				});
				var num = response.data.events.length;
				for(var i=0; i<num; i++) {
					if(response.data.events[i].acceptedByAdmin === true) {
						response.data.events[i].imageURL = 'http://shaastra.org:8001/api/uploads/' + response.data.events[i].imageid + '/' + response.data.events[i].imagename;
						$scope.workshopsJSON.push(response.data.events[i]);
					}
				}
				$scope.message = 'Stay tuned for Updates!';
			});
		
  	$scope.gotoWorkshopDetails = function (index) {
  		$location.path('workshop/' + workshopCategoryId + '/' + $scope.workshopsJSON[index]._id);
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
