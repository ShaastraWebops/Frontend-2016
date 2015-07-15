var app = angular.module("myApp", []);
// controller
app.controller("MainController",function() {
  
});
//directive
app.directive('down',
  function() {
        return {
            restrict: 'C',
            link: function() {
          $('.down a').click(function(){
            $(this).next('.list').toggleClass("clicked");
            if($(this).next('.list').hasClass("clicked"))
            {
              $(this).parent().css("padding-bottom","0");
            }
            else
            {
              $(this).parent().css("padding-bottom","0.5em");
            }
          });
                               }
                               };
});
