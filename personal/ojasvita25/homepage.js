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
                      leftHand.style.top.animationTimingFunction="linear";
                      leftHand.style.left.animationTimingFunction="linear";
                  }); 
                   $(".invisiblebox1,.elemboxleft").mousemove(function(e) {

                      x = e.pageX,
                      y = e.pageY;
          
                      //position according to mouse position
                      rightHand.style.top = (y  + 0) + 'px';
                      rightHand.style.left = (x - 155) +'px';
                                  
                  });
                   //moving back hand to it's original place
                   $(".invisiblebox2,.elemboxright").mousemove(function(){
                    rightHand.style.top="25%";
                    rightHand.style.left="18%";
                   });

                   $(".invisiblebox1,.elemboxleft").mousemove(function(){
                    leftHand.style.top="47%";
                    leftHand.style.left="75%";
                   });
                   //red dot to appear
                   $(".elemboxleft").click(function(){

                      imagepath = $("#righthand").attr("src");
                      if(imagepath == "handr.png"){
                   $("#righthand").attr("src", "handr1.png");

                      }else{
                  $("#righthand").attr("src", "handr.png");
                           }
                  });
                    $(".elemboxright").click(function(){

                      imagepath = $("#lefthand").attr("src");
                      if(imagepath == "handl.png"){
                   $("#lefthand").attr("src", "handl1.png");

                      }else{
                  $("#lefthand").attr("src", "handl.png");
                           }
                  });
                   
                     
                              }
              };
      });
                      