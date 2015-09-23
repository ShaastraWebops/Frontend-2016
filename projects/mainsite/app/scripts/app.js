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
      .when('/event-category/:eventId', {
        templateUrl: 'views/event-category.html',
        controller: 'eventsCategoryCtrl',
        controllerAs: 'eventsCategory'
      })
      .when('/event/:eventId/:id', {
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
  });
