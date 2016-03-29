'use strict';

/**
 * @ngdoc overview
 * @name interfacesApp
 * @description
 * # interfacesApp
 *
 * Main module of the application.
 */
angular
  .module('interfacesApp', [
    'ngAnimate',
    'ngAria',
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
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/profile/edit', {
        templateUrl: 'views/edit.html',
        controller: 'ProfileCtrl',
        controllerAs: 'edit'
      })
      .when('/profile/favorite', {
        templateUrl: 'views/favorite.html',
        controller: 'ProfileCtrl',
        controllerAs: 'favorite'
      })
      .when('/pruebas', {
        templateUrl: 'views/prueba.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/car', {
        templateUrl: 'views/car.html',
        controller: 'CarCtrl',
        controllerAs: 'car'
      })
      .when('/car/music', {
        templateUrl: 'views/car_music.html',
        controller: 'CarCtrl',
        controllerAs: 'car'
      })
      .when('/car/comfort', {
        templateUrl: 'views/car_comfort.html',
        controller: 'CarCtrl',
        controllerAs: 'car'
      })
      .when('/car/destiny', {
        templateUrl: 'views/car_destiny.html',
        controller: 'CarCtrl',
        controllerAs: 'car'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
