(function() {
    'use strict';
  
    angular.module('users.module')
    .controller('UsersController', UsersController);

    UsersController.$inject = ['UsersFactory'];

    function UsersController(Users){
      var vm = this;
      vm.users = Users.all();
      vm.sum = (a,b) => a+b;
    }
  })();
  