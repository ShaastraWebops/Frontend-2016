var app = angular.module('eventsVerticalApp',[]);
app.controller('eventsVerticalCtrl', ['$scope', '$location', '$anchorScroll', '$window',
	function($scope, $location, $anchorScroll, $window){
	$scope.boolFixDiv = false;
	$scope.scrollDown = function(element){
		var temp = $location.hash();
		$location.hash(element);
		$anchorScroll();
		$location.hash(temp);
	}
	$scope.eventsJSON={
		eventCategoryName:'Coding Events',
		eventCategoryImage: 'coding.png',
		eventsRows:[
  	  {row:[
				{
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
				}
				]
	  	},
	  	{row:[
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
	  	},
	  	{row:[
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
	  	}
			]
  };
}]);
app.directive("scroll", function($window){
	return function(scope, element, attrs){
		angular.element($window).bind("scroll", function(){
				var ele = document.querySelector(".events");
				var top = ele.getBoundingClientRect().top;
				console.log(scope.boolFixDiv);
				if(top<=115){	
					scope.boolFixDiv = true;
				}
				else{
					scope.boolFixDiv = false;
				}
				scope.$apply();
		});
	};
});