/* jshint unused: false */

'use strict';
angular.module('shaastra2016App')
	.controller('eventListCtrl', function ($scope, $interval, $http, $location) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'hidden'});

		var lists2 = [{
		    name: "AeroFest",
		    imgUrl: "images/aerofest.png",
			},
			{
		    name: "B-Events",
		    imgUrl: "images/bevents.png",
			},
			{
		    name: "Coding",
		    imgUrl: "images/coding.png",
			},
			{
		    name: "Design And Build",
		    imgUrl: "images/coding.png",
			},
			{
		    name: "Department Flagship",
		    imgUrl: "images/Department-Flagship.jpg",
			},
			{
		    name: "Electronic Fest",
		    imgUrl: "images/Electronics.jpg",
			},
			{
		    name: "Involve",
		    imgUrl: "images/Involve.jpg",
			},
			{
		    name: "Quizzing",
		    imgUrl: "images/Quizzing.jpg",
			},
			{
		    name: "Spotlight",
		    imgUrl: "images/Spotlight.jpg",
			},
		];
		$scope.width_adjust=function(len){
			len=(len*90)vh;
			document.getElementById('flow').css({'width':'len'})
		};
		// this.details = lists;
		$scope.posX = 0;
		$scope.posY = 0;

		$scope.eventList = [];
		$scope.message = 'Loading...';
		$http.get('http://shaastra.org:8001/api/eventLists/events')
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

		$scope.gotoEventList = function (index) {
			// $location.path('#/event-category/asd');
			$location.path('event-category/' + $scope.eventList[index]._id);
		};
		// $scope.$digest();
		// $timeout(refresh, 1000);
		var i = 0;
		var refresh = $interval(function (i) {
			$scope.$broadcast('content.reload');
			i += 5;
		}, 100*i);
		$scope.$on('destroy', function () {
			$interval.cancel(refresh);
		});
	});

