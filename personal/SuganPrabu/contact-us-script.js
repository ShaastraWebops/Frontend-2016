var app = angular.module('contactUsApp',[]);
app.controller('contactUsCtrl', ['$scope', 
	function($scope){
		$scope.setRhombusParams = function(ele, height, width){
			angular.element(ele).css('height', height);
			angular.element(ele).css('width', width);
		};
		$scope.initialize = function(){
			var ele = document.querySelector("#map");
			var options = {
				center: new google.maps.LatLng(12.9915, 80.2336),
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(ele, options);
		};
	}]);
<!-- Script for google maps -->

