/* jshint unused: false */

'use strict';
// angular.module('shaastra2016App').value('cgBusyDefualts',{
// 	templateUrl:'loading.html',
// });
angular.module('shaastra2016App')
	.controller('eventListCtrl', function ($scope, $interval, $http, $location) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'hidden'});

		var backButton = $('#back-button');
		backButton.attr('link', '/');


		$scope.promise = null;
		$scope.templateUrl=null;
		$scope.demo = function(){
			$scope.promise = $http.get('http://httpbin.org/delay/3');
		};

		// $scope.widthadjust=function(len){
		// 	len=len*900;//must be vh
		// 	var styling=angular.element(document.getElementsByClassName('wrap'));
		// 	styling.css({'width':'len'});
		// };
		// this.details = lists;
		$scope.posX = 0;
		$scope.posY = 0;
		$scope.templateUrl='views/loading.html';
		$scope.eventList = [];
		$scope.message = 'Loading...';
		$http.get('http://shaastra.org:8001/api/eventLists/events')
			.then(function (response) {
				$scope.eventList = response.data;
				$scope.message = 'Loading..';
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

		$scope.loadScroll = function () {
			$scope.$broadcast('content.reload');
		};

	});


