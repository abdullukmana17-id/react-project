<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Shield\Models\UserModel;
use CodeIgniter\Shield\Authorization\AuthorizationException;

class UserRoleController extends BaseController
{
    use ResponseTrait;

    protected UserModel $users;

    public function __construct()
    {
        $this->users = model(UserModel::class);
    }

    /**
     * GET /api/users/{id}/groups
     */
    public function groups(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        return $this->respond([
            'user_id' => $user->id,
            'groups'  => $user->getGroups(),
        ]);
    }

    /**
     * POST /api/users/{id}/groups
     */
    public function addGroups(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        $groups = $this->request->getJSON(true)['groups'] ?? [];

        if (empty($groups)) {
            return $this->failValidationErrors([
                'groups' => 'Groups wajib diisi.'
            ]);
        }

        try {
            $user->addGroup(...$groups);

            return $this->respondCreated([
                'message' => 'Group berhasil ditambahkan.',
                'groups'  => $user->getGroups(),
            ]);

        } catch (AuthorizationException $e) {
            return $this->failValidationErrors([
                'groups' => $e->getMessage()
            ]);
        }
    }

    /**
     * PUT /api/users/{id}/groups
     */
    public function syncGroups(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        $groups = $this->request->getJSON(true)['groups'] ?? [];

        try {
            $user->syncGroups(...$groups);

            return $this->respond([
                'message' => 'Groups berhasil disinkronisasi.',
                'groups'  => $user->getGroups(),
            ]);

        } catch (AuthorizationException $e) {
            return $this->failValidationErrors([
                'groups' => $e->getMessage()
            ]);
        }
    }

    /**
     * DELETE /api/users/{id}/groups
     */
    public function removeGroups(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        $groups = $this->request->getJSON(true)['groups'] ?? [];

        if (empty($groups)) {
            return $this->failValidationErrors([
                'groups' => 'Groups wajib diisi.'
            ]);
        }

        try {
            $user->removeGroup(...$groups);

            return $this->respondDeleted([
                'message' => 'Group berhasil dihapus.',
                'groups'  => $user->getGroups(),
            ]);

        } catch (AuthorizationException $e) {
            return $this->failValidationErrors([
                'groups' => $e->getMessage()
            ]);
        }
    }
}