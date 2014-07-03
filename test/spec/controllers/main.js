'use strict';

describe('examenApp controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('examenApp'));
  beforeEach(module('examenServicios'));

  describe('ActivityController', function(){
    var scope, ctrl, $httpBackend;
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('scripts/modelos/municipios.json').respond([{'nombre':'Lerma','ubicacion':{'latitud':-19.999,'longitud':92.9559},'actividades':[{'estado':'PROCESO','monto':9999,'descripcion':'Soy una actividad','id':1},{'estado':'AUTORIZADO','monto':9999,'descripcion':'Soy una actividad 2','id':2}]}]);
      scope = $rootScope.$new();
      ctrl = $controller('ActivityController', {$scope: scope});
    }));

    it('prueba que los tests funcionan', function(){
       expect(true).toBe(true);
    });

    it('inicializa el usuario actual', function(){
      expect(scope.CurrentUser).toEqual({username: '', password: '', rol: ''});
    });

    it('inicializa un array de actividades', function() {
      expect(scope.ActivityArray).toEqual({'actividades':[]});
    });

    it('inicializa la actividad de las formas', function() {
      expect(scope.newActividad).toEqual({});
    });

    describe('inicializacion de modelos', function(){
      it('llena el array de municipios y actividades', function() {
        expect(scope.municipios).toEqualData([]);
        $httpBackend.flush();
        expect(scope.municipios).toEqualData([{'nombre':'Lerma','ubicacion':{'latitud':-19.999,'longitud':92.9559},'actividades':[{'estado':'PROCESO','monto':9999,'descripcion':'Soy una actividad','id':1},{'estado':'AUTORIZADO','monto':9999,'descripcion':'Soy una actividad 2','id':2}]}]);
        expect(scope.ActivityArray.actividades.length).not.toBe(0);
      });
    });
  });

  describe('MainCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('scripts/modelos/usuarios.json').respond([{'username':'juancarlos','password':'123456','rol':'capturista'},{'username':'pepepe','password':'123456','rol':'autorizador'}]);
      scope = $rootScope.$new();
      ctrl = $controller('MainCtrl', {$scope: scope});
    }));

    it('debe verificar que sirvan las pruebas', function () {
      expect(scope.awesomeThings.length).toBe(1);
    });

    it('debe crear "Usuarios" con los usuarios obtenidos del JSON', function() {
      expect(scope.usuarios).toEqualData([]);
      $httpBackend.flush();

      expect(scope.usuarios).toEqualData([{'username':'juancarlos','password':'123456','rol':'capturista'},{'username':'pepepe','password':'123456','rol':'autorizador'}]);
    });

    it('debe inicializar el usuario actual', function() {
      expect(scope.CurrentUser).toEqual({username: '', password: '', rol: ''});
    });

    describe('el login de usuarios', function() {

      it('debe autorizar usuarios con datos correctos', function() {
        scope.signOut();
        var currentUser = {'username': 'juancarlos', 'password': '123456', 'rol': 'capturista'};
        $httpBackend.flush();
        scope.login(currentUser);
        expect(scope.authenticated).toBe(true);
        expect(scope.CurrentUser.rol).toBe(currentUser.rol);
      });

      it('y no autorizar a los usuarios con datos incorrectos', function() {
        scope.signOut();
        var malUsuario= {'username': 'juancarlos', 'password': '2123456', 'rol': 'capturista'};
        $httpBackend.flush();
        scope.login(malUsuario);
        expect(scope.authenticated).toBe(false);
      });

      it('y tambien el signOut', function() {
        scope.signOut();
        expect(scope.CurrentUser.rol).toBe('');
      });
    });




  });
});
