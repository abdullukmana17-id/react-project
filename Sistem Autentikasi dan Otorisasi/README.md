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
http://localhost:8080/api/users/{id}
```
#### Response
##### Sukses
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
##### Gagal
```json
{
    "status": 404,
    "error": 404,
    "messages": {
        "error": "User tidak ditemukan."
    }
}
```
### Menambah pengguna
#### Method
POST
#### Endpoint
```http
http://localhost:8080/api/users/
```
#### Request
```json
{
  "email": "johnson@gmail.com",
  "username": "johnson",
  "password": "123456789"
}
```
#### Response
##### Sukses
```json
{
  "message": "User berhasil dibuat.",
  "user": {
    "id": 8,
    "username": "johnson",
    "email": "johnson@gmail.com"
  }
}
```
##### Gagal
```json
{
  "status": 400,
  "error": 400,
  "messages": {
    "password": "The password field is required."
  }
}
```
### Mengubah data pengguna
#### Method
PATCH/PUT
#### Endpoint
```http
http://localhost:8080/api/users/{id}
```
#### Request
{
  "email": "johnson@gmail.com",
  "username": "johnson",
  "password": "123456789"
}
#### Response
##### Sukses
```json
{
  "message": "User berhasil diperbarui.",
  "user": {
    "id": 8,
    "username": "johnson",
    "email": "johnson.officoal@gmail.com"
  }
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```
### Menghapus data pengguna
#### Method
DELETE
#### Endpoint
```http
http://localhost:8080/api/users
```
#### Response
##### Sukses
```json
{
  "message": "User berhasil dihapus.",
  "id": "8"
}
```

##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Status Ban Pengguna Terdaftar
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/users/{id}/ban-status
```
#### Response
##### Sukses
```json
{
  "user_id": 7,
  "banned": false,
  "reason": null
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```
### Ban Pengguna Terdaftar
#### Method
POST
#### Endpoint
```http
http://localhost:8080/api/users/{id}/ban
```
#### Request
```json
{
    "reason": "Hello World!"
}
```
#### Response
##### Sukses
```json
{
  "message": "User berhasil dibanned.",
  "user_id": 7,
  "reason": "Hello World!"
}
```
###### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Unban Pengguna Terdaftar
#### Method
POST
#### Endpoint
```http
http:localhost:8080/api/users/{id}/unban
```
#### Response
##### Sukses
```json
{
  "message": "User berhasil di-unban.",
  "user_id": 7
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Pesan banned pengguna terdaftar
#### Method
GET
#### Endpoint
```http
http:localhost:8080/api/users/{id}/ban-message
```
#### Response
##### Sukses
```json
{
  "user_id": 7,
  "banned": true,
  "message": "Hello World!"
}
```

### Daftar Role Pengguna
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/users/{id}/groups
```
#### Response
##### Sukses
```json
{
  "user_id": 7,
  "groups": [
    "user"
  ]
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Menambah Role Pengguna
#### Method
POST
#### Endpoint
```http
http://localhost:8080/api/users/{id}/groups
```
#### Request
```json
{
  "groups": [
    "admin"
  ]
}
```
#### Response
##### Sukses
```json
{
  "message": "Group berhasil ditambahkan.",
  "groups": [
    "user",
    "admin"
  ]
}
```
##### Gagal
```json
{
  "status": 400,
  "error": 400,
  "messages": {
    "groups": "supervisor is not a valid group."
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

### Update Role Pengguna
#### Method
PUT
#### Endpoint
```http
http://localhost:8080/api/users/{id}/groups
```
#### Request
```json
{
  "groups": [
    "admin"
  ]
}
```
#### Response
##### Sukses
```json
{
  "message": "Groups berhasil disinkronisasi.",
  "groups": [
    "admin"
  ]
}
```
##### Gagal
```json
{
  "status": 400,
  "error": 400,
  "messages": {
    "groups": "supervisor is not a valid group."
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

### Menghapus role pengguna
#### Method
DELETE
#### Endpoint
```http
http://localhost:8080/api/users/{id}/groups
```
#### Request
```json
{
  "groups": [
    "supervisor"
  ]
}
```
#### Response
##### Sukses
```json
{
  "message": "Group berhasil dihapus.",
  "groups": [
    "admin"
  ]
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Daftar izin pengguna terdaftar
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/users/{id}/permissions
```
#### Response
##### Sukses
```json
{
  "user_id": 7,
  "permissions": []
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Menambah izin penggunan terdaftar
#### Method
POST
#### Endpoint
```http
http://localhost:8080/api/users/{id}/permissions
```
#### Request
```json
{
  "permissions": [
    "users.create"
  ]
}
```
#### Response
##### Sukses
```json
{
  "message": "Permission berhasil ditambahkan.",
  "permissions": [
    "users.create"
  ]
}
```
##### Gagal
```json
{
  "status": 400,
  "error": 400,
  "messages": {
    "permissions": "users.super is not a valid permission."
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
### Update izin pengguna terdaftar
#### Method
PUT
#### Endpoint
```http
http://localhost:8080/api/users/{id}/permissions
```
#### Request
```json
{
  "permissions": [
    "users.create"
  ]
}
```
#### Response
##### Sukses
```json
{
  "message": "Permissions berhasil disinkronisasi.",
  "permissions": [
    "users.create"
  ]
}
```
##### Gagal
```json
{
  "status": 400,
  "error": 400,
  "messages": {
    "permissions": "users.super is not a valid permission."
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
### Menghapus izin pengguna terdaftar
#### Method
DELETE
#### Endpoint
```http
http://localhost:8080/api/users/{id}/permissions
```
#### Request
```json
{
  "permissions": [
    "users.super"
  ]
}
```
#### Response
##### Sukses
```json
{
  "message": "Permission berhasil dihapus.",
  "permissions": [
    "users.create"
  ]
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```
### Aktivasi pengguna
#### Method
POST
#### Endpoint
```http
http://localhost:8080/api/users/{id}/activate
```
#### Response
##### Sukses
```json
{
  "message": "User berhasil diaktifkan."
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Deaktivasi pengguna
#### Method
POST
#### Endpoint
```http
http://localhost:8080/api/users/{id}/activate
```
#### Response
##### Sukses
```json
{
  "message": "User berhasil dinonaktifkan."
}
```
##### Gagal
```json
{
  "status": 404,
  "error": 404,
  "messages": {
    "error": "User tidak ditemukan."
  }
}
```

### Daftar role default, perizinan, role.
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/authorization
```
#### Response
```json
{
  "default_group": "user",
  "groups": [
    {
      "name": "superadmin",
      "title": "Super Admin",
      "description": "Complete control of the site.",
      "permissions": [
        "admin.*",
        "users.*",
        "beta.*"
      ]
    },
    {
      "name": "admin",
      "title": "Admin",
      "description": "Day to day administrators of the site.",
      "permissions": [
        "admin.access",
        "users.create",
        "users.edit",
        "users.delete",
        "beta.access"
      ]
    }
  ],
  "permissions": [
    {
      "name": "admin.access",
      "scope": "admin",
      "action": "access",
      "description": "Can access the sites admin area"
    }
  ]
}
```

### Daftar role
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/authorization/groups
```
#### Response
```json
{
  "default_group": "user",
  "groups": [
    {
      "name": "superadmin",
      "title": "Super Admin",
      "description": "Complete control of the site."
    }
  ]
}
```

### Daftar izin
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/authorization/permissions
```
#### Response
```json
{
  "permissions": [
    {
      "name": "admin.access",
      "scope": "admin",
      "action": "access",
      "description": "Can access the sites admin area"
    }
  ]
}
```

### Daftar relasi role dengan perizinan
#### Method
GET
#### Endpoint
```http
http://localhost:8080/api/authorization/matrix
```
#### Response
```json
{
  "matrix": {
    "superadmin": [
      "admin.*",
      "users.*",
      "beta.*"
    ]
  }
}
```

### Ubah Password
#### Method
POST
#### Endpoint
```http
http://localhost:8080/api/password/change
```
#### Request
```json
{
    "current_password": "",
    "password": "",
    "password_confirm": ""
}
```
#### Response
##### Sukses
```json
{
  "status": true,
  "message": "Password berhasil diubah."
}
```
##### Gagal
```json
{
  "status": 400,
  "error": 400,
  "messages": {
    "current_password": "The current_password field is required.",
    "password": "The password field is required.",
    "password_confirm": "The password_confirm field is required."
  }
}
```
```json
{
  "status": 400,
  "error": 400,
  "messages": {
    "current_password": "Password saat ini salah."
  }
}
```
