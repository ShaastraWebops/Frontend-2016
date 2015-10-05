/* global google */
/* jshint unused: false */

'use strict';
angular.module('shaastra2016App')
	.controller('contactUsCtrl', function ($scope, $modal) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'scroll'});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

		$scope.departmentsJSON = {
			departments:[{
				id: 0,
			  name: "Co-Curricular Affairs Secretary",
			  contacts: [{
			 		personName: "Shivaprasad T R",
			 		phone: "9176014050",
			 		mail: "shiva@shaastra.org"
			  }]
			}, 
			{
				id: 1,
		    name: "Concept & Design",
		 	  contacts: [{
		 			personName: "Naman Garg",
		 			phone: "9092603977",
		 			mail: "naman@shaastra.org"
	 			},
		 		{
		 			personName: "Bhagyesh Chaturvedi",
		 			phone: "9884182442",
		 			mail: "bhagyesh@shaastra.org"
		 		}]
		 	},
			{
				id: 2, 
			  name: "Events",
			  contacts: [{
			 		personName: "Siddharth Ahuja",
			 		phone: "8695108319",
			 		mail: "sid@shaastra.org"
			 	},
			 	{
			 		personName: "TK Balasaravanan",
			 		phone: "9840892717",
			 		mail: "bala@shaastra.org"
			 	},
			 	{
			 		personName: "Ajinkya",
			 		phone: "9087863454",
			 		mail: "ajinkya@shaastra.org"
			 	}]
			},
			{
				id: 3,
			  name: "Finance",
			  contacts: [{
			 		personName: "Botcha Pavana Kumar",
			 		phone: "9092006577",
			 		mail: "pavan@shaastra.org"
			 	},
			 	{
			 		personName: "Ravi Kumar G.D",
			 		phone: "9043814198",
			 		mail: "ravi@shaastra.org"
			 	}]
			},
			{
				id: 4,
			  name: "Facilities",
			  contacts: [{
			 		personName: "Amit Kumar Jha",
			 		phone: "9677161556",
			 		mail: "amit@shaastra.org"
			 	},
			 	{
			 		personName: "Geo Davis",
			 		phone: "7845657286",
			 		mail: "geo@shaastra.org"
			 	}]
			},
			{
				id: 5,
			  name: "Sponsorship & Public Relations",
			  contacts: [{
			 		personName: "Bhavik Rasyara",
			 		phone: "8939317150",
			 		mail: "bhavik@shaastra.org"
			 	},
			 	{
			 		personName: "Shashanka Rao",
			 		phone: "9498098063",
			 		mail: "shashanka@shaastra.org"
			 	},
			 	{
			 		personName: "Mahesh Kurup U",
			 		phone: "9444443592",
			 		mail: "kurup@shaastra.org"
			 	}]
			},
			{
				id: 6,
			  name: "Shows and Exhibitions",
			  contacts: [{
			 		personName: "Animesh Bagora",
			 		phone: "9884299639",
			 		mail: "animesh.bagora@shaastra.org"
			 	}]
			},
			{
				id: 7,
			  name: "Student Relations",
			  contacts: [{
			 		personName: "Saurabh Awatade",
			 		phone: "9043808645",
			 		mail: "saurabh@shaastra.org"
			 	},
			 	{
			 		personName: "Tejaswin P",
			 		phone: "8056112645",
			 		mail: "tejaswin@shaastra.org"
			 	},
			 	{
			 		personName: "NEHA AGARWAL",
			 		phone: "8754508380",
			 		mail: "nehaag@shaastra.org"
			 	}]
			},
			{
				id: 8,
			  name: "Quality Management Systems",
			  contacts: [{
			 		personName: "Sachin Arakeri",
			 		phone: "8056102482",
			 		mail: "sachin@shaastra.org"
			 	}]
			},
			{
				id: 9,
			 	name: "Evolve",
			 	contacts: [{
			 		personName: "Vedant Agrawal",
			 		phone: "9884299316",
			 		mail: "vedantagr@shaastra.org"
			 	},
			 	{
			 		personName: "Ayesha",
			 		phone: "9566533966",
			 		mail: "ayesha@shaastra.org"
			 	}]
			},
			{
				id: 10,
			  name: "Envisage",
			  contacts: [{
			 		personName: "Yashwanth I",
			 		phone: "8056070391",
			 		mail: "yashwanth.envi@shaastra.org"
			 	}]
			},
			{
				id: 11,
			  name: "Web and Mobile Operations",
			  contacts: [{
			 		personName: "Chinni Chaitanya",
			 		phone: "9003106573",
			 		mail: "chinni@shaastra.org"
			 	}]
			}]
		};
		
		$scope.init_map = function () {
			var map = new google.maps.Map(document.getElementById('map'), {
	    	center: { lat: 12.9915, lng: 80.2336 },
	    	zoom: 15,
	    	mapTypeId: google.maps.MapTypeId.ROADMAP
	  	});
		};
		
		$scope.displayModal = function (department) {
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
     	});
		};
	});

angular.module('shaastra2016App')
	.controller("ModalInstanceCtrl", function ($scope, $modalInstance, department) {
		$scope.department = department;
		$scope.close = function(){
			$modalInstance.dismiss('cancel');
		};
	});
