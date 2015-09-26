'use strict';
angular.module('shaastra2016App')
  .controller('loginCtrl', function ($scope, Auth, $location) {
    $scope.UserName = "";
    $scope.Password = "";

        Auth.login({
          email: 'abc@abc.c',
          password: 'abcabc'
        })
        .then( function() {
        	console.log('sdasd');
          // Logged in, redirect to home
          $location.path('#/dashboard');
        })
        .catch( function(err) {
          console.log(err);
          // $scope.errors.other = err.message;
        });

});
