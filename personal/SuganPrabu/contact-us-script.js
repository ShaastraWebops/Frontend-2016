var app = angular.module('contactUsApp',[]);
app.controller('contactUsCtrl', ['$scope', 
	function($scope){
		$scope.departmentsJSON = {
			departments:[
				{name: "Co-Curricular Affairs Secretary"}, 
				{name: "Concept & Design"},
				{name: "Events"},
				{name: "Finance & Sales"},
				{name: "Facilities & Catering"},
				{name: "Sponsorship & Public Relations"},
				{name: "Shows"},
				{name: "Marketing & Student Relations"},
				{name: "Quality Management Systems"},
				{name: "Evolve"},
				{name: "Envisage"},
				{name: "Web Operations"}
				]
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

