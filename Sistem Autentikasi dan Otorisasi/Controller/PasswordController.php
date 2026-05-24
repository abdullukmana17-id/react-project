<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Shield\Models\UserModel;

class PasswordController extends BaseController
{
    use ResponseTrait;

    public function change()
    {
        $rules = [
            'current_password' => 'required',
            'password' => 'required|min_length[8]',
            'password_confirm' => 'required|matches[password]',
        ];

        if (!$this->validate($rules)) {

            return $this->failValidationErrors(
                $this->validator->getErrors()
            );
        }

        $json = $this->request->getJSON(true);

        $currentPassword = $json['current_password'];
        $newPassword     = $json['password'];

        /**
         * USER LOGIN
         */
        // $user = auth()->user();
        $users = auth()->getProvider();

        // Find by the user_id
        $user = $users->findById(2);

        if (!$user) {

            return $this->failUnauthorized(
                'User belum login.'
            );
        }

        /**
         * AMBIL HASH PASSWORD USER
         */
        $credentials = $user->getEmailIdentity();

        if (!$credentials) {

            return $this->failNotFound(
                'Credential user tidak ditemukan.'
            );
        }

        /**
         * PASSWORD HASH ADA DI secret2
         */
        $isValidPassword = service('passwords')->verify(
            $currentPassword,
            $credentials->secret2
        );

        if (!$isValidPassword) {

            return $this->failValidationErrors([
                'current_password' => 'Password saat ini salah.'
            ]);
        }

        try {

            $users = model(UserModel::class);

            /**
             * UPDATE PASSWORD
             */
            $user->fill([
                'password' => $newPassword,
            ]);

            $users->save($user);

            /**
             * HAPUS FORCE RESET
             */
            if ($user->requiresPasswordReset()) {
                $user->undoForcePasswordReset();
            }

            return $this->respond([
                'status' => true,
                'message' => 'Password berhasil diubah.'
            ]);

        } catch (\Throwable $e) {

            return $this->failServerError(
                $e->getMessage()
            );
        }
    }
}