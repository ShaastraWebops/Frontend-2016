'use strict';

angular.module('shaastra2016App')
   .directive('autoCompleteone', function () {
    return function (scope) {
      scope.$watch('college.name', function() {
        var suggestions = [];
        var matchTerm = new RegExp(scope.college.name.toUpperCase(), 'g');
        for(var i=0; i<scope.collegesList.length; i++) {
          var match = scope.collegesList[i].name.toUpperCase().match(matchTerm);
          if(match && match.length>0){
            suggestions.push(scope.collegesList[i]);
          }
        }
        scope.collegeSuggestions = suggestions;
        if(suggestions && suggestions.length>0 && scope.college.name!=='') {
          if(suggestions[0].name.toUpperCase()===scope.college.name.toUpperCase()) {
            scope.suggestCollegeBool = false;
          } else {
            scope.suggestCollegeBool = true;
          }
        } else {
          scope.suggestCollegeBool = false;
        }
        console.log(scope.collegesList);
      });
    };
  })
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
    // $scope.college.name = "Chennai";
    // $scope.college.id = "";
    $scope.collegeSuggestions = [];
    $scope.existingCollege = 1;
    $scope.schoolStudent = false;
    $scope.submitted = false;
    $scope.disableRegister = false;
    $scope.wantAccomodation = false;

    // $http.get('http://shaastra.org:8001/api/colleges')
    $http.get('http://localhost:8001/api/colleges')
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

    // $scope.selectSuggestedCollege = function (college) {
    //   $scope.college = {};
    //   $scope.college.name = college.name;
    //   $scope.college.id = college.id;
    //   $scope.suggestCollegeBool = false;
    // };

    // $scope.highlight = function(event){

    //   var keyCode = event.which || event.keyCode;
    //   var i = document.getElementById("col-sug").childNodes.length;
    //   var c = document.getElementById("col-sug").childNodes;
    //   if(keyCode===38 || keyCode===40 || keyCode===13){
    //     event.preventDefault();
    // }
    // else if(keyCode===39 || keyCode===37){
    // }
    // else{
    //   c[n].style.backgroundColor = "#ffffff";
    //   n=0;
    // }
    //   if (keyCode === 38 && n!==0) {
    //     if(n===i || (n+1)===i){
    //       n=n-2;
    //       c[n].style.backgroundColor = "#E2E2E2";
    //   }
    //     else{
    //       n=n-2;
    //       c[n+2].style.backgroundColor = "#ffffff";
    //       c[n].style.backgroundColor = "#E2E2E2";
    //     }
    //   }
    //   else if(keyCode === 40 && (n+4)<=i){
    //     if(n===0){
    //       n=n+2;
    //       c[n].style.backgroundColor = "#E2E2E2";
    //   }
    //     else{
    //       n=n+2;
    //       c[n-2].style.backgroundColor = "#ffffff";
    //       c[n].style.backgroundColor = "#E2E2E2";
    //     }
    //   }

    //   else if(keyCode === 13 ){
    //     //document.getElementById("col-in").value = c[n].firstChild.nextSibling.innerHTML;
    //     $scope.college = {};
    //     $scope.college.name = c[n].firstChild.nextSibling.innerHTML;
    //     $scope.college.id = n/2;
    //     $scope.suggestCollegeBool = false;
    //     n=0;
    //   }
    // };

    $scope.addCollege = function () {
      if($scope.newCollegeName !== '') {
        $scope.addCollegeMessage = ' -- Working...';
        $http.post('http://localhost:8001/api/colleges', { collegeName: $scope.newCollegeName })
          .then(function (response) {
            if(response.status === 201) {
              $scope.addCollegeMessage = '';
              $scope.college_list.push(response.data);
            } else {
              $scope.addCollegeMessage = 'Some error occurred';
            }
          });
      } else {
        alert('Please enter college name');
      }
    };

    $scope.registerUser = function(){
      $scope.submitted = true;
      $scope.userRegisterMessage = " -- Working...";
      if($scope.form.$valid && ($scope.password === $scope.confirmPassword)) {
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
