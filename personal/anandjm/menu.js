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
            //$('.menu').show(0);
            $('.c').addClass("block");
            $('.mn-social').removeClass("out");
            $('.o').animate({left:"+=141px"},0);
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
            $('.menu').removeClass("mnopen");
            $('.c').removeClass("block");
            $('.o').removeClass("none");
            $('.o').addClass("inblock");
            $('.o').animate({left:"-=141px"},200);
          });
                               }
                               };
});
app.directive('scl',
  function() {
        return {
            restrict: 'C',
            link: function() {
          $('.scl').click(function(){
            $('.s').hide(0);
            $('.si').show(200);
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
            $('.si').hide(200);
            $('.s').show(200);
            /*$('.s').removeClass("none");
            $('.si').addClass("none");*/
          });
                               }
                               };
});

