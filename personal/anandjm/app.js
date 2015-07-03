var app = angular.module("myApp", []);
// controller
app.controller("MainController", function() {

});
//directive
app.directive('d',
   function() {
        return {
            restrict: 'A',
            link: function() {
              $('.down').click(function(){
        
        if($(this).hasClass("sel"))
        {
            $('.sel>.list').removeClass("clicked");
            $('.sel').removeClass("sel");
        }
        else
        {
            $('.down').removeClass("sel");
            $('.list').removeClass("clicked");
            $(this).addClass("sel");
            $('.sel>.list').addClass("clicked");
        }
              
                               });
                               }
                               };
});
                               