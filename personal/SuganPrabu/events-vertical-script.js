var app = angular.module('eventsVerticalApp',[]);
app.controller('eventsVerticalCtrl',function($scope){
	$scope.eventsJSON={
		eventCategoryName:'Coding Events',
		eventsRows:[
		{row:[
		{
			name:'Big Data Challenge',
			date:'3/Jan, 2015',
			imageURL:'',
			eventURL:''
		},
		{
			name:'Crypto',
			date:'3/Jan, 2015',
			imageURL:'',
			eventURL:''
		},
		{
			name:'Hackathon',
			date:'3/Jan, 2015',
			imageURL:'',
			eventURL:''
		}
		]
		},
		{row:[
		{
			name:'Hackfest',
			date:'3/Jan, 2015',
			imageURL:'',
			eventURL:''
		},
		{
			name:'Online Programming Contest',
			date:'3/Jan, 2015',
			imageURL:'',
			eventURL:''
		},
		{
			name:'Reverse Coding',
			date:'3/Jan, 2015',
			imageURL:'',
			eventURL:''
		}
		]
		}
		]
	};
app.directive('backImg',function(){
	return function(scope,element,attrs){
		var url=attrs.backImg;
		element.css({
			'backImg':'url('+url+')',
			'backround-size':'cover'
		});
	};
});
});

