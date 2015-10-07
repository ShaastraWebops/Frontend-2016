'use strict';

angular.module('shaastra2016App')
	.controller('eventsCategoryCtrl', function ($scope, $rootScope, $location, $anchorScroll, $window, $http, $routeParams) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'scroll'});

		var backButton = $('#back-button');
		backButton.attr('link', '/event-list');

		$scope.boolFixDiv = false;
		$scope.message = 'Loading...';
		var eventCategoryId = $routeParams.eventCategoryId;
		$scope.eventsJSON = [];
		$http.get('http://shaastra.org:8001/api/eventLists/events/' + eventCategoryId)
			.then(function (response) {
				var num = response.data.events.length;
				console.log(response.data.events);
				console.log(num);
				// for(var i=0; i<num; i++) {
				// 	if(response.data.events[i].acceptedByAdmin === true) {
				// 		response.data.events[i].imageURL = 'http://shaastra.org:8001/api/uploads/' + response.data.events[i].imageid + '/' + response.data.events[i].imagename;
				// 	} else {
				// 		response.data.events.splice(i, 1);
				// 	}
				// }
				response.data.events.forEach(func);
				function func(elem, index, array) {
					if(elem.acceptedByAdmin === true) {
						elem.imageURL = 'http://shaastra.org:8001/api/uploads/' + elem.imageid + '/' + elem.imagename;
					} else {
						response.data.events.splice(index, 1);
					}
				}
				// response.data.events = array;
				$scope.eventsJSON = response.data;
				console.log($scope.eventsJSON);
				$scope.message = 'Stay tuned for Updates!';
			});

		$scope.eventsJSON2 = {
			eventCategoryName:'Coding Events',
			eventCategoryImage: 'images/coding.png',
			events:[{
		  		name: 'Big Data Challenge',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/268px-IIT_Kharagpur_Logo.svg.png',
		  		eventURL: ''
				},
				{
		  		name: 'Crypto',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.sit.iitd.ac.in/site-assets/images/iitd_logo.png',
		  		eventURL: ''
				},
				{
		  		name: 'Hackathon',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.iitb.ac.in/sites/all/themes/touchm/logo.png',
		  		eventURL :''
				},
				{
		  		name: 'Hackfest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
				},
				{
		  		name: 'Online Programming Contest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.iitk.ac.in/rfidlabs/images/logo6.png',
		  		eventURL: ''
				},
				{
		  		name: 'Reverse Coding',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
	    	},
				{
		  		name: 'Hackfest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
				},
				{
		  		name: 'Online Programming Contest',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://www.iitk.ac.in/rfidlabs/images/logo6.png',
		  		eventURL: ''
				},
				{
		  		name: 'Reverse Coding',
		  		date: '3/Jan, 2015',
		  		imageURL: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1024px-IIT_Madras_Logo.svg.png',
		  		eventURL: ''
	    	}
			]
  	};

  	$scope.gotoEventDetails = function (index) {
  		$location.path('event/' + $scope.eventsJSON.events[index]._id);
  	};

	  $scope.scrollDown = function (element) {
			var temp = $location.hash();
			$location.hash(element);
			$anchorScroll();
			$location.hash(temp);
		};

		Array.prototype.chunk = function(chunkSize) {
	    var array = this;
	    return [].concat.apply([],
        array.map(function(elem, i) {
 	        return i%chunkSize ? [] : [array.slice(i, i+chunkSize)];
        })
	    );
		};
	
	});
