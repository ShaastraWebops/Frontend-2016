'use strict';

angular.module('shaastra2016App')
  .controller('forgotPasswordCtrl', function ($scope, $http) {

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'auto',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/login');

    $scope.message = '';
    $scope.resetEmail = '';

    $scope.forgotPassword = function(form) {
      $scope.submitted = true;
        $scope.message = 'Working...';

      if(form.$valid) {
        $http.post('http://shaastra.org:8001/api/users/forgotPassword', { email: $scope.resetEmail })
          .success(function (message) {
            $scope.message = 'Sent a mail to ' + $scope.resetEmail + ' with further information';
              $scope.resetEmail = '';
          })
          .error(function (message) {
            $scope.message = 'Email does not exist (or) some error has occurred';
              $scope.resetEmail = '';
          });
      } else {
        $scope.message = 'Please enter valid email address';
      }
    };

  });
