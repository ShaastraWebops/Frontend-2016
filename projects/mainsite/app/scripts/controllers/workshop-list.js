/* jshint unused: false */

'use strict';
angular.module('shaastra2016App')
	.controller('workshopListCtrl', function ($scope, $interval, $http, $location) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'hidden'});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

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

		// this.details = lists;
		$scope.posX = 0;
		$scope.posY = 0;

		$scope.eventList = [];
		$http.get('http://shaastra.org:8001/api/eventLists/workshops')
			.then(function (response) {
				$scope.eventList = response.data;
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

