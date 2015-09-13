
angular.module('shaastra2016App')
  .controller('loginCtrl', function($scope) {
    $scope.UserName = "";
    $scope.Password = "";
});

angular.module('shaastra2016App')
  .controller('registrationCtrl', function($scope) {
    $scope.UserName = "";
    $scope.Password = "";
    $scope.email = "";
    $scope.repassword = "";
});
