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
    'ngScrollable',
    'ui.bootstrap',
    'md.chips.select',
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
      .when('/event/:eventId', {
        templateUrl: 'views/event-details.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/login', {
        templateUrl: 'views/Login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
      })
      .when('/contactUs', {
        templateUrl: 'views/contact-us.html',
        controller: 'contactUsCtrl',
        controllerAs: 'contactUs'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl',
        controllerAs: 'dashboard'
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
          $location.path('/login');
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
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.url('/login');
        }
      });
    });
  });

