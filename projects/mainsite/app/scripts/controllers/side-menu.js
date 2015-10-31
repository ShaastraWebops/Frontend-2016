'use strict';

angular.module('shaastra2016App')
  .controller("MainController", function ($scope, $location, Auth) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.backButton = function () {
      var loc = $('#back-button').attr('link');
      $location.path(loc);
    };

    $scope.gotoLink = function (link) {
      $location.url(link);
    };

});
  
//directive
angular.module('shaastra2016App')
  .directive('down', function() {
    return {
      restrict: 'C',
      link: function() {
        $('.down .d').click(function() {
          $(this).next('.list').toggleClass("clicked");
          if($(this).next('.list').hasClass("clicked")) {
            $(this).parent().css("padding-bottom","0em");
          }
        });
      }
    };
  });

angular.module('shaastra2016App')
  .directive('o', function() {
    return {
      restrict: 'C',
      link: function() {
        $('.o').click(function() {
          $('.o').addClass("none");
          $('.o').removeClass("inblock");
          $('.menu').addClass("mnopen");
          //$('.menu').show(0);
          $('.c').addClass("block");
          $('.mn-social').removeClass("out");
          $('.o').animate({left:"+=220px"},0);
          $('#backdrop').css("display", "block");
        });
      }
    };
  });

angular.module('shaastra2016App')
  .directive('c', function() {
    return {
      restrict: 'C',
      link: function() {
        $('.c').click(function() {
          $('.down .list').removeClass("clicked");
          $('.mn-social').addClass("out");
          $('.menu').removeClass("mnopen");
          $('.c').removeClass("block");
          $('.o').removeClass("none");
          $('.o').addClass("inblock");
          $('.o').animate({left:"-=220px"},200);
          $('#backdrop').css("display", "none");
        });
      }
    };
  });

angular.module('shaastra2016App')
  .directive('scl', function() {
    return {
      restrict: 'C',
      link: function() {
        $('.scl').click(function() {
          $('.s').hide(0);
          $('.si').show(200);
        });
    }
  };
});

angular.module('shaastra2016App')
  .directive('sic', function() {
    return {
      restrict: 'C',
      link: function() {
        $('.sic').click(function() {
          $('.si').hide(200);
          $('.s').show(200);
        });
      }
    };
  });

angular.module('shaastra2016App')
  .directive('account', function() {
    return {
      restrict: 'C',
      link: function() {
        $('.account').hover(function() {
          $('.ac').fadeOut(0);
          $('.ai').fadeIn(0);
        }, function() {
            $('.ai').fadeOut(0);
            $('.ac').fadeIn(0);
          }
        );
      }
    };
  });
