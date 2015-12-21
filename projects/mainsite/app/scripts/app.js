'use strict';

/**
 * @ngdoc overview
 * @name shaastra2016App
 * @description
 * # shaastra2016App
 *
 * Main module of the application.
 */
angular
  .module('shaastra2016App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'LocalStorageModule',
    'cgBusy',
    'angular-intro',
    'ipCookie'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    // $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/register', {
        templateUrl: 'views/Register.html',
        controller: 'registerCtrl',
        controllerAs: 'register'
      })      
      .when('/event-list', {
        templateUrl: 'views/event-list.html',
        controller: 'eventListCtrl',
        controllerAs: 'eventsList'
      })
      .when('/event-category/:eventCategoryId', {
        templateUrl: 'views/event-category.html',
        controller: 'eventsCategoryCtrl',
        controllerAs: 'eventsCategory'
      })
      .when('/event/:eventCategoryId/:eventId', {
        templateUrl: 'views/event-details.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/workshop-list', {
        templateUrl: 'views/workshop-list.html',
        controller: 'workshopListCtrl',
        controllerAs: 'workshopsList'
      })
      .when('/workshop-category/:workshopCategoryId', {
        templateUrl: 'views/workshop-category.html',
        controller: 'workshopsCategoryCtrl',
        controllerAs: 'workshopsCategory'
      })
      .when('/workshop/:workshopCategoryId/:workshopId', {
        templateUrl: 'views/workshop-details.html',
        controller: 'WorkshopsCtrl',
        controllerAs: 'workshops'
      })
      .when('/login', {
        templateUrl: 'views/Login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
      })
      .when('/contact-us', {
        templateUrl: 'views/contact-us.html',
        controller: 'contactUsCtrl',
        controllerAs: 'contactUs'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl',
        controllerAs: 'dashboard',
        authenticate: true
      })
      .when('/lectures', {
        templateUrl: 'views/lectures.html',
        controller: 'lecturesCtrl',
        controllerAs: 'lectures'
      })
      .when('/pre-shaastra', {
        templateUrl: 'views/pre-shaastra.html',
        controller: 'preShaastraCtrl',
        controllerAs: 'preShaastra'
      })
      .when('/shows-and-exhibitions', {
        templateUrl: 'views/shows-and-exhibitions.html',
        controller: 'showsExhibitonsCtrl',
        controllerAs: 'showsExhibitons'
      })
      .when('/about-us', {
        templateUrl: 'views/about-us.html',
        controller: 'aboutUsCtrl',
        controllerAs: 'aboutUs'
      })
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'sponsorsCtrl',
        controllerAs: 'sponsors'
      })
      .when('/social', {
        templateUrl: 'views/social.html',
        controller: 'socialCtrl',
        controllerAs: 'social'
      })
      .when('/maker-summit', {
        templateUrl: 'views/maker-summit.html',
        controller: 'makerSummitCtrl',
        controllerAs: 'summit'
      })
      .when('/samparks', {
        templateUrl: 'views/sampark-category.html',
        controller: 'samparksCategoryCtrl',
        controllerAs: 'samparksCategory'
      })
      .when('/samparks/:index/:city', {
        templateUrl: 'views/sampark-details.html',
        controller: 'samparksCtrl',
        controllerAs: 'samparks'
      })
      .when('/hospitality', {
        templateUrl: 'views/hospitality.html',
        controller: 'hospiCtrl',
        controllerAs: 'hospi'
      })
      .when('/shaastra-fellowship', {
        templateUrl: 'views/sis-fellowship.html',
        controller: 'sisFellowshipCtrl',
        controllerAs: 'sis'
      })
      .when('/forgot-password', {
        templateUrl: 'views/forgot-password.html',
        controller: 'forgotPasswordCtrl',
        controllerAs: 'forgoPass'
      })
      .when('/reset-password/:token', {
        templateUrl: 'views/reset-password.html',
        controller: 'resetPasswordCtrl',
        controllerAs: 'resetPass'
      })
      .when('/edit-profile', {
        templateUrl: 'views/edit-profile.html',
        controller: 'editProfileCtrl',
        controllerAs: 'editProfile',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })
  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.url('/login');
        }
      });

      $rootScope.showBackButton = (next.$$route.originalPath !== '/');
      $rootScope.showLogos = (next.$$route.originalPath === '/');
      $rootScope.showFooter = (next.$$route.originalPath !== '/');
      $rootScope.showBackgroundImage = (next.$$route.originalPath === '/');

      var hamburger = $('#omnbars');
      if(!$rootScope.showBackButton) {
        hamburger.css({'top': '20px'});
      } else {
        hamburger.css({'top': '10px'});
      }

      if($('.menu').hasClass('mnopen')) {
        $('.down .list').removeClass("clicked");
        $('.mn-social').addClass("out");
        $('.menu').removeClass("mnopen");
        $('.c').removeClass("block");
        $('.o').removeClass("none");
        $('.o').addClass("inblock");
        $('.o').animate({left:"-=220px"}, 200);
        $('#backdrop').css("display", "none");
      } 

    });
  })
  .run(function ($location) {
    !function(A,n,g,u,l,a,r){A.GoogleAnalyticsObject=l,A[l]=A[l]||function(){
    (A[l].q=A[l].q||[]).push(arguments)},A[l].l=+new Date,a=n.createElement(g),
    r=n.getElementsByTagName(g)[0],a.src=u,r.parentNode.insertBefore(a,r)
    }(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-68796703-1', 'auto');
    ga('send', 'pageview', { page: $location.url() });
  });

