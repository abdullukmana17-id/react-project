## Konfigurasi `Cors.php` dan `Filters.php`

## Konfigurasi `Routes.php`
```php
$routes->group('api', ['filter' => 'cors'], function ($routes) {
    $routes->get('users', 'UsersController::index');
    $routes->get('users/(:num)', 'UsersController::show/$1');
    $routes->post('users', 'UsersController::create');
    $routes->put('users/(:num)', 'UsersController::update/$1');
    $routes->patch('users/(:num)', 'UsersController::update/$1');
    $routes->delete('users/(:num)', 'UsersController::delete/$1');

    $routes->get('users/(:num)/ban-status', 'UserBanController::status/$1');
    $routes->post('users/(:num)/ban', 'UserBanController::ban/$1');
    $routes->post('users/(:num)/unban', 'UserBanController::unban/$1');
    $routes->get('users/(:num)/ban-message', 'UserBanController::message/$1');

    $routes->get('users/(:num)/groups', "UserRoleController::groups/$1");
    $routes->post('users/(:num)/groups', "UserRoleController::addGroups/$1");
    $routes->put('users/(:num)/groups', "UserRoleController::syncGroups/$1");
    $routes->delete('users/(:num)/groups', "UserRoleController::removeGroups/$1");

    $routes->get('users/(:num)/permissions', "UserPermissionController::permissions/$1");
    $routes->post('users/(:num)/permissions', "UserPermissionController::addPermissions/$1");
    $routes->put('users/(:num)/permissions', "UserPermissionController::syncPermissions/$1");
    $routes->delete('users/(:num)/permissions',"UserPermissionController::removePermissions/$1");

    $routes->post('users/(:num)/activate', "UserActivationController::activate/$1");
    $routes->post('users/(:num)/deactivate', "UserActivationController::deactivate/$1");

    $routes->get( '/', "AuthorizationController::index" ); 
    $routes->get( 'groups', "AuthorizationController::groups" ); 
    $routes->get( 'permissions', "AuthorizationController::permissions" ); 
    $routes->get( 'matrix', "AuthorizationController::matrix" );

    $routes->post('password/change','PasswordController::change');

    $routes->options('(:any)', static function () {});
});
```

## Restfull API
### Mengambil data user
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/users?page=1&perPage=20
```
#### Response
```json
{
    "data": {
        "2": {
            "id": 2,
            "username": "abdullukmana",
            "status": null,
            "status_message": null,
            "active": true,
            "last_active": null,
            "created_at": {
                "date": "2026-05-20 06:54:46.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "updated_at": {
                "date": "2026-05-20 08:08:11.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "deleted_at": null
        },
        "3": {
            "id": 3,
            "username": "johndoe",
            "status": "banned",
            "status_message": "Toxic",
            "active": false,
            "last_active": null,
            "created_at": {
                "date": "2026-05-20 07:00:26.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "updated_at": {
                "date": "2026-05-20 08:08:25.000000",
                "timezone_type": 3,
                "timezone": "UTC"
            },
            "deleted_at": null
        }
    },
    "meta": {
        "page": 1,
        "perPage": 20,
        "total": 2,
        "totalPages": 1
    },
    "links": {
        "self": "http://localhost:8080/api/users?page=1&perPage=20",
        "first": "http://localhost:8080/api/users?page=1&perPage=20",
        "last": "http://localhost:8080/api/users?page=1&perPage=20",
        "prev": null,
        "next": null
    }
}
```

### Mengambil data user berdasarkan USer ID
#### Method 
GET
#### Endpoint
```http
http://localhost:8080/api/users/2
```
#### Response
```json
{
    "user": {
        "id": 2,
        "username": "abdullukmana",
        "email": "abdullukmana17@gmail.com",
        "groups": [
            "user",
            "admin"
        ],
        "permissions": [
            "users.create"
        ],
        "active": true,
        "created_at": {
            "date": "2026-05-20 06:54:46.000000",
            "timezone_type": 3,
            "timezone": "UTC"
        }
    }
}
```
