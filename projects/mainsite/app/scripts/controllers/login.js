'use strict';
angular.module('shaastra2016App')
  .controller('loginCtrl', function ($scope, Auth, $http, $location, localStorageService) {

    $scope.pageClass = 'page-login';

    var backButton = $('#back-button');
    backButton.attr('link', '/');

    var html = angular.element(document.getElementById('body'));
    html.css({
      'overflow-y': 'auto',
      'background-color': '#f3f3f3'
    });

    $scope.rememberMe = false;
    if(localStorageService.isSupported) {
        if(localStorageService.get('localstorageLoginEmail') && localStorageService.get('localstorageLoginPassword')) {
            $scope.rememberMe = true;
            $scope.UserName = localStorageService.get('localstorageLoginEmail');
            $scope.Password = localStorageService.get('localstorageLoginPassword');
        } else {
            $scope.rememberMe = false;
            $scope.UserName = "";
            $scope.Password = "";
        }
    }

    $scope.toggleRememberMe = function () {
        $scope.rememberMe = !$scope.rememberMe;
    };

    $scope.loginUser = function () {
        if(localStorageService.isSupported) {
            console.log($scope.rememberMe);
            if($scope.rememberMe) {
                localStorageService.remove('localstorageLoginEmail');
                localStorageService.remove('localstorageLoginPassword');
                localStorageService.set('localstorageLoginEmail', $scope.UserName);
                localStorageService.set('localstorageLoginPassword', $scope.Password);
            } else {
                localStorageService.remove('localstorageLoginEmail');
                localStorageService.remove('localstorageLoginPassword');
            }
        }

        Auth.login({
            email: $scope.UserName,
            password: $scope.Password
        })
        .then( function() {
            // Logged in, redirect to home
            $location.path('/dashboard');
            // $http.get('http://localhost.org:8001/api/users/me')
            // .then(function (response) {
            //     console.log(response.data);
            // });
        })
        .catch( function (err) {
            alert('Please enter correct credentials');
            // console.log(err);
            $location.path('/login');
            // $scope.errors.other = err.message;
        });
    };

});
