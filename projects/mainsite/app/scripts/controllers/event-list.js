'use-strict';
angular.module('shaastra2016App')
	.controller('eventListCtrl', function ($scope, $timeout, $rootScope) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'hidden'});

		this.details = lists;
		$scope.posX = 0;
		$scope.posY = 0;

		$scope.moveX = function (pixels) {
			$scope.posX = $scope.posX +  pixels;
		};
		$scope.moveY = function (pixels) {
			$scope.posY = $scope.posY + pixels;
		};
		
		$scope.updateDOM = function() {
			$scope.$broadcast('content.reload');
		}
		// $scope.$digest();
		// $timeout(refresh, 1000);
	});

	var lists=[{
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
