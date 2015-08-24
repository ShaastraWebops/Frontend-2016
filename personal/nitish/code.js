
var app = angular.module('loginApp', []);
app.controller('loginCtrl', function($scope) {
    $scope.UserName = "";
    $scope.Password = "";
});

var app = angular.module('RegistrationApp', []);
app.controller('registrationCtrl', function($scope) {
    $scope.UserName = "";
    $scope.Password = "";
    $scope.email = "";
    $scope.repassword = "";
});
