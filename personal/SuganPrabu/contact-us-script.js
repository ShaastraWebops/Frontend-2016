var app = angular.module('contactUsApp',['ui.bootstrap']);
app.controller('contactUsCtrl', ['$scope', '$modal',
	function($scope, $modal){
		$scope.departmentsJSON = {
			departments:[
				{id: 0,
				 name: "Co-Curricular Affairs Secretary",
				 contacts: [
				 {
				 	personName: "Shivaprasad T R",
				 	phone: "9176014050",
				 	mail: "trshivaprasad@gmail.com"
				 }]}, 
				{id: 1,
			     name: "Concept & Design",
			 	 contacts: [
				 {
				 	personName: "Naman Garg",
				 	phone: "9092603977",
				 	mail: "nmngrg3a@gmail.com"
				 },
				 {
				 	personName: "Bhagyesh Chaturvedi",
				 	phone: "9884182442",
				 	mail: "bhagyesh.chaturvedi94@gmail.com"
				 }]},
				{id: 2, 
				 name: "Events",
				 contacts: [
				 {
				 	personName: "Siddharth Ahuja",
				 	phone: "8695108319",
				 	mail: "sahuja0302@gmail.com"
				 },
				 {
				 	personName: "TK Balasaravanan",
				 	phone: "9840892717",
				 	mail: "balatk95@gmail.com"
				 },
				 {
				 	personName: "Ajinkya",
				 	phone: "9087863454",
				 	mail: "ajinkya1mane@gmail.com"
				 }]},
				{id: 3,
				 name: "Finance",
				 contacts: [
				 {
				 	personName: "Botcha Pavana Kumar",
				 	phone: "9092006577",
				 	mail: "pavankmr1994@gmail.com"
				 },
				 {
				 	personName: "Ravi Kumar G.D",
				 	phone: "9043814198",
				 	mail: "ravigollapudi94@gmail.com"
				 }]},
				{id: 4,
				 name: "Facilities",
				 contacts: [
				 {
				 	personName: "Amit Kumar Jha",
				 	phone: "9677161556",
				 	mail: "ajhaamit39@gmail.com"
				 },
				 {
				 	personName: "Geo Davis",
				 	phone: "7845657286",
				 	mail: "geodavis88@gmail.com"
				 }]},
				{id: 5,
				 name: "Sponsorship & Public Relations",
				 contacts: [
				 {
				 	personName: "Bhavik Rasyara",
				 	phone: "8939317150",
				 	mail: ""
				 },
				 {
				 	personName: "Shashanka Rao",
				 	phone: "9498098063",
				 	mail: ""
				 },
				 {
				 	personName: "Mahesh Kurup U",
				 	phone: "9444443592",
				 	mail: "mku1990@gmail.com"
				 }]},
				{id: 6,
				 name: "Shows and Exhibitions",
				 contacts: [
				 {
				 	personName: "Animesh Bagora",
				 	phone: "9884299639",
				 	mail: "animesh.bagora@gmail.com"
				 }]},
				{id: 7,
				 name: "Student Relations",
				 contacts: [
				 {
				 	personName: "Saurabh Awatade",
				 	phone: "9043808645",
				 	mail: "saurabhawatade@gmail.com"
				 },
				 {
				 	personName: "Tejaswin P",
				 	phone: "8056112645",
				 	mail: "tejaswin.sarathy@gmail.com"
				 },
				 {
				 	personName: "NEHA AGARWAL",
				 	phone: "8754508380",
				 	mail: "nehaag.500@gmail.com"
				 }]},
				{id: 8,
				 name: "Quality Management Systems",
				 contacts: [
				 {
				 	personName: "Sachin Arakeri",
				 	phone: "8056102482",
				 	mail: "sachin.ua.140594@gmail.com"
				 }]},
				{id: 9,
				 name: "Evolve",
				 contacts: [
				 {
				 	personName: "Vedant Agrawal",
				 	phone: "9884299316",
				 	mail: "vedant.agrawal13@gmail.com"
				 },
				 {
				 	personName: "Ayesha",
				 	phone: "9566533966",
				 	mail: "ayesha2891@gmail.com"
				 }]},
				{id: 10,
				 name: "Envisage",
				 contacts: [
				 {
				 	personName: "Yashwanth I",
				 	phone: "8056070391",
				 	mail: "yashwanthmech25@gmail.com"
				 }]},
				{id: 11,
				 name: "Web and Mobile Operations",
				 contacts: [
				 {
				 	personName: "Chinni Chaitanya",
				 	phone: "9003106573",
				 	mail: "chchaitanya95@gmail.com"
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
