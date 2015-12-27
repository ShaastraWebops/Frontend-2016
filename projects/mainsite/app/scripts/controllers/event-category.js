'use strict';

angular.module('shaastra2016App')
	.controller('eventsCategoryCtrl', function ($scope, $rootScope, $location, $anchorScroll, $window, $http, $routeParams) {

    $scope.pageClass = 'page-eventCategory';

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

		var backButton = $('#back-button');
		backButton.attr('link', '/event-list');

		$scope.boolFixDiv = false;
		$scope.message = 'Loading...';
		var eventCategoryId = $routeParams.eventCategoryId;
		$scope.eventsJSON = [];
		$scope.eventList = [];
		$http.get('http://shaastra.org:8001/api/eventLists/events/' + eventCategoryId)
			.then(function (response) {
				$scope.eventList = response.data;
				response.data.events.sort(function (a, b) {
					if(a.name < b.name) { return -1; }
					if(a.name > b.name) { return 1; }
					return 0;
				});
				var num = response.data.events.length;
				for(var i=0; i<num; i++) {
					if(response.data.events[i].acceptedByAdmin === true) {
						response.data.events[i].imageURL = 'http://shaastra.org:8001/api/uploads/' + response.data.events[i].imageid + '/' + response.data.events[i].imagename;
						$scope.eventsJSON.push(response.data.events[i]);
					}
				}
				$scope.message = 'Stay tuned for Updates!';
			});

  	$scope.gotoEventDetails = function (index) {
  		$location.path('event/' + eventCategoryId + '/' + $scope.eventsJSON[index]._id);
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
