'use strict';
(function() {
  var examenServicios = angular.module('examenServicios', ['ngResource']);

  examenServicios.factory('Usuario', ['$resource',
    function($resource){

      return $resource('scripts/modelos/:username.json', {}, {
        query: {method: 'GET',
                      params: {username:'usuarios'},
                      isArray:true}
      });
    }]);

  /*ActivityArray permite tener la vista de actividades*/
  examenServicios.factory('ActivityArray', function() {
    return {
      actividades: []
    };
  });
  examenServicios.factory('CurrentUser', function() {
    return {
      username: '',
      password: '',
      rol: ''
    };
  });

}());
