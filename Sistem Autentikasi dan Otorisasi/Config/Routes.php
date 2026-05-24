$routes->group('api', ['filter' => 'cors'], function ($routes) {
    $routes->get('users', 'UsersController::index');
    $routes->get('users/(:num)', 'UsersController::show/$1');
    $routes->post('users', 'UsersController::create');
    $routes->put('users/(:num)', 'UsersController::update/$1');
    $routes->patch('users/(:num)', 'UsersController::update/$1');
    $routes->delete('users/(:num)', 'UsersController::delete/$1');

    $routes->get(
        'users/(:num)/ban-status', 'UserBanController::status/$1'
    );

    $routes->post(
        'users/(:num)/ban', 'UserBanController::ban/$1'
    );

    $routes->post(
        'users/(:num)/unban', 'UserBanController::unban/$1'
    );

    $routes->get(
        'users/(:num)/ban-message', 'UserBanController::message/$1'
    );

    $routes->get(
        'users/(:num)/groups', "UserRoleController::groups/$1"
    );

    $routes->post(
        'users/(:num)/groups', "UserRoleController::addGroups/$1"
    );

    $routes->put(
        'users/(:num)/groups', "UserRoleController::syncGroups/$1"
    );

    $routes->delete(
        'users/(:num)/groups', "UserRoleController::removeGroups/$1"
    );

    $routes->get(
        'users/(:num)/permissions', "UserPermissionController::permissions/$1"
    );

    $routes->post(
        'users/(:num)/permissions', "UserPermissionController::addPermissions/$1"
    );

    $routes->put(
        'users/(:num)/permissions', "UserPermissionController::syncPermissions/$1"
    );

    $routes->delete(
        'users/(:num)/permissions',"UserPermissionController::removePermissions/$1"
    );

    $routes->post(
        'users/(:num)/activate', "UserActivationController::activate/$1"
    );

    $routes->post(
        'users/(:num)/deactivate', "UserActivationController::deactivate/$1"
    );
    
    $routes->group('authorization', static function ($routes) {
        $routes->get('/', 'AuthorizationController::index');
        $routes->get('groups', 'AuthorizationController::groups');
        $routes->get('permissions', 'AuthorizationController::permissions');
        $routes->get('matrix', 'AuthorizationController::matrix');
    });

    $routes->post(
        'password/change',
        'PasswordController::change'
    );

    $routes->options('(:any)', static function () {});
});
