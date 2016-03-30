'use strict';

/**
 * @ngdoc function
 * @name interfacesApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the interfacesApp
 */
angular.module('interfacesApp')
  .controller('ProfileCtrl', function ($rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.showLogged = function(){
    	return true;
    };

    /* Mierda del spinner */
    (function ($) {
      $('.spinner .btn:first-of-type').on('click', function() {
        $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
      });
      $('.spinner .btn:last-of-type').on('click', function() {
        $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
      });
    })(jQuery);
    
    $('#btnContinue').click(function(){
      $('.nav-tabs > .active').next('li').find('a').trigger('click');
    });

    $('#btnBack').click(function(){
      $('.nav-tabs > .active').prev().find('a').trigger('click');
    });

    $('#confirmation').on('hidden.bs.modal', function (e) {
      window.location.href='#/'
    })

  });
