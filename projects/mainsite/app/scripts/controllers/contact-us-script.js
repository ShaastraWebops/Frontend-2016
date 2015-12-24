/* global google */
/* jshint unused: false */

'use strict';
angular.module('shaastra2016App')
	.controller('contactUsCtrl', function ($scope, $modal) {

		$scope.pageClass = 'page-contactUs';

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'scroll',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

		$scope.departmentsJSON = {
			departments:[{
				id: 0,
			  name: "Co-Curricular Affairs Secretary",
		    offset: "",
		    col: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/shivaprasad.jpg",
			 		personName: "Shivaprasad T R",
			 		phone: "9176014050",
			 		mail: "shiva@shaastra.org"
			  }]
			}, 
			{
				id: 1, 
			  name: "Events",
		    offset: "",
		    col: "col-lg-4 col-md-4 col-sm-4 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/sid.jpg",
			 		personName: "Siddharth Ahuja",
			 		phone: "8695108319",
			 		mail: "sid@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/bala.jpg",
			 		personName: "TK Balasaravanan",
			 		phone: "9840892717",
			 		mail: "bala@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/ajinkya.jpg",
			 		personName: "Ajinkya",
			 		phone: "9087863454",
			 		mail: "ajinkya@shaastra.org"
			 	}]
			},
			{
				id: 2,
			  name: "Student Relations",
		    offset: "col-lg-offset-1 col-md-offset-1",
		    col: "col-lg-5 col-md-5 col-sm-6 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/saurabh.jpg",
			 		personName: "Saurabh Awatade",
			 		phone: "9043808645",
			 		mail: "saurabh@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/tejaswin.jpg",
			 		personName: "Tejaswin P",
			 		phone: "8056112645",
			 		mail: "tejaswin@shaastra.org"
			 	}]
			},
			{
				id: 3,
			 	name: "Evolve",
		    offset: "col-lg-offset-1 col-md-offset-1",
		    col: "col-lg-5 col-md-5 col-sm-6 col-xs-12",
			 	contacts: [{
		  		image: "images/core-team/vedant.jpg",
			 		personName: "Vedant Agrawal",
			 		phone: "9884299316",
			 		mail: "vedantagr@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/ayesha.jpg",
			 		personName: "Ayesha",
			 		phone: "9566533966",
			 		mail: "ayesha@shaastra.org"
			 	}]
			},
			{
				id: 4,
			  name: "Finance",
		    offset: "",
		    col: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/ravi.jpg",
			 		personName: "Ravi Kumar G.D",
			 		phone: "9043814198",
			 		mail: "ravi@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/pavan.jpg",
			 		personName: "Botcha Pavana Kumar",
			 		phone: "9092006577",
			 		mail: "pavan@shaastra.org"
			 	}]
			},
			{
				id: 5,
			  name: "Sponsorship & PR",
		    offset: "",
		    col: "col-lg-4 col-md-4 col-sm-4 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/bhavik.jpg",
			 		personName: "Bhavik Rasyara",
			 		phone: "8939317150",
			 		mail: "bhavik@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/shashanka.jpg",
			 		personName: "Shashanka Rao",
			 		phone: "9498098063",
			 		mail: "shashanka@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/kurup.jpg",
			 		personName: "Mahesh Kurup U",
			 		phone: "9444443592",
			 		mail: "kurup@shaastra.org"
			 	}]
			},
			{
				id: 6,
			  name: "Facilities",
		    offset: "col-lg-offset-1 col-md-offset-1",
		    col: "col-lg-5 col-md-5 col-sm-6 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/jha.jpg",
			 		personName: "Amit Kumar Jha",
			 		phone: "9677161556",
			 		mail: "amit@shaastra.org"
			 	},
			 	{
		  		image: "images/core-team/geo.jpg",
			 		personName: "Geo Davis",
			 		phone: "7845657286",
			 		mail: "geo@shaastra.org"
			 	}]
			},
			{
				id: 7,
			  name: "Shows and Exhibitions",
		    offset: "",
		    col: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/animesh.jpg",
			 		personName: "Animesh Bagora",
			 		phone: "9884299639",
			 		mail: "animesh.bagora@shaastra.org"
			 	}]
			},
			{
				id: 8,
			  name: "Quality Management Systems",
		    offset: "",
		    col: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/sachin.jpg",
			 		personName: "Sachin Arakeri",
			 		phone: "8056102482",
			 		mail: "sachin@shaastra.org"
			 	}]
			},
			{
				id: 9,
			  name: "Envisage",
		    offset: "",
		    col: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/yashwanth.jpg",
			 		personName: "Yashwanth I",
			 		phone: "8056070391",
			 		mail: "yashwanth.envi@shaastra.org"
			 	}]
			},
			{
				id: 10,
		    name: "Concept & Design",
		    offset: "col-lg-offset-1 col-md-offset-1",
		    col: "col-lg-5 col-md-5 col-sm-6 col-xs-12",
		 	  contacts: [{
		  		image: "images/core-team/bhagyesh.jpg",
		 			personName: "Bhagyesh Chaturvedi",
		 			phone: "9884182442",
		 			mail: "bhagyesh@shaastra.org"
		 		},
		 		{
		  		image: "images/core-team/naman.jpg",
		 			personName: "Naman Garg",
		 			phone: "9092603977",
		 			mail: "naman@shaastra.org"
		 		}]
		 	},
			{
				id: 11,
			  name: "Web and Mobile Operations",
		    offset: "",
		    col: "col-lg-12 col-md-12 col-sm-12 col-xs-12",
			  contacts: [{
		  		image: "images/core-team/chinni.jpg",
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
		
		$scope.displayModal = function (department, index) {
			department.selected = department.contacts[index];
			// console.log("Clicked");
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
