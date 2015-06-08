var app = angular.module('eventsVerticalApp',[]);
app.controller('eventsVerticalCtrl',function($scope){
	$scope.eventsJSON={
		eventCategoryName:'Coding Events',
		eventsRows:[
		{row:[
		{
			name:'Big Data Challenge',
			date:'3/Jan, 2015'
		},
		{
			name:'Crypto',
			date:'3/Jan, 2015'
		},
		{
			name:'Hackathon',
			date:'3/Jan, 2015'
		}
		]
		},
		{row:[
		{
			name:'Hackfest',
			date:'3/Jan, 2015'
		},
		{
			name:'Online Programming Contest',
			date:'3/Jan, 2015'
		},
		{
			name:'Reverse Coding',
			date:'3/Jan, 2015'
		}
		]
		}
		]
	};
});