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
  .controller('registerCtrl', function ($scope, $http) {

    var backButton = $('#back-button');
    var n = 0;
    backButton.attr('link', '/');

    $scope.UserName = "";
    $scope.Password = "";
    $scope.email = "";
    $scope.college = {};
    $scope.college.name = "";
    $scope.college.id = "";
    $scope.collegeSuggestions = [];
    $scope.repassword = "";
    $scope.existingCollege = 1;


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

    $scope.toggleNewCollegeDiv = function () {
      $scope.existingCollege = !$scope.existingCollege;
      var text = document.getElementById("toggleCollegeText");
      if($scope.existingCollege) {

      } else {
        text.innerHTML = "Click here to add college if it is not shown";
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

    // Auth.createUser({
    //   name: '234',
    //   email: 'abc@abc.c',
    //   password: 'abcabc',
    //   city: 'hys',
    //   phoneNumber: '9090909090',
    //   age: '31',
    //   gender: 1
    // })
    // .then( function() {
    //   // Account created, redirect to dashboard
    //   $location.url('#/dashboard');
    // })
    // .catch( function(err) {
    //   err = err.data;
    //   $scope.errors = {};

    //   // Update validity of form fields that match the mongoose errors
    //   // angular.forEach(err.errors, function(error, field) {
    //   //   form[field].$setValidity('mongoose', false);
    //   //   $scope.errors[field] = error.message;
    //   // });
    // });

});
