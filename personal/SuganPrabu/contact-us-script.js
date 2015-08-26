var app = angular.module('contactUsApp',['ui.bootstrap']);
app.controller('contactUsCtrl', ['$scope', '$modal',
	function($scope, $modal){
		$scope.departmentsJSON = {
			departments:[
				{id: 0,
				 name: "Co-Curricular Affairs Secretary",
				 contacts: [
				 {
				 	personName: "SIDDHARTH DIALANI",
				 	phone: "9884308764",
				 	mail: "siddharth@shaastra.org"
				 }]}, 
				{id: 1,
			     name: "Concept & Design",
			 	 contacts: [
				 {
				 	personName: "ASHAY MAKIM",
				 	phone: "9043812193",
				 	mail: "ashay@shaastra.org"
				 }]},
				{id: 2, 
				 name: "Events",
				 contacts: [
				 {
				 	personName: "SHIVAPRASAD TR",
				 	phone: "9176014050",
				 	mail: "shiva@shaastra.org"
				 }]},
				{id: 3,
				 name: "Finance & Sales",
				 contacts: [
				 {
				 	personName: "VINAY CHITTETI",
				 	phone: "7845604564",
				 	mail: "vinay@shaastra.org"
				 }]},
				{id: 4,
				 name: "Facilities & Catering",
				 contacts: [
				 {
				 	personName: "ABHISHEK SHARMA",
				 	phone: "9940116444",
				 	mail: "abhishek@shaastra.org"
				 }]},
				{id: 5,
				 name: "Sponsorship & Public Relations",
				 contacts: [
				 {
				 	personName: "SHUBHAM JAIN",
				 	phone: "9962035992",
				 	mail: "shubham@shaastra.org"
				 }]},
				{id: 6,
				 name: "Shows",
				 contacts: [
				 {
				 	personName: "",
				 	phone: "",
				 	mail: ""
				 }]},
				{id: 7,
				 name: "Marketing & Student Relations",
				 contacts: [
				 {
				 	personName: "NAMIT CHAUDHARY",
				 	phone: "9962878704",
				 	mail: "namit@shaastra.org"
				 }]},
				{id: 8,
				 name: "Quality Management Systems",
				 contacts: [
				 {
				 	personName: "DHRUVA KATREKAR",
				 	phone: "9962303153",
				 	mail: "dhruva@shaastra.org"
				 }]},
				{id: 9,
				 name: "Evolve",
				 contacts: [
				 {
				 	personName: "",
				 	phone: "",
				 	mail: ""
				 }]},
				{id: 10,
				 name: "Envisage",
				 contacts: [
				 {
				 	personName: "SANDEEP KRISHNA",
				 	phone: "9789808683",
				 	mail: "sandeep@shaastra.org"
				 }]},
				{id: 11,
				 name: "Web Operations",
				 contacts: [
				 {
				 	personName: "",
				 	phone: "",
				 	mail: ""
				 }]}
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
		$scope.displayModal = function(department){
		console.log("Clicked");
		var modalInstance = $modal.open({
	  		templateUrl: 'myModalContent.html',
      		controller: 'ModalInstanceCtrl',
      		resolve: {
        		department: function () {
          			return department;
        		}
      		}
		});
		modalInstance.result.then(function (selectedItem) {
    	  $scope.selected = selectedItem;
    	}, function () {
      	});
	}
	}]);
app.controller("ModalInstanceCtrl", function($scope, $modalInstance, department){
	$scope.department = department;
	$scope.close = function(){
		$modalInstance.dismiss('cancel');
	}
});
$('.rhombus').hover(function(){
	//$('.rhombus-front').animate({opacity : })
});
