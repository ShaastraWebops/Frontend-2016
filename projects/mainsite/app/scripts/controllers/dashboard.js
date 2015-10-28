'use strict';
angular.module('shaastra2016App')
	.controller('dashboardCtrl', function ($scope, $http) { 

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

		$scope.i = 0;
		$scope.data = function (ch) {
    	$scope.i = ch;
    };

    $scope.all_events = [];
    $scope.teamRequire = "";
    $scope.singleMember = false;
    $scope.showDate = false;
    $scope.eventDate = null;
    $scope.sortedTeams = [];
    $scope.sortedTeams = ["Team1","Team2","Team3"];
    $scope.teamName = "";

    $http.get('http://shaastra.org:8001/api/events')
      .then(function (response) {
      	response.data.sort(function (a, b) {
					if(a.name < b.name) { return -1; }
					if(a.name > b.name) { return 1; }
					return 0;
      	});
        $scope.all_events = response.data;
        console.log($scope.all_events);
      });

      $scope.showTeamRequire = function() {
      	$scope.showDate = true;
      	var currentEvent = JSON.parse($scope.eventSelected);
      	$scope.eventDate = currentEvent.eventDate;
      	if(currentEvent.maxTeamMembers !== 1) {
      		$scope.teamRequire = currentEvent.minTeamMembers + " - " + currentEvent.maxTeamMembers+ " members";
      		$scope.singleMember = false;
      	}
      	else {
      		$scope.teamRequire = "Individual Registration";
      		$scope.singleMember = true;
      	}
      };

    	$scope.membersAdded = "You";
    	$scope.newTeamMember = "";
    	$scope.members_Added = [];

    	$scope.addTeamMember = function() {
    		if($scope.newTeamMember !== "") {
    			$scope.membersAdded = $scope.membersAdded + "," + $scope.newTeamMember ;
    			$scope.members_Added.push($scope.newTeamMember);
    			console.log($scope.members_Added);
    			$scope.newTeamMember = "";
    		}
    	};
    	$scope.createNewTeam = function() {
    		$http.post('http://localhost:8001/api/teams', {
    			teamMembers: $scope.members_Added,
    			teamName: $scope.teamName
    		})
  			.then(function (response){
  				console.log(response);
  			});
    	};

		$scope.myItems = [];
		$scope.events = {
			eventsList:[{
					eventName:"Manual Robotics",
					teamname:"SuperBot",
					teammembers:[
						'fgsgdbjds',
						'djkhgushdj',
						'ojfksakf'
					]
				},
				{
					eventName:"Autonomous Robotics",
					teamname:"Super1Bot",
					teammembers:[
						'gfsbjbv',
						'djgbjsd',
					]
				},
				{
					eventName:"eventName",
					teamname:"teamname",
					teammembers:[
						'teamvmember1',
						'teammdember1',
						'tedammember1',
						'teammembeer1',
					]
				}
			]
		};

	$scope.unregister = function (idx) {
		console.log("hello");
		if(idx !== -1) {
			$scope.events.eventsList.splice(idx, 1);
		}
	};

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
		}
	];

});
