'use strict';

/*$(window).on('load', function(){
  console.log("Inside window.load");
});*/

function animateHexagons(){
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
  if(sessionStorage.homePageLoaded!=1){
   $("#top-hex").addClass("hex-initial-anim");
   $("#middle-hex").addClass("hex-initial-anim");
   $("#bottom-hex").addClass("hex-initial-anim");
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
   sessionStorage.homePageLoaded = 1;
  }
  else{
    $("#middle-hex").addClass("middle-hex-anim");
    $("#bottom-hex").addClass("bottom-hex-anim");
  }
  $(".polygon-each-img-wrap").css("visibility","visible");
  
}

angular.module('shaastra2016App')
  .controller("HomeCtrl", function ($scope, $timeout, ipCookie) {
    animateHexagons();
    var svgMargin = document.documentElement.clientWidth*0.36;
    $('.polygon-each-img-wrap').css({'margin-left': svgMargin});
    window.addEventListener("resize", resizeFunction);
    function resizeFunction () {
      var svgMargin = document.documentElement.clientWidth*0.36;
      $('.polygon-each-img-wrap').css({'margin-left': svgMargin});
    }

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
