'use strict';
(function(){
  /**
   * @ngdoc overview
   * @name examenApp
   * @description
   * # examenApp
   *
   * Main module of the application.
   */
  angular.module('examenApp', ['ngResource', 'ngRoute','examenAppControllers', 'examenServicios'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());

