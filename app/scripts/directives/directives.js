'use strict';
(function() {
  var appDirectives = angular.module('examenDirectives',[]);

  appDirectives.directive('municipioTabs', function() {
    return {
      restrict: 'E',
      templateUrl:'views/municipio-tabs.html',
      controller: function() {
        this.tab = 1;
        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };
        this.setTab = function(active){
          this.tab = active;
        };
      },
      controllerAs: 'tab'
    };
  });

  appDirectives.directive('actividadesTab', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/actividades-vista.html'
    };
  });
}());
