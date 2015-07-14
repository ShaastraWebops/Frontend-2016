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
                  rightHand,
                  leftHand,
                      x,
                      y;
                 rightHand = document.getElementById("righthand");
                 leftHand = document.getElementById("lefthand");
                
                  $(".invisiblebox2,.elemboxright").mousemove(function(e) {
   
                      x = e.clientX,
                      y = e.clientY;
          
                      //position according to mouse position
                       leftHand.style.top = (y + 0) + 'px';
                      leftHand.style.left = (x  + 0) + 'px';

                  }); 
                   $(".invisiblebox1,.elemboxleft").mousemove(function(e) {

                      x = e.pageX,
                      y = e.pageY;
          
                      //position according to mouse position
                      rightHand.style.top = (y  +0) + 'px';
                      rightHand.style.left = (x - 200) + 'px'; 
                                      
                  });
                   $(".elemboxleft").click(function(){

                      imagepath = $("#righthand").attr("src");
                      if(imagepath == "hand1.png"){
                   $("#righthand").attr("src", "hand2.png");

                      }else{
                  $("#righthand").attr("src", "hand1.png");
                           }
                  });
                    $(".elemboxright").click(function(){

                      imagepath = $("#lefthand").attr("src");
                      if(imagepath == "hand3.png"){
                   $("#lefthand").attr("src", "hand4.png");

                      }else{
                  $("#lefthand").attr("src", "hand3.png");
                           }
                  });
                   
                     
                              }
              };
      });
                      