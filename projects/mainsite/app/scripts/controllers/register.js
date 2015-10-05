'use strict';

angular.module('shaastra2016App')
   .directive('autoComplete', function(){
    return function(scope){
        scope.$watch('college.name', function(){
        var suggestions = [];
        var matchTerm = new RegExp(scope.college.name.toUpperCase(), 'g');
        for(var i=0; i<scope.collegesList.length; i++){
            var match = scope.collegesList[i].name.toUpperCase().match(matchTerm);
            if(match && match.length>0){
                suggestions.push(scope.collegesList[i]);
            }
        };
        scope.collegeSuggestions = suggestions;
        if(suggestions && suggestions.length>0 && scope.college.name!=''){
            if(suggestions[0].name.toUpperCase()==scope.college.name.toUpperCase()){
                scope.suggestCollegeBool = false;
            }
            else
                scope.suggestCollegeBool = true;
        }
        else{
            scope.suggestCollegeBool = false;
        }
        console.log(scope.collegesList);
    });
    };
   })
   .controller('registerCtrl', function ($scope) {

    var backButton = $('#back-button');
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
    
    $scope.collegesList = [
    {
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
    }
    ];

    $scope.toggleNewCollegeDiv = function(){
        $scope.existingCollege = !$scope.existingCollege;
        var text = document.getElementById("toggleCollegeText");
        if($scope.existingCollege){
        }
        else{
            text.innerHTML = "Click here to add college if it is not shown";
        }
    }

    $scope.selectSuggestedCollege = function(college){
        $scope.college = {};
        $scope.college.name = college.name;
        $scope.college.id = college.id;
        $scope.suggestCollegeBool = false;
    }

    $scope.addCollege = function(){
        //Make http request to store the details
    }

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
