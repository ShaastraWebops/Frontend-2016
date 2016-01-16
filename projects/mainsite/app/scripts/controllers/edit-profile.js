'use strict';

angular.module('shaastra2016App')
  .controller('editProfileCtrl', function ($scope, $http, Auth) {

    $scope.pageClass = 'page-editProfile';

    var html = angular.element(document.getElementById('body'));
    html.css({
    	'overflow-y': 'auto',
    	'background-color': '#f3f3f3'
  	});

		var backButton = $('#back-button');
		backButton.attr('link', '/dashboard');

    $scope.message = '';

    Auth.isLoggedInAsync(function (loggedIn) {
      $scope.user = Auth.getCurrentUser();
    });

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

    $scope.updateProfile = function(form) {
      $scope.submitted = true;
      $scope.message = 'Working...';

      if(form.$valid) {
        Auth.updateProfile({
          name: $scope.user.name,
          secondName: $scope.user.secondName,
          email: $scope.user.email,
          phoneNumber: $scope.user.phoneNumber,
          city: $scope.user.city,
          state: $scope.user.state,
          stream: $scope.user.stream,
          degree: $scope.user.degree,
          wantAccomodation: $scope.user.wantAccomodation
        })
        .then( function (response) {
          if(response.$resolved && response.$promise.$$state.status) {
            $scope.message = 'Success';
            $scope.submitted = false;
          } else {
            $scope.message = 'Some error occurred! Please try again.';
            $scope.submitted = false;            
          }
        })
        .catch( function (err) {
          $scope.submitted = false;            

          err = err.data;
          $scope.errors = {};

          console.log(err);
          // Update validity of form fields that match the mongoose errors
          // angular.forEach(err.errors, function (error, field) {
          //   form[field].$setValidity('mongoose', false);
          //   $scope.errors[field] = error.message;
          // });
        });
      }
    };

  });
