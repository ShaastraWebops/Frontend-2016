'use strict';

angular.module('shaastra2016App')
  .controller('EventsCtrl', function ($scope, $http, $routeParams) {

    var backButton = $('#back-button');
    backButton.attr('link', '/event-category/' + $routeParams.eventCategoryId);

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

    $scope.showRegister = false;
    $scope.currentDate = new Date(Date.now());

    var notifs = [];
    $scope.eve = [];
    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.eventId)
      .then(function (response) {
        response.data.eventTabs.sort(function (a, b) {
          if(a.tabNumber < b.tabNumber) { return -1; }
          if(a.tabNumber > b.tabNumber) { return 1; }
          return 0;
        });
        // var numAssignees = response.data.assignees.length;
        // var contact = {
        //   'name': 'Contact Details',
        //   'info': '<p><b>For further details, please contact,</b></p>'
        // };
        // for(var i=0; i<numAssignees; i++) {
        //   contact.info += '<p>' + response.data.assignees[i].name + ' - ' + response.data.assignees[i].phoneNumber + '</p>';
        // }
        // response.data.eventTabs.push(contact);

        // for marquee notifs start
        $scope.marquee = '';
        var numNotifs = response.data.marqueeNotifs.length;
        for(var i=0; i<numNotifs; i++) {
          notifs.push(response.data.marqueeNotifs[i].info);
        }
        var notifHtml = notifs.join(' &emsp;&emsp;&emsp;&emsp;&emsp;<span class="dot"></span>&emsp;');
        notifHtml = '<span class="dot"></span>&emsp;' + notifHtml;
        if(numNotifs > 0) {
          $scope.marquee = notifHtml;
        }
        // for marquee notifs end
        $scope.message = 'Stay tuned for Updates!';
        response.data.startReg = new Date(response.data.startReg);
        response.data.endReg = new Date(response.data.endReg);
        $scope.eve = response.data;
        if(response.data.startReg<= $scope.currentDate && response.data.endReg>= $scope.currentDate) {
          $scope.showRegister = true;
        } else {
          $scope.showRegister = false;
        }
      });

    $scope.i = 0;
    
    $scope.info = function (ch) {
      $scope.i = ch;
    };
  
  });
