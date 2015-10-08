'use strict';

angular.module('shaastra2016App')
  .controller("HomeCtrl", function () {

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'hidden'});

    var backButton = $('#back-button');
    backButton.attr('link', '/');

    // var top1 = angular.element(document.getElementsByClassName('.top-1'));
    // var top2 = angular.element(document.getElementsByClassName('.top-2'));
    // var mid1 = angular.element(document.getElementsByClassName('.mid-1'));
    // var shaastrabox = angular.element(document.getElementsByClassName('.shaastrabox'));
    // var mid2 = angular.element(document.getElementsByClassName('.mid-2'));
    // var botm1 = angular.element(document.getElementsByClassName('.botm-1'));
    // var botm2 = angular.element(document.getElementsByClassName('.botm-2'));

    // $scope.mouseDown=$("#main-container").mousedown(function (e) {
    //   if($('.invisiblebox2').offset()) {
    //     if(e.clientX<=$('.invisiblebox2').offset().left) {
    //       $("#righthand").attr("src", "images/handr1.png");
    //     } else {
    //       $("#lefthand").attr("src", "images/handl1.png");
    //     }
    //   } 
    // });
    
    // $scope.mouseUp=$("#main-container").mouseup(function (e) {
    //   if($('.invisiblebox1').offset()) {
    //     if(e.clientX<=$('.invisiblebox1').offset().left) {
    //       $("#righthand").attr("src", "images/handr.png");
    //     } else {
    //       $("#lefthand").attr("src", "images/handl.png");
    //     } 
    //   }
    // });
    // $.easing.def = "easeOutBack";
    $(".elemboxleft").click(function () {
      var elem = $(this);
      var redirectTo = elem.attr('link');
      elem.css({
        top: $("#main-container").height()/2 - elem.width()/2,
        left: $("#main-container").width()/2 - elem.width()/2,
        zIndex: 500 
      });
      $("#righthand").animate({
        top: $("#main-container").height()/2 - elem.width()/2 - elem.width()/10,
        left: $("#main-container").width()/2 - elem.width() - elem.width()/5
      }, 600, 'swing', function () {
        $("#lefthand").animate({
          top: $("#main-container").height()/2 + elem.height()/2 - elem.width()/5,
          left: $("#main-container").width()/2 + elem.width()/2
        }, 600, 'swing', function () {
            elem.css({
              "width" : "100%",
              "height" : "100%",
              "top": "10px",
              "left" : "0",
              "line-height": elem.height()/12,
              "font-size" : "8vh"
            });
            $("#righthand").animate({
              top: 0,
              left: 0
            }, 'swing', function () {
                $('#righthand').css({
                  "position" : "fixed"
                });
              });
              $("#lefthand").animate({
                top: $("#main-container").height(),
                left: $("#main-container").width()
              }, 'swing', function () {
                  $('#lefthand').css({
                    "position" : "fixed"
                  });
                  $(location).attr('href', redirectTo);
                });
            });
        });
    });

    $(".elemboxright").click(function () {
      var elem = $(this);
      var redirectTo = elem.attr('link');
      elem.css({
        top: $("#main-container").height()/2 - elem.width()/2,
        right: $("#main-container").width()/2 - elem.width()/2,
        zIndex: 500 
      });
      $("#righthand").animate({
        top: $("#main-container").height()/2 - elem.width()/2 - elem.width()/10,
        left: $("#main-container").width()/2 - elem.width() - elem.width()/5
      }, 600, 'swing', function () {
        $("#lefthand").animate({
          top: $("#main-container").height()/2 + elem.height()/2 - elem.width()/5,
          left: $("#main-container").width()/2 + elem.width()/2
        }, 600, 'swing', function () {
            elem.css ({
              "width" : "100%",
              "height" : "100%",
              "top": "10px",
              "left" : "0",
              "line-height": elem.height()/12,
              "font-size" : "8vh"
            });
            $("#righthand").animate({
              top: 0,
              left: 0
            }, 'swing', function () {
                $('#righthand').css({
                  "position" : "fixed"
                });
              });
              $("#lefthand").animate({
                top: $("#main-container").height(),
                left: $("#main-container").width()
              }, 'swing', function () {
                  $('#lefthand').css({
                    "position" : "fixed"
                  });
                  $(location).attr('href', redirectTo);
                });
            });
        });
    });

    $(".shaastrabox").click(function () {
      var elem = $(this);
      var redirectTo = elem.attr('link');
      $(location).attr('href', redirectTo);
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
        var x = 0;
        var y = 0;
        
        rightHand = document.getElementById("righthand");
        leftHand = document.getElementById("lefthand");
                
        $(".invisiblebox2,.elemboxright").mousemove(function (e) {
          x = (e.clientX-$('.invisiblebox1').offset().left),
          y = (e.clientY-$('.invisiblebox1').offset().top);

          //position according to mouse position
          leftHand.style.top = (y + 0) + 'px';
          leftHand.style.left = (x  + 0) + 'px';
        }); 
        
        $(".invisiblebox1,.elemboxleft").mousemove(function (e) {

          x = (e.pageX-$('.invisiblebox1').offset().left),
          y = (e.pageY-$('.invisiblebox1').offset().top);

          //position according to mouse position
          rightHand.style.top = (y  + 0) + 'px';
          rightHand.style.left = (x - 155) +'px';
        });

        // //moving back hand to it's original place
        // $(".invisiblebox2,.elemboxright").mousemove(function () {
        //   rightHand.style.top = "25%";
        //   rightHand.style.left = "18%";
        // });

        // $(".invisiblebox1,.elemboxleft").mousemove(function () {
        //   leftHand.style.top = "47%";
        //   leftHand.style.left = "75%";
        //   // $('#lefthand').animate({
        //     // top: "47%",
        //     // left: "75%"
        //   // });
        // });
        
        // $(".invisiblebox2,.elemboxright").mouseenter(function (e) {
        //   $('#righthand').animate({
        //     top: 47,
        //     left: 75
        //   });
        // });

        // $(".invisiblebox1, .elemboxleft").mouseenter(function (e) {
        //   $('#lefthand').animate({
        //     top: 47,
        //     left: 300
        //   });          
        // });

      }
    };
  });