# Implementasi Autentikasi Codeigneter 4

## Instalasi Codeigneter Shield
```bash
composer require codeigniter4/shield
```

## Siapkan database

## Konfigurasi database di file `.env`

## Setup Shield Codeigneter4 
```bash
php spark shield:setup
```

## Setup Email
```php
public int $SMTPPort = 587;
public string $SMTPHost = 'smtp.gmail.com';
public string $SMTPUser = "";
public string $SMTPPass  "";
public string $protocol = 'smtp';
```

## Setup `Auth.php`
Ubah bagian kode berikut
```php
public array $actions = [
    'register' => null,
    'login'    => null,
];
```
menjadi 
```php
public array $actions = [
    'register' => \CodeIgniter\Shield\Authentication\Actions\EmailActivator::class,
    'login'    => \CodeIgniter\Shield\Authentication\Actions\Email2FA::class,
];
```
