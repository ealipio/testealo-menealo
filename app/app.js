(function() {
  'use strict';

  angular.module('App', [
    'ui.router',
    'users.module'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
