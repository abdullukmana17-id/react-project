<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Shield\Models\UserModel;

class UserActivationController extends BaseController
{
    use ResponseTrait;

    protected UserModel $users;

    public function __construct()
    {
        $this->users = model(UserModel::class);
    }

    /**
     * POST /api/users/{id}/activate
     */
    public function activate(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        if ($user->isActivated()) {
            return $this->failResourceExists(
                'User sudah aktif.'
            );
        }

        $user->activate();

        return $this->respond([
            'message' => 'User berhasil diaktifkan.'
        ]);
    }

    /**
     * POST /api/users/{id}/deactivate
     */
    public function deactivate(int $id)
    {
        $user = $this->users->find($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        if ($user->isNotActivated()) {
            return $this->failResourceGone(
                'User sudah nonaktif.'
            );
        }

        $user->deactivate();

        return $this->respond([
            'message' => 'User berhasil dinonaktifkan.'
        ]);
    }
}