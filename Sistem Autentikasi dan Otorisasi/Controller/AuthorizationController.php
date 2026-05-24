<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;

class AuthorizationController extends BaseController
{
    use ResponseTrait;

    /**
     * GET /api/authorization/groups
     */
    public function groups()
    {
        $config = config('AuthGroups');

        $groups = [];

        foreach ($config->groups as $key => $group) {

            $groups[] = [
                'name'        => $key,
                'title'       => $group['title'] ?? $key,
                'description' => $group['description'] ?? null,
            ];
        }

        return $this->respond([
            'default_group' => $config->defaultGroup,
            'groups'        => $groups,
        ]);
    }

    /**
     * GET /api/authorization/permissions
     */
    public function permissions()
    {
        $config = config('AuthGroups');

        $permissions = [];

        foreach ($config->permissions as $key => $description) {

            $parts = explode('.', $key);

            $permissions[] = [
                'name'        => $key,
                'scope'       => $parts[0] ?? null,
                'action'      => $parts[1] ?? null,
                'description' => $description,
            ];
        }

        return $this->respond([
            'permissions' => $permissions,
        ]);
    }

    /**
     * GET /api/authorization/matrix
     */
    public function matrix()
    {
        $config = config('AuthGroups');

        return $this->respond([
            'matrix' => $config->matrix,
        ]);
    }

    /**
     * GET /api/authorization
     *
     * Combined authorization config
     */
    public function index()
    {
        $config = config('AuthGroups');

        $groups = [];

        foreach ($config->groups as $key => $group) {

            $groups[] = [
                'name'        => $key,
                'title'       => $group['title'] ?? $key,
                'description' => $group['description'] ?? null,
                'permissions' => $config->matrix[$key] ?? [],
            ];
        }

        $permissions = [];

        foreach ($config->permissions as $key => $description) {

            $parts = explode('.', $key);

            $permissions[] = [
                'name'        => $key,
                'scope'       => $parts[0] ?? null,
                'action'      => $parts[1] ?? null,
                'description' => $description,
            ];
        }

        return $this->respond([
            'default_group' => $config->defaultGroup,
            'groups'        => $groups,
            'permissions'   => $permissions,
        ]);
    }
}