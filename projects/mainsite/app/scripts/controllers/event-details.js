'use strict';

angular.module('shaastra2016App')
  .controller('EventsCtrl', function ($scope, $http, $routeParams) {

    var backButton = $('#back-button');
    backButton.attr('link', '/event-category/' + $routeParams.eventCategoryId);

    //$scope.mark = ["mark1" , "mark2", "mark3"];
    var a = ["Wind", "Rain", "Fire"];
    $scope.m = function(){
      var n = '<marquee>'
      for( var i= 0; i<=2 ;i++)
      {
      n +=  a[i] + "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;";
      }
      n += '</marquee>';
      var j = a.join(' &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;');
      //document.getElementById("mark").innerHTML = n;
      document.getElementById("markin").innerHTML = j;


    } 

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto', 
      'overflow-x': 'hidden', 
      'background-color': '#f3f3f3'
    });
    
    $scope.message = 'Loading...';

    var converter = new showdown.Converter();
    $scope.xmark = function (b) {
      return converter.makeHtml(b);
    };

    $scope.eve = [];
    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.eventId)
      .then(function (response) {
        response.data.eventTabs.sort(function (a, b) {
          if(a.tabNumber < b.tabNumber) { return -1; }
          if(a.tabNumber > b.tabNumber) { return 1; }
          return 0;
        });
        var numAssignees = response.data.assignees.length;
        var contact = {
          'name': 'Contact Details',
          'info': '<p><b>For further details, please contact,</b></p>'
        };
        for(var i=0; i<numAssignees; i++) {
          contact.info += '<p>' + response.data.assignees[i].name + ' - ' + response.data.assignees[i].phoneNumber + '</p>';
        }
        response.data.eventTabs.push(contact);
        $scope.message = 'Stay tuned for Updates!';
        $scope.eve = response.data;
      });

    $scope.i = 0;
    
    $scope.info = function (ch) {
    	$scope.i = ch;
    };
  
  });
