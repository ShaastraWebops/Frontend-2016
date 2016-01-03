'use strict';

/*$(window).on('load', function(){
  console.log("Inside window.load");
});*/

function animateHexagons(){
  function whichAnimationEvent(element){
    var t, el;
    if(element===1) {
      el = document.getElementById("top-hex");
    }
    else if(element===2) {
      el = document.getElementById("middle-hex");
    }
    else if(element===3) {
      el = document.getElementById("bottom-hex");
    }
    
    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    };

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }

  var animationEvent1 = whichAnimationEvent(1);
  var animationEvent2 = whichAnimationEvent(2);
  var animationEvent3 = whichAnimationEvent(3);
  
  if(sessionStorage.homePageLoaded!==1){
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

function startCountdown () {
  var currentTime = new Date();
  var shaastraStartDate = new Date("2016", "00", "23");
  var diffS = (shaastraStartDate-currentTime)/1000;
  var clock = $('#home-countdown-div').FlipClock(diffS, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: false
  });
}

angular.module('shaastra2016App')
  .controller("HomeCtrl", function ($scope, $timeout, ipCookie, $location, $anchorScroll, toastr, $interval) {

    $scope.pageClass = 'page-home';

    animateHexagons();
    startCountdown();

    // default notif
    toastr.info("", "Shaastra-2016 is from 23rd January to 26th January 2016");
    var homepageNotifs = [
      {
        title: "Click <a target='_blank' href='/#/shows-and-exhibitions'>here</a> to register for Exhibitions",
        desc: "",
        type: "error"
      },
      {
        title: "Checkout <a target='_blank' href='/#/shaastra-fellowship'>Shaastra Fellowship</a>",
        desc: "",
        type: 'warning'
      },
      {
        title: "Registrations have been opened!!!",
        desc: "<a target='_blank' href='/#/register'>Click here to register</a>",
        type: "success"
      },
      {
        title: "Shaastra-2016 is from 23rd January to 26th January 2016",
        desc: "",
        type: "info"
      }
    ];

    var notifCounter = 0;
    var numNotifs = homepageNotifs.length;

    function changeNotif() {
      toastr[homepageNotifs[notifCounter].type](homepageNotifs[notifCounter].desc, homepageNotifs[notifCounter].title);
      notifCounter += 1;
      if(notifCounter === numNotifs) {
        notifCounter = 0;
      }
    }
    $interval(changeNotif, 5000);

    // var svgMargin = document.documentElement.clientWidth*0.36;
    // $('.polygon-each-img-wrap').css({'margin-left': svgMargin});
    // window.addEventListener("resize", resizeFunction);
    // function resizeFunction () {
    //   var svgMargin = document.documentElement.clientWidth*0.36;
    //   $('.polygon-each-img-wrap').css({'margin-left': svgMargin});
    // }
    
    $scope.alertfn = function() {
      alert('inview');
    };

    // guide start
    $scope.currentStep = ipCookie('myTour') || 1;
    $scope.firstDone = ipCookie('firstDone') || 0;
    $scope.AfterChangeEvent = function() {
      $scope.currentStep = this._currentStep + 0;
      ipCookie('myTour', $scope.currentStep, { expires: 3000 });
    };

    $scope.CompletedEvent = function() {
      $scope.currentStep = this._currentStep + 2;
      ipCookie('myTour', $scope.currentStep, { expires: 3000 });
    };

    if($scope.currentStep < 7 && !$scope.firstDone) {
      $timeout( function(){$scope.CallMe($scope.currentStep);}, 1000);
    }
    ipCookie('firstDone', 1, { expires: 8620000 });

    $scope.IntroOptions = {
      steps:[
        {
          step : 0,
          element: document.querySelector('#shaastra-homepage'),
          intro: "Hello there! Welcome to Shaastra 2016.",
          position: 'down'
        },
        {
          step : 1,
          element: document.querySelector('#top-nav-events'),
          intro: "Compete against the best teams around the country and emerge victorious to win loads cash prizes, internships and other career opportunities. To know more, click on Events.​",
          position: 'down'
        },
        {
          step : 2,
          element: document.querySelector('#top-nav-workshops'),
          intro: "At Shaastra 2016, you can develop valuable technical skills by attending our workshops where you can learn to apply sophisticated concepts like 3D Design, Systems Biology, Network Analysis and Computational Neuroscience. To know more, click on Workshops.",
          position: 'down'
        },
        {
          step : 3,
          element: document.querySelector('#top-nav-shows'),
          intro: "Relish the confluence of Science, Technology and Entertainment in the fun packed shows and savour the variety of our displays and exhibitions at Shaastra 2016. To know more, click on Shows and Exhibitions.",
          position: 'down'
        },
        {
          step : 4,
          element: document.querySelector('#top-nav-preShaastra'),
          intro: "In attempt to give a glimpse of Shaastra, we come to your own city! To know more about our mini-Shaastras, click on Pre-Shaastra Activities.",
          position: 'down'
        },
        {
          step : 5,
          element: document.querySelector('#top-nav-summit'),
          intro: "Create new things, inspire discoveries, uncover ideas and make a difference with makers. To know more, click on International Summit.",
          position: 'down'
        },
        {
          step : 6,
          element: document.querySelector('#top-nav-social'),
          intro: "Shaastra's attempt to give back to society and to create impact in the fields of education and literacy, this time through Pledge-A-Book 2.0 - To know more, click on Social Cause.",
          position: 'down'
        },
        {
          step : 7,
          element: document.querySelector('#homepage-bottom-nav-tour'),
          intro: "Like, Share, Follow, Tweet. Thank you.",
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
    html.css({
      'overflow-y': 'scroll',
      'overflow-x': 'hidden'
    });

    var backButton = $('#back-button');
    backButton.attr('link', '/');

    var hamburgerMenu = $('#omnbars');
    hamburgerMenu.css({'top': '20px'});

    $scope.scrollDown = function (element) {
      var temp = $location.hash();
      $location.hash(element);
      $anchorScroll();
      $location.hash(temp);
    };

    $scope.gotoLink = function (link) {
      $location.url(link);
    };

});

//rotating hexagons directive
angular.module('shaastra2016App')
  .directive('rotateHex', function($animate){
    return function(scope, element){
    $animate.animate(element,'fx-rotate-clock')
      .then(function(){
        console.log("Rotated");
      });
    };
  });
