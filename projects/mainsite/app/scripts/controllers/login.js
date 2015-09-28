'use strict';
angular.module('shaastra2016App')
  .controller('loginCtrl', function ($scope, Auth, $location, $http) {
    $scope.UserName = "";
    $scope.Password = "";

    Auth.login({
      email: 'core1@core.com',
      password: 'core'
    })
    .then( function() {
      // Logged in, redirect to home
      $location.path('/dashboard');
      $http.get('http://0.0.0.0:8001/api/users/me')
        .then(function (response) {
          console.log(response.data);
        });
    })
    .catch( function (err) {
      console.log(err);
      // $scope.errors.other = err.message;
    });

});
