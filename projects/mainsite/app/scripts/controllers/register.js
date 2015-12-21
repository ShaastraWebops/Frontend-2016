'use strict';

angular.module('shaastra2016App')
  .controller('registerCtrl', function ($scope, $http, Auth, $location) {

    var backButton = $('#back-button');
    backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.addCollegeMessage = '';

    var n = 0;
    $scope.name = "";
    $scope.secondName = "";
    $scope.password = "";
    $scope.confirmPassword = "";
    $scope.email = "";
    $scope.phoneNumber = "";
    $scope.age = "";
    $scope.gender = true;
    $scope.college = {};
    $scope.city = "";
    $scope.collegeSelected = '';
    $scope.collegeSuggestions = [];
    $scope.existingCollege = 1;
    $scope.schoolStudent = false;
    $scope.submitted = false;
    $scope.disableRegister = false;
    $scope.disableAddCollege = false;
    $scope.wantAccomodation = false;
    $scope.userRegisterMessage = '';
    $scope.addCollegeMessage = '';

    $http.get('http://shaastra.org:8001/api/colleges')
      .then(function (response) {
        $scope.college_list = response.data;
      });

    $scope.toggleNewCollegeDiv = function () {
      $scope.existingCollege = !$scope.existingCollege;
      var text = document.getElementById("toggleCollegeText");
      if($scope.existingCollege) {

      } else {
        text.innerHTML = "Click here";
      }
    };

    // $scope.addCollege = function () {
    //   $scope.disableAddCollege = true;
    //   if($scope.newCollegeName !== '') {
    //     $scope.addCollegeMessage = ' -- Working...';
    //     $http.post('http://shaastra.org:8001/api/colleges', { collegeName: $scope.newCollegeName })
    //       .then(function (response) {
    //         if(response.status === 201) {
    //           $scope.disableAddCollege = false;
    //           $scope.addCollegeMessage = '';
    //           $scope.college_list.push(response.data);
    //         } else {
    //           $scope.disableAddCollege = false;
    //           $scope.addCollegeMessage = 'Some error occurred';
    //         }
    //       });
    //   } else {
    //     $scope.disableAddCollege = false;
    //     alert('Please enter college name');
    //   }
    // };

    $scope.registerUser = function(){
      $scope.submitted = true;
      if($scope.form.$valid && ($scope.password === $scope.confirmPassword)) {
      $scope.userRegisterMessage = " -- Working...";
        $scope.disableRegister = true;
        Auth.createUser({
          name: $scope.name,
          secondName: $scope.secondName,
          password: $scope.password,
          email: $scope.email,
          phoneNumber: $scope.phoneNumber,
          age: $scope.age,
          city: $scope.city,
          gender: $scope.gender,
          wantAccomodation: $scope.wantAccomodation,
          college: $scope.collegeSelected,
          schoolStudent: $scope.schoolStudent
        })
        .then( function() {
          // Account created, redirect to dashboard
          $location.url('/dashboard');
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
      }
    };

});
