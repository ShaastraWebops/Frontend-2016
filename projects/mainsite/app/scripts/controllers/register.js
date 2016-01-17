'use strict';

angular.module('shaastra2016App')
  .controller('registerCtrl', function ($scope, $http, Auth, $location, localStorageService) {

    $scope.pageClass = 'page-registration';

    var backButton = $('#back-button');
    backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.addCollegeMessage = '';

    $scope.streams = [
      'Aeronautical / Aerospace Engineering', 
      'Chemical / Petroleum Engineering',
      'Civil Engineering',
      'Commerce',
      'Computer Science Engineering',
      'Electrical Engineering / Electronics & Telecommunication',
      'Humanities',
      'Information Technology / Information Science',
      'Mechanical Engineering',
      'Metallurgical Engineering',
      'Pure Sciences',
      'Others'
    ];
    $scope.states = [
      'Andhra Pradesh',
      'Delhi',
      'Goa',
      'Karnataka',
      'Kerala',
      'Madhya Pradesh',
      'Maharashtra',
      'Pondicherry',
      'Tamil Nadu',
      'Telangana',
      'Other State',
      'International'
    ];
    $scope.degrees = [
      'Bachelors',
      'Masters',
      'PhD',
      'None'
    ];

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
    $scope.state = '';
    $scope.degree = '';
    $scope.stream = '';
    $scope.collegeSuggestions = [];
    $scope.existingCollege = 1;
    $scope.schoolStudent = false;
    $scope.submitted = false;
    $scope.disableRegister = false;
    $scope.disableAddCollege = false;
    $scope.wantAccomodation = false;
    $scope.userRegisterMessage = '';
    $scope.addCollegeMessage = '';

    // using local storage to store college list
    if(localStorageService.isSupported) {
      if(localStorageService.get('localStorageCollegeList')) {
        $scope.college_list = localStorageService.get('localStorageCollegeList');
      } else {
        $http.get('http://shaastra.org:8001/api/colleges')
          .then(function (response) {
            $scope.college_list = response.data;
            localStorageService.set('localStorageCollegeList', response.data);
          });
      }
    } else {
      $http.get('http://shaastra.org:8001/api/colleges')
        .then(function (response) {
          $scope.college_list = response.data;
        });
    }


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
          state: $scope.state,
          stream: $scope.stream,
          degree: $scope.degree,
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
