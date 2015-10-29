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

    var n = 0;
    $scope.name = "asfs";
    $scope.secondName = "asfag";
    $scope.password = "1234567";
    $scope.confirmPassword = "1234567";
    $scope.email = "abc@def.com";
    $scope.phoneNumber = "1234567890";
    $scope.age = "15";
    $scope.gender = true;
    $scope.college = {};
    $scope.city = "Chennai";
    $scope.college.name = "Chennai";
    $scope.college.id = "";
    $scope.collegeSuggestions = [];
    $scope.existingCollege = 1;
    $scope.schoolStudent = false;
    $scope.submitted = false;


    $scope.collegesList = [{
      'id' : 1,
      'name' : 'Chennai'
    },
    {
      'id' : 2,
      'name' :'Mumbai'
    },
    {
      'id' : 3,
      'name' : 'Delhi'
    },
    {
      'id' : 4,
      'name' :'Kanpur'
    },
    {
      'id' : 5,
      'name' : 'Kharaghpur'
    }];

    $scope.college_list = ["IITM", "Delhi IIT", "Bombay IIT", "Hyd IIT"];

    $scope.toggleNewCollegeDiv = function () {
      $scope.existingCollege = !$scope.existingCollege;
      var text = document.getElementById("toggleCollegeText");
      if($scope.existingCollege) {

      } else {
        text.innerHTML = "Click here";
      }
    };

    $scope.selectSuggestedCollege = function (college) {
      $scope.college = {};
      $scope.college.name = college.name;
      $scope.college.id = college.id;
      $scope.suggestCollegeBool = false;
    };

    $scope.highlight = function(event){

      var keyCode = event.which || event.keyCode;
      var i = document.getElementById("col-sug").childNodes.length;
      var c = document.getElementById("col-sug").childNodes;
      if(keyCode===38 || keyCode===40 || keyCode===13){
        event.preventDefault();
    }
    else if(keyCode===39 || keyCode===37){
    }
    else{
      c[n].style.backgroundColor = "#ffffff";
      n=0;
    }
      if (keyCode === 38 && n!==0) {
        if(n===i || (n+1)===i){
          n=n-2;
          c[n].style.backgroundColor = "#E2E2E2";
      }
        else{
          n=n-2;
          c[n+2].style.backgroundColor = "#ffffff";
          c[n].style.backgroundColor = "#E2E2E2";
        }
      }
      else if(keyCode === 40 && (n+4)<=i){
        if(n===0){
          n=n+2;
          c[n].style.backgroundColor = "#E2E2E2";
      }
        else{
          n=n+2;
          c[n-2].style.backgroundColor = "#ffffff";
          c[n].style.backgroundColor = "#E2E2E2";
        }
      }

      else if(keyCode === 13 ){
        //document.getElementById("col-in").value = c[n].firstChild.nextSibling.innerHTML;
        $scope.college = {};
        $scope.college.name = c[n].firstChild.nextSibling.innerHTML;
        $scope.college.id = n/2;
        $scope.suggestCollegeBool = false;
        n=0;
      }
    };

    $scope.addCollege = function () {
      //Make http request to store the details
    };

    $scope.registerUser = function(){
      $scope.submitted = true;

      // if(form.$valid) {
        // console.log('asd');
        Auth.createUser({
          name: $scope.name,
          secondName: $scope.secondName,
          password: $scope.password,
          email: $scope.email,
          phoneNumber: $scope.phoneNumber,
          age: $scope.age,
          city: $scope.city,
          gender: $scope.gender,
          college: $scope.college.name,
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
      // }
    };

});
