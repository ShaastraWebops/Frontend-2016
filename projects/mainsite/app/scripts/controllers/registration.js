'use-strict';
angular.module('shaastra2016App')
  .controller('registrationCtrl', function ($scope, Auth) {
    $scope.UserName = "";
    $scope.Password = "";
    $scope.email = "";
    $scope.repassword = "";
});
