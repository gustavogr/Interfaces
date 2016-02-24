'use strict';

/**
 * @ngdoc function
 * @name interfacesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the interfacesApp
 */
angular.module('interfacesApp')
  .controller('LoginCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.showLogged = function(){
    	return false;
    };
  });
