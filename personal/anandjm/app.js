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
          $('.down .d').click(function(){
            $(this).next('.list').toggleClass("clicked");
            if($(this).next('.list').hasClass("clicked"))
            {
              $(this).parent().css("padding-bottom","0em");
            }
            
          });
                               }
                               };
});
app.directive('o',
  function() {
        return {
            restrict: 'C',
            link: function() {
          $('.o').click(function(){
            $('.o').addClass("none");
            $('.o').removeClass("inblock");
            $('.menu').addClass("mnopen");
            $('.c').addClass("block");
          });
                               }
                               };
});

app.directive('c',
  function() {
        return {
            restrict: 'C',
            link: function() {
          $('.c').click(function(){
            $('.down .list').removeClass("clicked");
            $('.menu').removeClass("mnopen");
            $('.c').removeClass("block");
            $('.o').removeClass("none");
            $('.o').addClass("inblock");
          });
                               }
                               };
});