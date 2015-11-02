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
    });


    $scope.teamBlockMessage = '';
    $scope.teamCreateMessage = '';
    $scope.eventUnRegisterMessage = '';
    $scope.eventRegisterMessage = '';
    // $scope.eventsRgistered = [];
    $scope.all_events = [];
    $scope.all_teams = [];
    $scope.teamsCreated = [];
    $scope.teamRequire = "";
    $scope.singleMember = false;
    $scope.showDate = false;
    $scope.eventDate = null;
    $scope.sortedTeams = [];
    $scope.teamName = "";
    $scope.teamSelected = '';
    $scope.eventSelected = '';

    // $http.get('http://shaastra.org:8001/api/events')
    $http.get('http://shaastra.org:8001/api/events')
      .then(function (response) {
      	response.data.sort(function (a, b) {
					if(a.name < b.name) { return -1; }
					if(a.name > b.name) { return 1; }
					return 0;
      	});
        $scope.all_events = response.data;
      });

		$http.get('http://shaastra.org:8001/api/teams')
      .then(function (response) {
        var numTeams = response.data.length;
        for(var i=0; i<numTeams; i++) {
          if(response.data[i].selfTeam===true) {
            response.data[i].teamName += ' - Individual Participation';
          }
        }
        $scope.all_teams = response.data;
      });

      $scope.registerEvent = function() {
        if($scope.eventSelected !== '' && ($scope.teamSelected !== '' || $scope.singleMember === true)) {
          $scope.eventRegisterMessage = ' -- Working...';
      		var currentEvent = JSON.parse($scope.eventSelected);
          var currentTeam = {};
          if($scope.singleMember === false) {
      		  currentTeam = JSON.parse($scope.teamSelected);
          } else {
            currentTeam = $scope.user.selfTeam;
          }
      		var sendBody = {
      			eventRegistered: currentEvent._id,
      			team: currentTeam._id
      		};
      		$http.post('http://shaastra.org:8001/api/registrations', sendBody)
      			.then(function (response) {
              if(response.status === 204) {
                $scope.eventRegisterMessage = '';
                var numTeams = $scope.all_teams.length;
                for(var i=0; i<numTeams; i++) {
                  if($scope.all_teams[i]._id === currentTeam._id) {
                    $scope.all_teams[i].eventsRegistered.push(currentEvent);
                  }
                } 
      					$scope.eventSelected = '';
      					$scope.teamSelected = '';
                $scope.singleMember = false;
                $scope.teamRequire = "";
                $scope.eventDate = null;
      				}
      			});
      	} else {
          alert("Please select a team and an event");
        } 
      };

      $scope.unregisterEvent = function (team, event, eventIndex, teamIndex) {
        var result = confirm("Are you sure you want to Unregister? Only team-leader can unregister to an event and this action cannot be undone!");
        if(result) {
          $scope.eventUnRegisterMessage = ' -- Working...';
          $http.delete('http://shaastra.org:8001/api/registrations/' + team._id + '/' + event._id)
            .then(function (response) {
              if(response.status === 204) {
                $scope.eventUnRegisterMessage = '';
                $scope.all_teams[teamIndex].eventsRegistered.splice(eventIndex, 1);
              } else {
                $scope.eventUnRegisterMessage = 'Some error occurred';
              }
            });
        }
      };

      $scope.showTeamRequire = function() {
      	$scope.showDate = true;
      	var currentEvent = JSON.parse($scope.eventSelected);

        var numTeams = $scope.all_teams.length;
        for(var i=0; i<numTeams; i++) {
          if($scope.all_teams[i].teamMembers.length >= currentEvent.minTeamMembers && $scope.all_teams[i].teamMembers.length <= currentEvent.maxTeamMembers) {
            $scope.sortedTeams.push($scope.all_teams[i]);
          }
        }

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
    		if($scope.newTeamMember !== "" && $scope.user.festID !== $scope.newTeamMember.toUpperCase()) {
    			$scope.membersAdded = $scope.membersAdded + " , " + $scope.newTeamMember ;
    			$scope.members_Added.push($scope.newTeamMember);
    			$scope.newTeamMember = "";
    		} else {
          $scope.newTeamMember = "";
        }
    	};
    	$scope.createNewTeam = function() {
       if($scope.teamName !== '' && $scope.members_Added.length !== 0) {
    		$scope.teamCreateMessage = " -- Working...";
    		$http.post('http://shaastra.org:8001/api/teams', {
    			teamMembers: $scope.members_Added,
    			teamName: $scope.teamName
    		})
  			.then(function (response){
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
       } else {
          alert("Please select a team name and add members"); 
       }
    	};

	$scope.leaveTeam = function (index) {
    var result = confirm("Are you sure you want to Leave Team? This action cannot be undone!");
    if(result) {
  		$scope.teamBlockMessage = ' -- Working...';
  		var teamId = $scope.all_teams[index]._id;
  		$http.post('http://shaastra.org:8001/api/teams/leave/'+ teamId)
  		  .then(function (response) {
    			if(response.status === 200) {
    				$scope.teamBlockMessage = '';
    				$scope.all_teams.splice(index, 1);
    			} else {
    				$scope.teamBlockMessage = 'Some error occurred!';
    			}
    		});
    }
	};

  $scope.deleteTeam = function (index) {
    var result = confirm("Are you sure you want to Delete Team? Only team-leader can delete the team and this action cannot be undone!");
    if(result) {
      $scope.teamBlockMessage = ' -- Working...';
      var teamId = $scope.all_teams[index]._id;
      $http.delete('http://shaastra.org:8001/api/teams/' + teamId)
        .then(function (response) {
          if(response.status === 204) {
            $scope.teamBlockMessage = '';
            $scope.all_teams.splice(index, 1);
          } else {
            $scope.teamBlockMessage = 'Some error occurred';
          }
        });
    }
  };

});
