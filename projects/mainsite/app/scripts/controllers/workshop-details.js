'use strict';

angular.module('shaastra2016App')
  .controller('WorkshopsCtrl', function ($scope, $http, $routeParams) {

    var backButton = $('#back-button');
    backButton.attr('link', '/workshop-category/' + $routeParams.workshopCategoryId);

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow-y': 'auto'});
    
    $scope.message = 'Loading...';
    
    var converter = new showdown.Converter();
    $scope.xmark = function (b) {
      return converter.makeHtml(b);
    };
    
    $scope.eve = [];
    $http.get('http://shaastra.org:8001/api/events/showWeb/' + $routeParams.workshopId)
      .then(function (response) {
        var numAssignees = response.data.assignees.length;
        var contact = {
          'name': 'Contact Details',
          'info': '<p><b>For further details, please contact,</b></p>'
        }
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
