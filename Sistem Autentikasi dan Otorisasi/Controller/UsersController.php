<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Shield\Entities\User;

class UsersController extends BaseController
{
    use ResponseTrait;

    protected $users;

    public function __construct()
    {
        $this->users = auth()->getProvider();
    }

    /**
     * GET /api/users
     */
    public function index()
    {
        $perPage = (int) ($this->request->getGet('perPage') ?? 20);

        return $this->paginate(
            resource: $this->users
                ->withIdentities()
                ->withGroups()
                ->withPermissions(),
            perPage: $perPage
        );
    }

    /**
     * GET /api/users/{id}
     */
    public function show($id = null)
    {
        $user = $this->users
            ->withIdentities()
            ->withGroups()
            ->withPermissions()
            ->findById($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        return $this->respond([
            'user' => [
                'id'          => $user->id,
                'username'    => $user->username,
                'email'       => $user->email,
                'groups'      => $user->getGroups(),
                'permissions' => $user->getPermissions(),
                'active'      => $user->active,
                'created_at'  => $user->created_at,
            ]
        ]);
    }

    public function create()
    {
        $data = $this->request->getJSON(true);

        // fallback ke POST biasa
        if (empty($data)) {
            $data = $this->request->getPost();
        }

        $rules = [
            'username' => 'permit_empty|min_length[3]',
            'email'    => 'required|valid_email',
            'password' => 'required|min_length[8]',
        ];

        if (! $this->validateData($data, $rules)) {
            return $this->failValidationErrors(
                $this->validator->getErrors()
            );
        }

        try {

            $user = new User([
                'username' => $data['username'] ?? null,
                'email'    => $data['email'],
                'password' => $data['password'],
            ]);

            $this->users->save($user);

            $user = $this->users->findById(
                $this->users->getInsertID()
            );

            $this->users->addToDefaultGroup($user);

            return $this->respondCreated([
                'message' => 'User berhasil dibuat.',
                'user'    => [
                    'id'       => $user->id,
                    'username' => $user->username,
                    'email'    => $user->email,
                ]
            ]);

        } catch (\Throwable $e) {

            return $this->failServerError(
                $e->getMessage()
            );
        }
    }

    /**
     * PUT /api/users/{id}
     */
    public function update($id = null)
    {
        $user = $this->users->findById($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        $data = $this->request->getJSON(true);

        if (empty($data)) {
            $data = $this->request->getPost();
        }

        $user->fill([
            'username' => $data['username'] ?? $user->username,
            'email'    => $data['email'] ?? $user->email,
        ]);

        if (! empty($data['password'])) {
            $user->fill([
                'password' => $data['password']
            ]);
        }

        try {

            $this->users->save($user);

            return $this->respond([
                'message' => 'User berhasil diperbarui.',
                'user'    => [
                    'id'       => $user->id,
                    'username' => $user->username,
                    'email'    => $user->email,
                ]
            ]);

        } catch (\Throwable $e) {

            return $this->failServerError(
                $e->getMessage()
            );
        }
    }

    /**
     * DELETE /api/users/{id}
     */
    public function delete($id = null)
    {
        $user = $this->users->findById($id);

        if (! $user) {
            return $this->failNotFound('User tidak ditemukan.');
        }

        try {

            $this->users->delete($id, true);

            return $this->respondDeleted([
                'message' => 'User berhasil dihapus.',
                'id'      => $id
            ]);

        } catch (\Throwable $e) {

            return $this->failServerError(
                $e->getMessage()
            );
        }
    }
}