<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Shield\Models\UserModel;
use CodeIgniter\Shield\Authorization\AuthorizationException;

class UserPermissionController extends BaseController
{
    use ResponseTrait;

    protected UserModel $users;

    public function __construct()
    {
        $this->users = model(UserModel::class);
    }

    /**
     * GET /api/users/{id}/permissions
     */
    public function permissions(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        return $this->respond([
            'user_id'     => $user->id,
            'permissions' => $user->getPermissions(),
        ]);
    }

    /**
     * POST /api/users/{id}/permissions
     */
    public function addPermissions(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        $permissions = $this->request->getJSON(true)['permissions'] ?? [];

        if (empty($permissions)) {
            return $this->failValidationErrors([
                'permissions' => 'Permissions wajib diisi.'
            ]);
        }

        try {
            $user->addPermission(...$permissions);

            return $this->respondCreated([
                'message'     => 'Permission berhasil ditambahkan.',
                'permissions' => $user->getPermissions(),
            ]);

        } catch (AuthorizationException $e) {
            return $this->failValidationErrors([
                'permissions' => $e->getMessage()
            ]);
        }
    }

    /**
     * PUT /api/users/{id}/permissions
     */
    public function syncPermissions(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        $permissions = $this->request->getJSON(true)['permissions'] ?? [];

        try {
            $user->syncPermissions(...$permissions);

            return $this->respond([
                'message'     => 'Permissions berhasil disinkronisasi.',
                'permissions' => $user->getPermissions(),
            ]);

        } catch (AuthorizationException $e) {
            return $this->failValidationErrors([
                'permissions' => $e->getMessage()
            ]);
        }
    }

    /**
     * DELETE /api/users/{id}/permissions
     */
    public function removePermissions(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        $permissions = $this->request->getJSON(true)['permissions'] ?? [];

        if (empty($permissions)) {
            return $this->failValidationErrors([
                'permissions' => 'Permissions wajib diisi.'
            ]);
        }

        try {
            $user->removePermission(...$permissions);

            return $this->respondDeleted([
                'message'     => 'Permission berhasil dihapus.',
                'permissions' => $user->getPermissions(),
            ]);

        } catch (AuthorizationException $e) {
            return $this->failValidationErrors([
                'permissions' => $e->getMessage()
            ]);
        }
    }
}