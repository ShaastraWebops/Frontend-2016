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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })      
      .when('/homePage', {
        templateUrl: 'views/homepage.html',
        controller: 'eventsListCtrl',
        controllerAs: 'eventsList'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/loginRegister', {
        templateUrl: 'views/Login.html',
        controller: 'loginCtrl',
        controllerAs: 'login'
      })
      .when('/contactUs', {
        templateUrl: 'views/contact-us.html',
        controller: 'contactUsCtrl',
        controllerAs: 'contactUs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
