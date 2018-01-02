describe('Users controller', function () {

    beforeEach(angular.mock.module('users.module'));

    var $controller, $scope, UsersFactory;

    beforeEach(angular.mock.inject(function (_$controller_, _UsersFactory_) {
        $controller = _$controller_;
        UsersFactory = _UsersFactory_;

        $scope = {};
        $controller = _$controller_('UsersController', { $scope: $scope, UsersFactory: UsersFactory });
    }));

    it('should exist', function () {
        expect($controller).toBeDefined();
    });
});
