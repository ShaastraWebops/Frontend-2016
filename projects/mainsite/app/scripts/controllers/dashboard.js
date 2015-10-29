'use strict';
angular.module('shaastra2016App')
	.controller('dashboardCtrl', function ($scope, $http, Auth) { 

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

    Auth.isLoggedInAsync(function (loggedIn) {
    	$scope.user = Auth.getCurrentUser();
    	console.log($scope.user);
    });


    $scope.teamBlockMessage = '';
    $scope.teamCreateMessage = '';

    $scope.all_events = [];
    $scope.all_teams = [];
    $scope.teamsCreated = [];
    $scope.teamRequire = "";
    $scope.singleMember = false;
    $scope.showDate = false;
    $scope.eventDate = null;
    $scope.sortedTeams = [];
    // $scope.sortedTeams = ["Team1","Team2","Team3"];
    $scope.teamName = "";
    $scope.teamSelected = '';
    $scope.eventSelected = '';

    // $http.get('http://shaastra.org:8001/api/events')
    $http.get('http://localhost:8001/api/events')
      .then(function (response) {
      	response.data.sort(function (a, b) {
					if(a.name < b.name) { return -1; }
					if(a.name > b.name) { return 1; }
					return 0;
      	});
        $scope.all_events = response.data;
        console.log($scope.all_events);
      });

		$http.get('http://localhost:8001/api/teams')
      .then(function (response) {
        $scope.all_teams = response.data;
        console.log($scope.all_teams);
      });

      $scope.registerEvent = function() {
      	if($scope.eventSelected !== '' && $scope.teamSelected !== '') {
      		var currentEvent = JSON.parse($scope.eventSelected);
      		var currentTeam = JSON.parse($scope.teamSelected);
      		var sendBody = {
      			eventRegistered: currentEvent._id,
      			team: currentTeam._id
      		} 
      		$http.post('http://localhost:8001/api/registrations', sendBody)
      			.then(function (response) {
      				// console.log(response);
      				if(response.status === 204) {
      					$scope.eventSelected = '';
      					$scope.teamSelected = '';
      				}
      			});
      	} 
      };

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
    		$scope.teamCreateMessage = " -- Working...";
    		$http.post('http://localhost:8001/api/teams', {
    			teamMembers: $scope.members_Added,
    			teamName: $scope.teamName
    		})
  			.then(function (response){
  				console.log(response);
	  			if(response.status === 201) {
   					$scope.teamName = "";
    				$scope.members_Added = [];
    				$scope.newTeamMember = "";
   					$scope.membersAdded = "You";
   					$scope.teamCreateMessage = '';
   					$scope.all_teams.push(response.data);
	  			} else {
	  				$scope.teamCreateMessage = 'Some error occurred!';
	  			}
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




	$scope.leaveTeam = function (index) {
		$scope.teamBlockMessage = ' -- Working...';
		var teamId = $scope.all_teams[index]._id;
		$http.post('http://localhost:8001/api/teams/leave/'+ teamId)
		.then(function (response) {
			console.log(response);
			if(response.status === 200) {
				$scope.teamBlockMessage = '';
				$scope.all_teams.splice(index,1);
			} else {
				$scope.teamBlockMessage = 'Some error occurred!';
			}
		});


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
