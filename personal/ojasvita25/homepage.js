// MyApp module
var app = angular.module("MyApp", []);

// controller
app.controller("AppCtrl", function() {

});
//tooltip Directive
app.directive('tooltip',  
    function() {
        return {
            restrict: 'A',
            link: function() {
                var  
                tooltipSpanr,
                tooltipSpan,
               
                    x,
                    y;
               // element which will contain tooltip
               tooltipSpanr = document.getElementById("tooltipspanr");
                tooltipSpan = document.getElementById("tooltipspan");
                
                $("#elemboxright,#tooltip").mousemove(function(e) {
 
                    x = e.clientX,
                    y = e.clientY;
        
                    //position according to mouse position
                     tooltipSpanr.style.top = (y + 0) + 'px';
                    tooltipSpanr.style.left = (x  + 0) + 'px';
                });
                   
                 $("#elemboxleft,#tooltip").mousemove(function(e) {
 
                    x = e.clientX,
                    y = e.clientY;
        
                    //position according to mouse position
                     tooltipSpan.style.top = (y + 0) + 'px';
                    tooltipSpan.style.left = (x - 200) + 'px';
                   
                   
                });
                 
                   
            }
            };
    });
                    