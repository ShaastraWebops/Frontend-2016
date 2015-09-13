'use strict';

 angular.module('shaastra2016App')
.controller('eventListCtrl', function ($scope) {
	this.details = lists;

	$scope.posX = 0;
	$scope.posY = 0;

	$scope.moveX = function (pixels) {
		$scope.posX = $scope.posX +  pixels;
	};
	$scope.moveY = function (pixels) {
		$scope.posY = $scope.posY + pixels;
	};
	$scope.$evalAsync(function () {
		$scope.$broadcast('content.changed', 1000);
	});
	var lists=[
{
		    name: "Aerofest",
		    imgUrl: "images/aerofest.png",
		},
		{
		    name: "B-events",
		    imgUrl: "images/bevents.png",
		},
		{
		    name: "Coding",
		    imgUrl: "images/coding.png",
		},
		{
		    name: "Design And Build",
		    imgUrl: "images/design and build.png",
		},
		{
		    name: "Department Flagship",
		    imgUrl: "images/aerofest.png",
		},
		{
		    name: "Electronic Fest",
		    imgUrl: "images/aerofest.png",
		},
		{
		    name: "Involve",
		    imgUrl: "images/aerofest.png",
		},
		{
		    name: "Quizzing",
		    imgUrl: "images/aerofest.png",
		},
		{
		    name: "Spotlight",
		    imgUrl: "images/aerofest.png",
		},
		
];
});
