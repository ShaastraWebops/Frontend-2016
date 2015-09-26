'use-strict';

angular.module('shaastra2016App')
  .controller("HomeCtrl", function ($scope, Auth, $location, $http) {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'hidden'});

    $scope.name = "events";

    var top1 = angular.element(document.getElementsByClassName('.top-1'));
    var top2 = angular.element(document.getElementsByClassName('.top-2'));
    var mid1 = angular.element(document.getElementsByClassName('.mid-1'));
    var shaastrabox = angular.element(document.getElementsByClassName('.shaastrabox'));
    var mid2 = angular.element(document.getElementsByClassName('.mid-2'));
    var botm1 = angular.element(document.getElementsByClassName('.botm11'));
    var botm2 = angular.element(document.getElementsByClassName('.botm-2'));

    var elemboxright = angular.element(document.getElementsByClassName('.elemboxright'));
    var elemboxleft = angular.element(document.getElementsByClassName('.elemboxleft'));
    
    var container = angular.element(document.getElementsByClassName('.container'));

    var invisiblebox1 = angular.element(document.getElementsByClassName('.invisiblebox1'));
    var invisiblebox2 = angular.element(document.getElementsByClassName('.invisiblebox2'));

    var lefthand = angular.element(document.getElementById('#lefthand'));
    var righthand = angular.element(document.getElementById('#righthand'));

    var mainContainer = angular.element(document.getElementById('#main-container'));

    top1.click(function(){
      $scope.name = "events";
    });
    top2.click(function(){
      $scope.name = "shows";
    });
    mid1.click(function(){
      $scope.name = "workshops";
    });
    shaastrabox.click(function(){
      $scope.name = "contact-us";
    });
    mid2.click(function(){
      $scope.name = "lectures";
    });
    botm1.click(function(){
      $scope.name = "social";
    });
    botm2.click(function(){
      $scope.name = "pre-shaastra";
    });

    // $(".top-1").click(function(){
    //   $scope.name = "events";
    // });
    // $(".top-2").click(function(){
    //   $scope.name = "shows";
    // });
    // $(".mid-1").click(function(){
    //   $scope.name = "workshops";
    // });
    // $(".shaastrabox").click(function(){
    //   $scope.name = "contact-us";
    // });
    // $(".mid-2").click(function(){
    //   $scope.name = "lectures";
    // });
    // $(".botm-1").click(function(){
    //   $scope.name = "social";
    // });
    // $(".botm-2").click(function(){
    //   $scope.name = "pre-shaastra";
    // });
    
    $scope.mouseDown=$("#main-container").mousedown(function (e) {
      if(e.clientX<=$('.invisiblebox2').offset().left)
        $("#righthand").attr("src", "images/handr1.png");
      else 
        $("#lefthand").attr("src", "images/handl1.png");
    });
    
    $scope.mouseUp=$("#main-container").mouseup(function (e) {
      if(e.clientX<=$('.invisiblebox1').offset().left)
        $("#righthand").attr("src","images/handr.png");
      else 
        $("#lefthand").attr("src","images/handl.png");
    });

    /*$scope.mouseDownR=$(".elemboxright").mousedown(function(){
    ("#lefthand").attr("src","images/handl1.png")
     });
    $scope.mouseUpL=$(".elemboxleft").mouseup(function(){
    $("#righthand").attr("src","images/handr.png")
     });*/
/*    $scope.mouseUpR=$(".elemboxright").mouseup(function(){
    ("#lefthand").attr("src","images/handl.png")
     });*/

    $(".elemboxleft").click(function () {
      var elem = $(this);
      elem.css({
        top: $(".container").height() / 2 - elem.width() / 4 ,
        left: $(".container").width() / 2 - elem.width() / 2,
        zIndex: 500 
      });
      $("#righthand").animate({
        top: $(".container").height() / 2 ,
        left: $(".container").width() / 2 - elem.width() / 2
      }, function () {
          $("#righthand").animate({
            top: "-=" + elem.height()/2,
            left: "-=" + elem.width()/2
          });
          $("#lefthand").animate({
            top: $(".container").height()/2 + elem.height() / 2,
            left: $(".container").width()/2 + elem.width() / 2
          }, function () {
              elem.css ({
                "width" : "100%",
                "height" : "100%",
                "top": "0",
                "left" : "0",
                "line-height": elem.height()/12,
                "font-size" : "8vh"
              });
              $("#righthand").animate({
                top: 0,
                left: -157
              }, function () {
                  $('#righthand').css({
                    "position" : "static"
                  });
                });
                $("#lefthand").animate({
                  top: $(".container").height(),
                  left: $(".container").width()
                }, function () {
                    $('#lefthand').css({
                      "position" : "static"
                    });
                    $(location).attr('href','https://www.google.co.in/');
                    console.log($scope.name);
                  });
            });
        });
    });

    $(".elemboxright").click(function () {
      var elem = $(this);
      elem.css({
        top: $(".container").height() / 2 - elem.width() / 4 ,
        right: $(".container").width() / 2 - elem.width() / 2,
        zIndex: 500 
      });
      $("#lefthand").animate({
        top: $(".container").height() / 2 ,
        left: $(".container").width() / 2 - elem.width() / 2
      }, function () {
          $("#righthand").animate({
            top: $(".container").height() / 2 - elem.height() / 2,
            left: $(".container").width() / 2 - elem.width()
          });
          $("#lefthand").animate({
            top: $(".container").height()/2 + elem.height() / 2,
            left: $(".container").width() / 2 + elem.width() / 2
          }, function () {
              elem.css ({
                "width" : "100%",
                "height" : "100%",
                "top": "0",
                "right" : "0",
                "line-height": elem.height()/12,
                "font-size" : "8vh"
              });
              $("#righthand").animate({
                top: 0,
                left: -157
               }, function () {
                  $('#righthand').css({
                    "position" : "static"
                  });
                });
                $("#lefthand").animate({
                  top: $(".container").height(),
                  left: $(".container").width()
                }, function () {
                    $('#lefthand').css({
                      "position" : "static"
                    });
                    $(location).attr('href','https://www.google.com/');
                    console.log($scope.name);
                });
            });
        });
    });

    $(".shaastrabox").click(function () {
      var elem = $(this);
        $("#righthand").animate({
          top: $(".container").height() / 2 - elem.height() / 2,
          left: $(".container").width() / 2 - elem.width()
        });
        $("#lefthand").animate({
          top: $(".container").height()/2 + elem.height() / 2,
          left: $(".container").width() / 2 + elem.width() / 2
        }, function () {
            elem.css ({
              "width" : "100%",
              "height" : "100%",
              "top": "0",
              "left" : "0",
              "margin-left": "0"
            });
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
            }, function () {
                $('#righthand').css({
                  "position" : "static"
                });
              });
              $("#lefthand").animate({
                top: $(".container").height(),
                left: $(".container").width()
              }, function () {
                  $('#lefthand').css({
                    "position" : "static"
                  });
                  $(location).attr('href','https://www.google.com/');
                  console.log($scope.name);
                });
          });
    });

});
 
//tooltip Directive
angular.module('shaastra2016App')
  .directive('tooltip', function () {
    return {
      restrict: 'A',
      link: function () {
        var rightHand;
        var leftHand;
        var x;
        var y;
        
        rightHand = document.getElementById("righthand");
        leftHand = document.getElementById("lefthand");
                
        $(".invisiblebox2,.elemboxright").mousemove(function (e) {
          x = (e.clientX-$('.invisiblebox1').offset().left),
          y = (e.clientY-$('.invisiblebox1').offset().top);

          //position according to mouse position
          leftHand.style.top = (y + 0) + 'px';
          leftHand.style.left = (x  + 0) + 'px';
          leftHand.style.top.animationTimingFunction = "linear";
          leftHand.style.left.animationTimingFunction = "linear";
        }); 
        
        $(".invisiblebox1,.elemboxleft").mousemove(function (e) {

          x = (e.pageX-$('.invisiblebox1').offset().left),
          y = (e.pageY-$('.invisiblebox1').offset().top);

          //position according to mouse position
          rightHand.style.top = (y  + 0) + 'px';
          rightHand.style.left = (x - 155) +'px';
        });

        //moving back hand to it's original place
        $(".invisiblebox2,.elemboxright").mousemove(function () {
          rightHand.style.top = "25%";
          rightHand.style.left = "18%";
        });

        $(".invisiblebox1,.elemboxleft").mousemove(function () {
          leftHand.style.top = "47%";
          leftHand.style.left = "75%";
        });

        //red dot to appear
      }
    };
  });