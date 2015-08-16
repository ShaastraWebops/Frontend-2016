  // MyApp module
  var app = angular.module("MyApp", []);

  // controller
  app.controller("AppCtrl", function() {
    $(".elemboxleft").click(function(){
      var elem = $(this);
      elem.animate({
        top: $("#bgstyle").height() / 2 - elem.width() / 4 ,
        left: $("#bgstyle").width() / 2 - elem.width() / 2,
        zIndex: 500 
      });
      $("#righthand").animate({
        top: $("#bgstyle").height() / 2 ,
        left: $("#bgstyle").width() / 2 - elem.width() / 2
      }, function(){
            $(".shaastrabox").css({"display":"none"});
            $("#righthand").animate({
              top: "-=" + elem.height()/2,
              left: "-=" + elem.width()/2
            });
            $("#lefthand").animate({
              top: $("#bgstyle").height()/2 + elem.height() / 2,
              left: $("#bgstyle").width() / 2 + elem.width() / 2
            }, function(){
                  elem.css({"transform":"scale(2)",
                    "-webkit-transform":"scale(2)",
                    "-moz-transform":"scale(2)",
                    "-o-transform":"scale(2)"});
                  $("#righthand").animate({
                    top: "-=" + elem.height()/2,
                    left: "-=" + elem.width()/2
                   });
                  $("#lefthand").animate({
                    top: "+=" + elem.height() / 2,
                    left: "+=" + elem.width() / 2
                  });
            });
      });
    });
$(".elemboxright").click(function(){
      var elem = $(this);
      elem.animate({
        top: $("#bgstyle").height() / 2 - elem.width() / 4 ,
        right: $("#bgstyle").width() / 2 - elem.width() / 2,
        zIndex: 500 
      });
      $("#lefthand").animate({
        top: $("#bgstyle").height() / 2 ,
        left: $("#bgstyle").width() / 2 - elem.width() / 2
      }, function(){
            $(".shaastrabox").css({"display":"none"});
            $("#righthand").animate({
              top: $("#bgstyle").height() / 2 - elem.height() / 2,
              left: $("#bgstyle").width() / 2 - elem.width()
            });
            $("#lefthand").animate({
              top: $("#bgstyle").height()/2 + elem.height() / 2,
              left: $("#bgstyle").width() / 2 + elem.width() / 2
            }, function(){
                  elem.css({"transform":"scale(2)",
                    "-webkit-transform":"scale(2)",
                    "-moz-transform":"scale(2)",
                    "-o-transform":"scale(2)"});
                  $("#righthand").animate({
                    top: "-=" + elem.height()/2,
                    left: "-=" + elem.width()/2
                   });
                  $("#lefthand").animate({
                    top: "+=" + elem.height() / 2,
                    left: "+=" + elem.width() / 2
                  });
            });
      });
    });

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
                      
