'use strict';
angular.module('shaastra2016App')
  .controller('registerCtrl', function ($scope, Auth, $location) {
    $scope.UserName = "";
    $scope.Password = "";
    $scope.email = "";
    $scope.repassword = "";

    Auth.createUser({
      name: '234',
      email: 'abc@abc.c',
      password: 'abcabc',
      city: 'hys',
      phoneNumber: '9090909090',
      age: '31',
      gender: 1
    })
    .then( function() {
      // Account created, redirect to dashboard
      $location.url('#/dashboard');
    })
    .catch( function(err) {
      err = err.data;
      $scope.errors = {};

      // Update validity of form fields that match the mongoose errors
      // angular.forEach(err.errors, function(error, field) {
      //   form[field].$setValidity('mongoose', false);
      //   $scope.errors[field] = error.message;
      // });
    });

});
