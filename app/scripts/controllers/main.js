'use strict';

/**
 * @ngdoc function
 * @name examenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the examenApp
 */
angular.module('examenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
