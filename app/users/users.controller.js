(function() {
    'use strict';
  
    angular.module('users.module')
    .controller('UsersController', UsersController);

    function UsersController(Users){
      var vm = this;

      vm.users = Users.all();
    }
  })();
  