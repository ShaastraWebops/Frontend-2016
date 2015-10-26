'use strict';
angular.module('shaastra2016App')
  .controller('loginCtrl', function ($scope, Auth) {

    var backButton = $('#back-button');
    backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.UserName = "";
    $scope.Password = "";

    $scope.loginUser = function(){
        Auth.login({
            email: $scope.UserName,
            password: $scope.Password
        })
        .then( function() {
            // Logged in, redirect to home
            $location.path('/dashboard');
            $http.get('http://localhost.org:8001/api/users/me')
            .then(function (response) {
                console.log(response.data);
            });
        })
        .catch( function (err) {
            console.log(err);
            // $scope.errors.other = err.message;
        });
    }

});
