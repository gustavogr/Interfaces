'use strict';

/**
 * @ngdoc function
 * @name interfacesApp.controller:registerCtrl
 * @description
 * # registerCtrl
 * Controller of the interfacesApp
 */
angular.module('interfacesApp')
  .controller('registerCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.showLogged = function(){
    	return false;
    };
  });
