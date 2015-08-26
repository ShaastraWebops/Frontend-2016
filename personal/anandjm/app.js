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
            //$('.menu').fadeIn(100);
            $('.c').addClass("block");
            $('.mn-social').removeClass("out");
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
            $('.mn-social').addClass("out");
            //$('.menu').fadeOut(100);
            $('.menu').removeClass("mnopen");
            $('.c').removeClass("block");
            $('.o').removeClass("none");
            $('.o').addClass("inblock");
          });
                               }
                               };
});
app.directive('s',
  function() {
        return {
            restrict: 'C',
            link: function() {
          $('.s').click(function(){
            $('.s').fadeOut(0);
            $('.si').fadeIn(200);
          });
                               }
                               };
});
app.directive('sic',
  function() {
        return {
            restrict: 'C',
            link: function() {
          $('.sic').click(function(){
            $('.s').fadeIn(200);
            $('.si').fadeOut(0);
          });
                               }
                               };
});
app.directive('account',
  function() {
        return {
            restrict: 'C',
            link: function() {
          $('.account').hover(
            function(){
            $('.ac').fadeOut(0);
            $('.ai').fadeIn(0);
            },
            function(){
              $('.ai').fadeOut(0);
            $('.ac').fadeIn(0);
            }
          );
                               }
                               };
});
