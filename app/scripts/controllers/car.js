'use strict';

/**
 * @ngdoc function
 * @name interfacesApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the interfacesApp
 */
angular.module('interfacesApp')
  .controller('CarCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.showLogged = function(){
      return false;
    };



    $('#validation').on('hidden.bs.modal', function (e) {
      window.location.href='#/car/'
    })
  });
