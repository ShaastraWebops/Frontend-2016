'use strict';

angular.module('shaastra2016App')
  .controller('resetPasswordCtrl', function ($scope, $location, $window, $http, $routeParams) {

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'auto',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/');

    $scope.message = '';

    $scope.reset = function() {
      $scope.submitted = true;
      $scope.message = 'Working...';

      $http.post('http://shaastra.org:8001/api/users/resetPassword/' + $routeParams.token, { newPassword: $scope.newPassword })
        .success(function (message) {
          $scope.message = '';
          $window.alert('Successfully changed');
          $location.url('/login');
        })
        .error(function (message) {
          $scope.message = 'Your token has been expired (or) is invalid';
          $scope.newPassword = '';
          $scope.confirmNewPassword = '';
        });
    };

  });
