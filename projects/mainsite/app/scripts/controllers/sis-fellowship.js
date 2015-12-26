'use strict';

angular.module('shaastra2016App')
  .controller('sisFellowshipCtrl', function ($scope, $location, $anchorScroll, Auth, $http) {

    $scope.pageClass = 'page-sisFellowship';

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow': 'auto',
      'background-color': '#f3f3f3'
    });

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.logged = false;
    Auth.isLoggedInAsync(function (loggedIn) {
      $scope.user = Auth.getCurrentUser();
      $scope.logged = loggedIn;
    });

    $scope.sisFellowshipWorking = false;
    $scope.sisFellowship = function() {
      $scope.sisFellowshipWorking = true;
      $http.post('http://shaastra.org:8001/api/users/sisFellowship')
        .then(function (response) {
          if(response.status === 200) {
            $scope.user.interestedInShaastraFellowship = true;
            $scope.sisFellowshipWorking = false;
            alert('Successfully registered for Shaastra Fellowship');
          } else {
            $scope.user.interestedInShaastraFellowship = false;
            $scope.sisFellowshipWorking = false;
            alert('Some error has occurred');
          }
        });
    };

    $scope.scrollDown = function (element) {
      var temp = $location.hash();
      $location.hash(element);
      $anchorScroll();
      $location.hash(temp);
    };

  });
