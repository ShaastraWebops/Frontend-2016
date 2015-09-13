  // MyApp module
/*  var app = angular.module("shaastra2016App", []);*/

  // controller
  angular.module('shaastra2016App')
  .controller("HomeCtrl", ["$scope", "$location", function($scope, $location) {
  	$scope.name = "events";

  	$(".top-1").click(function(){
  		$scope.name = "events";
  	});
  	$(".top-2").click(function(){
  		$scope.name = "shows";
  	});
  	$(".mid-1").click(function(){
  		$scope.name = "workshops";
  	});
  	$(".shaastrabox").click(function(){
  		$scope.name = "contact-us";
  	});
  	$(".mid-2").click(function(){
  		$scope.name = "lectures";
  	});
  	$(".botm-1").click(function(){
  		$scope.name = "social";
  	});
  	$(".botm-2").click(function(){
  		$scope.name = "pre-shaastra";
  	});

    $(".elemboxleft").click(function() {
      var elem = $(this);
      elem.css({
        top: $(".container").height() / 2 - elem.width() / 4 ,
        left: $(".container").width() / 2 - elem.width() / 2,
        zIndex: 500 
      });
      $("#righthand").animate({
        top: $(".container").height() / 2 ,
        left: $(".container").width() / 2 - elem.width() / 2
      }, function(){
            $("#righthand").animate({
              top: "-=" + elem.height()/2,
              left: "-=" + elem.width()/2
            });
            $("#lefthand").animate({
              top: $(".container").height()/2 + elem.height() / 2,
              left: $(".container").width()/2 + elem.width() / 2
            }, function(){
            		elem.css ({
            			"width" : "100%",
            			"height" : "100%",
            			"top": "0",
            			"left" : "0",
            			"line-height": elem.height()/12,
            			"font-size" : "8vh"});
                  $("#righthand").animate({
                    top: 0,
                    left: -157
                   }, function(){
                   		$('#righthand').css({
                   			"position" : "static"
                   		});
                   });
                  $("#lefthand").animate({
                    top: $(".container").height(),
                    left: $(".container").width()
                  }, function(){
                  	$('#lefthand').css({
                   			"position" : "static"
                   		});
                  	$(location).attr('href','https://www.google.co.in/');
                  	console.log($scope.name);
                  });
            });
      });
    });
$(".elemboxright").click(function(){
      var elem = $(this);
      elem.css({
        top: $(".container").height() / 2 - elem.width() / 4 ,
        right: $(".container").width() / 2 - elem.width() / 2,
        zIndex: 500 
      });
      $("#lefthand").animate({
        top: $(".container").height() / 2 ,
        left: $(".container").width() / 2 - elem.width() / 2
      }, function(){
            $("#righthand").animate({
              top: $(".container").height() / 2 - elem.height() / 2,
              left: $(".container").width() / 2 - elem.width()
            });
            $("#lefthand").animate({
              top: $(".container").height()/2 + elem.height() / 2,
              left: $(".container").width() / 2 + elem.width() / 2
            }, function(){
                  elem.css ({
            			"width" : "100%",
            			"height" : "100%",
            			"top": "0",
            			"right" : "0",
            			"line-height": elem.height()/12,
            			"font-size" : "8vh"});
                  $("#righthand").animate({
                    top: 0,
                    left: -157
                   }, function(){
                   		$('#righthand').css({
                   			"position" : "static"
                   		});
                   });
                  $("#lefthand").animate({
                  	top: $(".container").height(),
                    left: $(".container").width()
                  }, function(){
                  		$('#lefthand').css({
                   			"position" : "static"
                   		});
                  		$(location).attr('href','https://www.google.com/');
                  		console.log($scope.name);
                  });
            });
      });
    });

$(".shaastrabox").click(function(){
      var elem = $(this);
        $("#righthand").animate({
          top: $(".container").height() / 2 - elem.height() / 2,
          left: $(".container").width() / 2 - elem.width()
        });
        $("#lefthand").animate({
          top: $(".container").height()/2 + elem.height() / 2,
          left: $(".container").width() / 2 + elem.width() / 2
        }, function(){
              elem.css ({
    			"width" : "100%",
    			"height" : "100%",
    			"top": "0",
    			"left" : "0",
    			"margin-left": "0"});
              $(".text1").css({
              	"top" : "-5vh",
              	"left" : "51%",
              	"transform" : "translate(-50%)",
              	"font-size" : "4vh" 
              });
              $(".text2").css({
              	"top" : "65%",
              	"left" : "35%",
              	"font-size" : "5vh"
              });
              $(".number").css({
              	"top" : "52.9%",
              	"left" : "57%",
              	"font-size" : "5vh"
              });
              $(".underline").css({
              	"top" : "71%",
              	"left" : "50%",
              	"width" : "50vh",
              	"transform" : "translate(-50%)"
              });
              $(".text3").css({
              	"top" : "63%",
              	"left" : "50%",
              	"font-size" : "2vh",
              	"transform" : "translate(-50%)"
              });
              $("#righthand").animate({
                top: 0,
                left: -157
               }, function(){
               		$('#righthand').css({
                   			"position" : "static"
                   		});
               });
              $("#lefthand").animate({
              	top: $(".container").height(),
                left: $(".container").width()
              }, function(){
              		$('#lefthand').css({
                   			"position" : "static"
                   		});
                  	$(location).attr('href','https://www.google.com/');
                  	console.log($scope.name);
              });
        });
  });
}]);
 


  //tooltip Directive
  angular.module('shaastra2016App')
  .directive('tooltip',  
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
                      if(imagepath == "images/handr.png"){
                   $("#righthand").attr("src", "images/handr1.png");

                      }else{
                  $("#righthand").attr("src", "images/handr.png");
                           }
                  });
                    $(".elemboxright").click(function(){

                      imagepath = $("#lefthand").attr("src");
                      if(imagepath == "images/handl.png"){
                   $("#lefthand").attr("src", "images/handl1.png");

                      }else{
                  $("#lefthand").attr("src", "images/handl.png");
                           }
                  });
                   
                     
                              }
              };
      });
                      
