'use strict';

$(window).on('load', function(){
  function whichAnimationEvent(element){
    var t, el;
    if(element==1)
      el = document.getElementById("top-hex");
    else if(element==2)
      el = document.getElementById("middle-hex");
    else if(element==3)
      el = document.getElementById("bottom-hex");
    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }

  var animationEvent1 = whichAnimationEvent(1);
  var animationEvent2 = whichAnimationEvent(2);
  var animationEvent3 = whichAnimationEvent(3);

  $("#top-hex").addClass("hex-initial-anim");
  $("#middle-hex").addClass("hex-initial-anim");
  $("#bottom-hex").addClass("hex-initial-anim");
  $(".polygon-each-img-wrap").css("visibility","visible");
  
  $("#top-hex").one(animationEvent1, function(event){
    $("#top-hex").removeClass("hex-initial-anim");
  });
 
  $("#middle-hex").one(animationEvent2, function(event){
    $("#middle-hex").removeClass("hex-initial-anim");
    $("#middle-hex").addClass("middle-hex-anim");
  });
  
  $("#bottom-hex").one(animationEvent2, function(event){
    $("#bottom-hex").removeClass("hex-initial-anim");
    $("#bottom-hex").addClass("bottom-hex-anim");
  });

});

angular.module('shaastra2016App')
  .controller("HomeCtrl", function ($scope, $timeout, ipCookie) {

    // guide start
    $scope.currentStep = ipCookie('myTour') || 1;
    $scope.AfterChangeEvent = function() {
      $scope.currentStep = this._currentStep + 1;
      ipCookie('myTour', $scope.currentStep, { expires: 3000 });
    };

    $scope.CompletedEvent = function() {
      $scope.currentStep = this._currentStep + 2;
      ipCookie('myTour', $scope.currentStep, { expires: 3000 });
    };

    if($scope.currentStep < 3){
      $timeout( function(){$scope.CallMe($scope.currentStep);}, 1000);
    }

    $scope.IntroOptions = {
      steps:[
        {
          step : 1,
          element: document.querySelector('#hex-div'),
          intro: "Hello there! Welcome to Shaastra",
          position: 'down'
        },
        {
          step : 2,
          element: document.querySelector('#main-div'),
          intro: "Shaastra",
          position: 'top'
        }
      ],
      showStepNumbers: false,
      exitOnOverlayClick: true,
      exitOnEsc: true,
      nextLabel: '<strong>NEXT!</strong>',
      prevLabel: '<span style="color:green">Previous</span>',
      skipLabel: 'Stop Tour',
      doneLabel: 'Okay'
    };

    $scope.ShouldAutoStart = false;
    // guide end

    $scope.showTooltip = true;

    var html = angular.element(document.getElementById('body'));
    html.css({'overflow': 'scroll'});

    var backButton = $('#back-button');
    backButton.attr('link', '/');

    // $(".elemboxleft").click(function () {
    //   // remove hand following
    //   $scope.showTooltip = false;

    //   var elem = $(this);
    //   var redirectTo = elem.attr('link');

    //   // put red dot
    //   // $("#righthand").attr('src', 'images/handr-dot.png');
    //   // $("#lefthand").attr('src', 'images/handl-dot.png');
    //   elem.css({
    //     top: $("#main-container").height()/2 - elem.width()/2,
    //     left: $("#main-container").width()/2 - elem.width()/2,
    //     zIndex: 500 
    //   });
    //   $("#righthand").animate({
    //     top: $("#main-container").height()/2 - elem.width()/2 - elem.width()/10,
    //     left: $("#main-container").width()/2 - elem.width() - elem.width()/5
    //   }, 600, 'swing', function () {
    //     $("#lefthand").animate({
    //       top: $("#main-container").height()/2 + elem.height()/2 - elem.width()/5,
    //       left: $("#main-container").width()/2 + elem.width()/2
    //     }, 600, 'swing', function () {
    //         elem.css({
    //           "width" : "100%",
    //           "height" : "100%",
    //           "top": "10px",
    //           "left" : "0",
    //           "line-height": elem.height()/12,
    //           "font-size" : "8vh"
    //         });
    //         $("#righthand").animate({
    //           top: 0,
    //           left: 0
    //         }, 'swing', function () {
    //             $('#righthand').css({
    //               "position" : "fixed"
    //             });
    //           });
    //           $("#lefthand").animate({
    //             top: $("#main-container").height(),
    //             left: $("#main-container").width()
    //           }, 'swing', function () {
    //               $('#lefthand').css({
    //                 "position" : "fixed"
    //               });
    //               $(location).attr('href', redirectTo);
    //             });
    //         });
    //     });
    // });

    // $(".elemboxright").click(function () {
    //   // remove hand following
    //   $scope.showTooltip = false;
    //   var elem = $(this);
    //   var redirectTo = elem.attr('link');

    //   // put red dot
    //   // $("#righthand").attr('src', 'images/handr-dot.png');
    //   // $("#lefthand").attr('src', 'images/handl-dot.png');
    //   elem.css({
    //     top: $("#main-container").height()/2 - elem.width()/2,
    //     right: $("#main-container").width()/2 - elem.width()/2,
    //     zIndex: 500 
    //   });
    //   $("#righthand").animate({
    //     top: $("#main-container").height()/2 - elem.width()/2 - elem.width()/10,
    //     left: $("#main-container").width()/2 - elem.width() - elem.width()/5
    //   }, 600, 'swing', function () {
    //     $("#lefthand").animate({
    //       top: $("#main-container").height()/2 + elem.height()/2 - elem.width()/5,
    //       left: $("#main-container").width()/2 + elem.width()/2
    //     }, 600, 'swing', function () {
    //         elem.css ({
    //           "width" : "100%",
    //           "height" : "100%",
    //           "top": "10px",
    //           "left" : "0",
    //           "line-height": elem.height()/12,
    //           "font-size" : "8vh"
    //         });
    //         $("#righthand").animate({
    //           top: 0,
    //           left: 0
    //         }, 'swing', function () {
    //             $('#righthand').css({
    //               "position" : "fixed"
    //             });
    //           });
    //           $("#lefthand").animate({
    //             top: $("#main-container").height(),
    //             left: $("#main-container").width()
    //           }, 'swing', function () {
    //               $('#lefthand').css({
    //                 "position" : "fixed"
    //               });
    //               $(location).attr('href', redirectTo);
    //             });
    //         });
    //     });
    // });

    // $(".shaastrabox").click(function () {
    //   var elem = $(this);
    //   var redirectTo = elem.attr('link');
    //   $(location).attr('href', redirectTo);
    // });

});

//rotating hexagons directive
angular.module('shaastra2016App')
  .directive('rotateHex', function($animate){
    return function(scope, element){
    $animate.animate(element,'fx-rotate-clock')
      .then(function(){
        console.log("Rotated");
      })
    };
  });
 
// //tooltip Directive
// angular.module('shaastra2016App')
//   .directive('tooltip', function () {
//     return {
//       restrict: 'A',
//       link: function () {
//         var rightHand;
//         var leftHand;
//         var x = 0;
//         var y = 0;
        
//         rightHand = document.getElementById("righthand");
//         leftHand = document.getElementById("lefthand");

//         $(".invisiblebox2, .elemboxright").mousemove(function (e) {
//           if($(".invisiblebox2").length === 1 && $(".invisiblebox1").length === 1) {
//             x = (e.clientX-$('.invisiblebox1').offset().left),
//             y = (e.clientY-$('.invisiblebox1').offset().top);
//           }                

//           //position according to mouse position
//           leftHand.style.top = (y + 0) + 'px';
//           leftHand.style.left = (x  + 0) + 'px';
//         }); 
      
//         $(".invisiblebox1, .elemboxleft").mousemove(function (e) {
//           if($(".invisiblebox2").length === 1 && $(".invisiblebox1").length === 1) {
//             x = (e.pageX-$('.invisiblebox1').offset().left),
//             y = (e.pageY-$('.invisiblebox1').offset().top);
//           }                

//           //position according to mouse position
//           rightHand.style.top = (y  + 0) + 'px';
//           rightHand.style.left = (x - 155) +'px';
//         });

//         // //moving back hand to it's original place
//         // $(".invisiblebox2,.elemboxright").mousemove(function () {
//         //   rightHand.style.top = "25%";
//         //   rightHand.style.left = "18%";
//         // });

//         // $(".invisiblebox1,.elemboxleft").mousemove(function () {
//         //   leftHand.style.top = "47%";
//         //   leftHand.style.left = "75%";
//         //   // $('#lefthand').animate({
//         //     // top: "47%",
//         //     // left: "75%"
//         //   // });
//         // });
        
//         // $(".invisiblebox2,.elemboxright").mouseenter(function (e) {
//         //   $('#righthand').animate({
//         //     top: 47,
//         //     left: 75
//         //   });
//         // });

//         // $(".invisiblebox1, .elemboxleft").mouseenter(function (e) {
//         //   $('#lefthand').animate({
//         //     top: 47,
//         //     left: 300
//         //   });          
//         // });

//       }
//     };
//   });