'use strict';

(function() {
  var appControllers = angular.module('examenAppControllers', []);

  /**
   * @ngdoc function
   * @name examenApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controlador principal de la App
   */
  appControllers.controller('MainCtrl', ['$scope', 'Usuario', 'CurrentUser', function ($scope, Usuario, CurrentUser) {
    $scope.awesomeThings = ['Hola'];
    $scope.usuarios = Usuario.query();
    $scope.CurrentUser = CurrentUser;

    $scope.signOut = function(){
      $scope.CurrentUser.rol = '';
    };

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

  /**
   * Controlador de Actividades,
   */
  appControllers.controller('ActivityController', ['$scope','CurrentUser','$http','ActivityArray', function($scope, CurrentUser, $http, ActivityArray){
    $scope.CurrentUser = CurrentUser;
    $scope.ActivityArray = ActivityArray;
    $scope.municipios = [];

    /*Obtiene los municipios y asigna las actividades*/
    $http.get('scripts/modelos/municipios.json').success(function(data) {
        $scope.municipios = data;
        //Igual que con el CurrentUser, debe haber una forma mas limpia de llenar
        for(var i=0; i < $scope.municipios.length; i++) {
          $scope.ActivityArray.actividades = $scope.ActivityArray.actividades.concat($scope.municipios[i].actividades);
        }
    });
    $scope.newActividad = {};
    $scope.selectedMunicipios = {};

    /*Selecciona las actividades en un checkbox*/
    $scope.selectActivities = function(actividad){
      $scope.selectedActivities.push(actividad);
    };

    /*Actualiza las actividades y la agrega al municipio seleccionado*/
    $scope.submitActividad = function(municipio){
      $scope.ActivityArray.actividades.push($scope.newActividad);
      municipio.actividades.push($scope.newActividad);
      //console.log($scope.ActivityArray);
      $scope.newActividad = {};
      //console.log($filter('getMunicipioByNombre')($scope.municipios,"Lerma"));
      console.log($scope.selectedActivities);
    };
  }]);

  appControllers.filter('getMunicipioByNombre', function() {
    return function(input, nombre){
      var i=0, len=input.length;
      for(; i< len; i++) {
        console.log(input[i].nombre);
        if(input[i].nombre === nombre) {
          return input[i];
        }
      }
      return null;
    };
  });

  /*Controla la sesión del usuario*/
  appControllers.controller('UserController', ['$scope','CurrentUser', function($scope,CurrentUser) {
    $scope.CurrentUser = CurrentUser;

    $scope.signOut = function(){
      $scope.CurrentUser.rol = '';
    };
  }]);
}());

