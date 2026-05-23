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

### Mengambil data user berdasarkan User ID
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
        "username": "micahelsmith",
        "email": "michaelsmith17@gmail.com",
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
```json
{
    "status": 404,
    "error": 404,
    "messages": {
        "error": "User tidak ditemukan."
    }
}
```
