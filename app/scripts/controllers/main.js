'use strict';

(function() {
  var appControllers = angular.module('examenAppControllers', []);

  /**
   * @ngdoc function
   * @name examenApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the examenApp
   */
  appControllers.controller('MainCtrl', ['$scope', 'Usuario', function ($scope, Usuario) {
    $scope.awesomeThings = ['Hola'];
    /*$http.get('scripts/modelos/usuarios.json').success(function(data) {
      console.log(data);
      $scope.usuarios = data.usuarios;
    });*/
    //console.log(Usuario.query().usuarios);
    $scope.usuarios = Usuario.query();
  }]);
}());

