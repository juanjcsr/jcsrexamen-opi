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
  appControllers.controller('MainCtrl', ['$scope', 'Usuario', 'CurrentUser', function ($scope, Usuario, CurrentUser) {
    $scope.awesomeThings = ['Hola'];
    /*$http.get('scripts/modelos/usuarios.json').success(function(data) {
      console.log(data);
      $scope.usuarios = data.usuarios;
    });*/
    //console.log(Usuario.query().usuarios);
    $scope.usuarios = Usuario.query();
    $scope.CurrentUser = CurrentUser;
    $scope.login = function(currentuser){
      $scope.CurrentUser = currentuser;
      $scope.authenticated = false;
      //no es la forma mas limpia de hacer la autenticacion...
      for(var i=0; i < $scope.usuarios.length; i++) {
        if ($scope.usuarios[i].username === currentuser.username) {
          if($scope.usuarios[i].password === currentuser.password) {
            console.log($scope.usuarios[i].rol);
            $scope.CurrentUser.rol = $scope.usuarios[i].rol;
            $scope.authenticated = true;
          }
        }
      }

    };
  }]);

  appControllers.controller('UserController', ['$scope','CurrentUser', function($scope,CurrentUser) {
    $scope.CurrentUser = CurrentUser;
  }]);
}());

