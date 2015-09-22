angular.module('shaastra2016App');
	.controller('dashboardCtrl', function ($scope, Auth) { 
		$scope.i = 0;
		$scope.data = function(ch) {
	    	$scope.i = ch;
	    }
		$scope.myItems = [];
		$scope.events={
			eventsList:[
			{
				eventName:"Manual Robotics",
				teamname:"SuperBot",
				teammembers:[
				'fgsgdbjds',
				'djkhgushdj',
				'ojfksakf'
			]},
			{
				eventName:"Autonomous Robotics",
				teamname:"Super1Bot",
				teammembers:[
					'gfsbjbv',
					'djgbjsd',
			]},
			{
				eventName:"eventName",
				teamname:"teamname",
				teammembers:[
				'teammember1',
				'teammember1',
				'teammember1',
				'teammember1',
				
			]}
		]};
		$scope.lists=[{
			    name: "AeroFest",
			    imgUrl: "images/aerofest.png",
				},
				{
			    name: "B-Events",
			    imgUrl: "images/bevents.png",
				},
				{
			    name: "Coding",
			    imgUrl: "images/coding.png",
				},
				{
			    name: "Design And Build",
			    imgUrl: "images/coding.png",
				},
				{
			    name: "Department Flagship",
			    imgUrl: "images/Department-Flagship.jpg",
				},
				{
			    name: "Electronic Fest",
			    imgUrl: "images/Electronics.jpg",
				},
				{
			    name: "Involve",
			    imgUrl: "images/Involve.jpg",
				},
				{
			    name: "Quizzing",
			    imgUrl: "images/Quizzing.jpg",
				},
				{
			    name: "Spotlight",
			    imgUrl: "images/Spotlight.jpg",
				},
			];
	});	