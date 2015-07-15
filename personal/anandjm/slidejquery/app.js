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
           $(this).next('.list').slideToggle();
          });
                               }
                               };
});
