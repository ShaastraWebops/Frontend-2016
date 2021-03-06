/* jshint unused: false */

'use strict';
angular.module('shaastra2016App')
	.controller('workshopListCtrl', function ($scope, $interval, $http, $location) {

    $scope.pageClass = 'page-workshopList';

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'hidden',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

		// this.details = lists;
		$scope.posX = 0;
		$scope.posY = 0;

		$scope.eventList = [];
		$scope.message = 'Loading...';
		$http.get('http://shaastra.org:8001/api/eventLists/workshops')
			.then(function (response) {
				$scope.eventList = response.data;
				$scope.message = 'Stay tuned for Updates!';
			});

		$scope.moveX = function (pixels) {
			$scope.posX = $scope.posX +  pixels;
		};
		$scope.moveY = function (pixels) {
			$scope.posY = $scope.posY + pixels;
		};
		
		$scope.updateDOM = function() {
			$scope.$broadcast('content.reload');
		};

		$scope.gotoWorkshopList = function (index) {
			$location.path('workshop-category/' + $scope.eventList[index]._id);
		};

		var i = 0;
		var refresh = $interval(function (i) {
			$scope.$broadcast('content.reload');
			i += 5;
		}, 100*i);
		$scope.$on('destroy', function () {
			$interval.cancel(refresh);
		});
	});

