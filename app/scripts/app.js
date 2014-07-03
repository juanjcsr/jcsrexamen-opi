'use strict';
(function(){
  /**
   * @ngdoc overview
   * @name examenApp
   * @description
   * # examenApp
   *
   * Módulo principal
   */
  angular.module('examenApp', ['ngResource', 'ngRoute','examenAppControllers', 'examenServicios', 'examenDirectives'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          //templateUrl: 'views/main.html',
          //controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());

