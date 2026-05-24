<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;

class UserBanController extends BaseController
{
    use ResponseTrait;

    protected $users;

    public function __construct()
    {
        $this->users = auth()->getProvider();
    }

    /**
     * GET /api/users/{id}/ban-status
     */
    public function status($id)
    {
        $user = $this->users->findById($id);

        if (! $user) {

            return $this->failNotFound(
                'User tidak ditemukan.'
            );
        }

        return $this->respond([
            'user_id' => $user->id,
            'banned'  => $user->isBanned(),
            'reason'  => $user->getBanMessage(),
        ]);
    }

    /**
     * POST /api/users/{id}/ban
     */
    public function ban($id)
    {
        $user = $this->users->findById($id);

        if (! $user) {

            return $this->failNotFound(
                'User tidak ditemukan.'
            );
        }

        /*
         * Optional ban reason
         */
        $data = $this->request->getJSON(true);

        // Fallback ke POST biasa
        if (empty($data)) {
            $data = $this->request->getPost();
        }
        $reason = $data['reason'];

        try {

            $user->ban($reason);

            return $this->respond([
                'message' => 'User berhasil dibanned.',
                'user_id' => $user->id,
                'reason'  => $user->getBanMessage(),
            ]);

        } catch (\Throwable $e) {

            return $this->failServerError(
                $e->getMessage()
            );
        }
    }

    /**
     * POST /api/users/{id}/unban
     */
    public function unban($id)
    {
        $user = $this->users->findById($id);

        if (! $user) {

            return $this->failNotFound(
                'User tidak ditemukan.'
            );
        }

        try {

            $user->unBan();

            return $this->respond([
                'message' => 'User berhasil di-unban.',
                'user_id' => $user->id,
            ]);

        } catch (\Throwable $e) {

            return $this->failServerError(
                $e->getMessage()
            );
        }
    }

    /**
     * GET /api/users/{id}/ban-message
     */
    public function message($id)
    {
        $user = $this->users->findById($id);

        if (! $user) {

            return $this->failNotFound(
                'User tidak ditemukan.'
            );
        }

        return $this->respond([
            'user_id' => $user->id,
            'banned'  => $user->isBanned(),
            'message' => $user->getBanMessage(),
        ]);
    }
}