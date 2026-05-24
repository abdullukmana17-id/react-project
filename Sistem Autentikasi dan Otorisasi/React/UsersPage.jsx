// UserManagement.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';

const API_BASE = 'http://localhost:8080/api';

const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const colors = ['av-0', 'av-1', 'av-2', 'av-3', 'av-4'];

const colorFor = (id) => colors[id % colors.length];

const initials = (name = '') => name.slice(0, 2).toUpperCase();

const fmt = (dt) => {
    if (!dt) return '—';
    return typeof dt === 'object'
        ? dt.date?.split(' ')[0] || '—'
        : dt.split(' ')[0];
};

function statusBadge(user, size = '') {
    const style = size ? { fontSize: size } : { fontSize: '10px' };

    if (user.status === 'banned') {
        return (
            <span
                className="badge rounded-pill"
                style={{
                    background: 'var(--app-red-dim)',
                    color: 'var(--app-red-txt)',
                    border: '1px solid #7f1d1d',
                    ...style,
                }}
            >
                <i className="bi bi-slash-circle me-1" />
                Banned
            </span>
        );
    }

    if (!user.active) {
        return (
            <span
                className="badge rounded-pill bg-secondary"
                style={style}
            >
                <i className="bi bi-pause-circle me-1" />
                Nonaktif
            </span>
        );
    }

    return (
        <span
            className="badge rounded-pill"
            style={{
                background: 'var(--app-green-dim)',
                color: 'var(--app-green-txt)',
                border: '1px solid #14532d',
                ...style,
            }}
        >
            <i className="bi bi-check-circle me-1" />
            Aktif
        </span>
    );
}

function apiMethodBadge(method) {
    return (
        <span className={`badge badge-${method.toLowerCase()} me-1`}>
            {method}
        </span>
    );
}

export default function UsersPage() {
    const [allUsers, setAllUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [activeTab, setActiveTab] = useState('info');
    const [search, setSearch] = useState('');
    const [avGroups, setAvGroups] = useState([]);
    const [avPerms, setAvPerms] = useState([]);
    const [loading, setLoading] = useState(true);

    const [addForm, setAddForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [banReason, setBanReason] = useState('');

    const [editForm, setEditForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const addModalRef = useRef(null);
    const banModalRef = useRef(null);

    const addModalInst = useRef(null);
    const banModalInst = useRef(null);

    const filteredUsers = useMemo(() => {
        if (!search.trim()) return allUsers;

        return allUsers.filter((u) =>
            u.username.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, allUsers]);

    useEffect(() => {
        addModalInst.current = new bootstrap.Modal(addModalRef.current);
        banModalInst.current = new bootstrap.Modal(banModalRef.current);

        loadUsers();
    }, []);

    useEffect(() => {
        if (selectedUser) {
            setEditForm({
                username: selectedUser.username || '',
                email: selectedUser.email || '',
                password: '',
            });
        }
    }, [selectedUser]);

    async function api(method, endpoint, body = null) {
        const opts = {
            method,
            headers: HEADERS,
        };

        if (body) {
            opts.body = JSON.stringify(body);
        }

        try {
            const res = await fetch(API_BASE + endpoint, opts);
            const data = await res.json();

            return {
                ok: res.ok,
                status: res.status,
                data,
            };
        } catch {
            return {
                ok: false,
                status: 0,
                data: {
                    messages: {
                        error: 'Tidak dapat terhubung ke server.',
                    },
                },
            };
        }
    }

    function errMsg(data) {
        if (!data) return 'Terjadi kesalahan.';

        if (data.messages) {
            const v = Object.values(data.messages);
            return v[0] || 'Terjadi kesalahan.';
        }

        return data.message || 'Terjadi kesalahan.';
    }

    function toast(msg, type = 'ok') {
        const map = {
            ok: {
                bg: 'var(--app-green-dim)',
                border: '#15803d',
                color: 'var(--app-green-txt)',
                icon: 'check-circle-fill',
            },
            err: {
                bg: 'var(--app-red-dim)',
                border: '#b91c1c',
                color: 'var(--app-red-txt)',
                icon: 'x-circle-fill',
            },
            inf: {
                bg: 'var(--app-blue-dim)',
                border: '#1d4ed8',
                color: 'var(--app-blue-txt)',
                icon: 'info-circle-fill',
            },
        };

        const c = map[type];

        const wrapper = document.createElement('div');

        wrapper.innerHTML = `
            <div class="toast align-items-center border-0 show"
                style="background:${c.bg};border:1px solid ${c.border};color:${c.color};min-width:280px">
                <div class="d-flex align-items-center gap-2 p-3" style="font-size:13px">
                    <i class="bi bi-${c.icon}"></i>
                    <span class="flex-fill">${msg}</span>
                    <button type="button" class="btn-close btn-close-white btn-close-sm" data-bs-dismiss="toast"></button>
                </div>
            </div>
        `;

        const toastEl = wrapper.firstElementChild;

        document
            .getElementById('toastContainer')
            .appendChild(toastEl);

        const t = new bootstrap.Toast(toastEl, {
            delay: 3500,
        });

        t.show();

        toastEl.addEventListener('hidden.bs.toast', () => {
            toastEl.remove();
        });
    }

    async function loadUsers() {
        setLoading(true);

        const r = await api('GET', '/users?page=1&perPage=100');

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            setLoading(false);
            return;
        }

        const users = Object.values(r.data.data || {});
        setAllUsers(users);

        const ar = await api('GET', '/authorization');

        if (ar.ok) {
            setAvGroups(
                (ar.data.groups || []).map((g) => g.name)
            );

            setAvPerms(
                (ar.data.permissions || []).map((p) => p.name)
            );
        }

        setLoading(false);
    }

    async function selectUser(id) {
        const r = await api('GET', `/users/${id}`);

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        setSelectedUser(r.data.user);
        setActiveTab('info');

        setTimeout(() => {
            document
                .getElementById('detailSection')
                ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
        }, 100);
    }

    async function refreshSelected() {
        if (!selectedUser) return;

        const r = await api(
            'GET',
            `/users/${selectedUser.id}`
        );

        if (!r.ok) return;

        const updatedUser = r.data.user;

        setSelectedUser(updatedUser);

        setAllUsers((prev) =>
            prev.map((u) =>
                u.id === updatedUser.id
                    ? { ...u, ...updatedUser }
                    : u
            )
        );
    }

    async function saveInfo() {
        if (!selectedUser) return;

        const username = editForm.username.trim();
        const email = editForm.email.trim();

        if (!username || !email) {
            toast(
                'Username dan email wajib diisi.',
                'err'
            );
            return;
        }

        const body = {
            username,
            email,
        };

        if (editForm.password) {
            body.password = editForm.password;
        }

        const r = await api(
            'PATCH',
            `/users/${selectedUser.id}`,
            body
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'User berhasil diperbarui.'
        );

        await refreshSelected();
    }

    async function submitAdd() {
        const { username, email, password } = addForm;

        if (!username || !email || !password) {
            toast('Semua field wajib diisi.', 'err');
            return;
        }

        const r = await api('POST', '/users/', {
            username,
            email,
            password,
        });

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                `User ${username} berhasil dibuat.`
        );

        addModalInst.current.hide();

        setAddForm({
            username: '',
            email: '',
            password: '',
        });

        await loadUsers();
    }

    async function confirmBan() {
        if (!banReason.trim()) {
            toast('Alasan ban wajib diisi.', 'err');
            return;
        }

        const r = await api(
            'POST',
            `/users/${selectedUser.id}/ban`,
            {
                reason: banReason,
            }
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        banModalInst.current.hide();

        toast(
            r.data.message ||
                'User berhasil dibanned.'
        );

        await refreshSelected();
    }

    async function doUnban() {
        const r = await api(
            'POST',
            `/users/${selectedUser.id}/unban`
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'User berhasil di-unban.'
        );

        await refreshSelected();
    }

    async function doActivate() {
        const r = await api(
            'POST',
            `/users/${selectedUser.id}/activate`
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'User berhasil diaktifkan.'
        );

        await refreshSelected();
    }

    async function doDeactivate() {
        const r = await api(
            'POST',
            `/users/${selectedUser.id}/deactivate`
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'User berhasil dinonaktifkan.'
        );

        await refreshSelected();
    }

    async function addRole() {
        const select =
            document.getElementById('role-add-select');

        const val = select.value;

        if (!val) {
            toast(
                'Pilih role terlebih dahulu.',
                'err'
            );
            return;
        }

        const r = await api(
            'POST',
            `/users/${selectedUser.id}/groups`,
            {
                groups: [val],
            }
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'Group berhasil ditambahkan.'
        );

        await refreshSelected();
    }

    async function removeRole(g) {
        const r = await api(
            'DELETE',
            `/users/${selectedUser.id}/groups`,
            {
                groups: [g],
            }
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'Group berhasil dihapus.'
        );

        await refreshSelected();
    }

    async function syncRoles() {
        const r = await api(
            'PUT',
            `/users/${selectedUser.id}/groups`,
            {
                groups: selectedUser.groups || [],
            }
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'Groups berhasil disinkronisasi.'
        );

        await refreshSelected();
    }

    async function addPerm() {
        const select =
            document.getElementById('perm-add-select');

        const val = select.value;

        if (!val) {
            toast(
                'Pilih permission terlebih dahulu.',
                'err'
            );
            return;
        }

        const r = await api(
            'POST',
            `/users/${selectedUser.id}/permissions`,
            {
                permissions: [val],
            }
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'Permission berhasil ditambahkan.'
        );

        await refreshSelected();
    }

    async function removePerm(p) {
        const r = await api(
            'DELETE',
            `/users/${selectedUser.id}/permissions`,
            {
                permissions: [p],
            }
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'Permission berhasil dihapus.'
        );

        await refreshSelected();
    }

    async function syncPerms() {
        const r = await api(
            'PUT',
            `/users/${selectedUser.id}/permissions`,
            {
                permissions:
                    selectedUser.permissions || [],
            }
        );

        if (!r.ok) {
            toast(errMsg(r.data), 'err');
            return;
        }

        toast(
            r.data.message ||
                'Permissions berhasil disinkronisasi.'
        );

        await refreshSelected();
    }

    const stats = {
        total: allUsers.length,
        active: allUsers.filter(
            (u) =>
                u.active &&
                u.status !== 'banned'
        ).length,
        banned: allUsers.filter(
            (u) => u.status === 'banned'
        ).length,
        inactive: allUsers.filter(
            (u) =>
                !u.active &&
                u.status !== 'banned'
        ).length,
    };

    return (
        <div>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container">
                    <a
                        className="navbar-brand d-flex align-items-center gap-2"
                        href="#!"
                    >
                        <span>👥</span>

                        <span>User Management</span>

                        <span className="badge api-badge font-mono ms-1">
                            localhost:8080/api
                        </span>
                    </a>

                    <div className="d-flex align-items-center gap-2 ms-auto">
                        <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={loadUsers}
                        >
                            <i className="bi bi-arrow-clockwise" />

                            <span className="d-none d-sm-inline ms-1">
                                Refresh
                            </span>
                        </button>

                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() =>
                                addModalInst.current.show()
                            }
                        >
                            <i className="bi bi-plus-lg me-1" />

                            <span className="d-none d-sm-inline">
                                Tambah Pengguna
                            </span>

                            <span className="d-sm-none">
                                Tambah
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="section-hero py-4">
                <div className="container">
                    <div className="row align-items-center g-3">
                        <div className="col-12 col-md-6 col-lg-5">
                            <h1 className="fs-5 fw-semibold mb-1">
                                Kelola Pengguna
                            </h1>

                            <p className="text-app-sub mb-0 small-text">
                                Lihat, edit, dan atur hak akses
                                seluruh pengguna sistem.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 ms-lg-auto">
                            <div className="input-group">
                                <span className="input-group-text search-icon">
                                    <i className="bi bi-search text-app-muted" />
                                </span>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cari username..."
                                    value={search}
                                    onChange={(e) =>
                                        setSearch(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mt-2">
                        <StatCard
                            color="text-app-blue"
                            value={stats.total}
                            label="Total Pengguna"
                        />

                        <StatCard
                            color="text-app-green"
                            value={stats.active}
                            label="Aktif"
                        />

                        <StatCard
                            color="text-app-red"
                            value={stats.banned}
                            label="Dibanned"
                        />

                        <StatCard
                            color="text-app-amber"
                            value={stats.inactive}
                            label="Nonaktif"
                        />
                    </div>
                </div>
            </section>

            {/* USERS */}
            <section className="section-users py-4">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <h2 className="fs-6 fw-semibold mb-0">
                            Daftar Pengguna
                        </h2>

                        <span className="badge user-count-badge font-mono">
                            {filteredUsers.length} pengguna
                        </span>
                    </div>

                    {loading ? (
                        <div className="text-center py-5 text-app-muted">
                            <div
                                className="spinner-border mb-3"
                                style={{
                                    color: 'var(--app-blue)',
                                    width: '2rem',
                                    height: '2rem',
                                }}
                            />

                            <div className="small-text">
                                Memuat pengguna...
                            </div>
                        </div>
                    ) : !filteredUsers.length ? (
                        <div className="text-center py-5 text-app-muted">
                            <i className="bi bi-person-x fs-1 d-block mb-3 opacity-25" />

                            <div className="small-text">
                                Tidak ada pengguna ditemukan.
                            </div>
                        </div>
                    ) : (
                        <div className="row g-3">
                            {filteredUsers.map((u) => (
                                <div
                                    key={u.id}
                                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                                >
                                    <div
                                        className={`card user-card border rounded-3 p-3 h-100 ${
                                            selectedUser?.id ===
                                            u.id
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            selectUser(u.id)
                                        }
                                    >
                                        <div className="d-flex align-items-center gap-3 mb-2">
                                            <div
                                                className={`rounded-circle d-flex align-items-center justify-content-center font-mono fw-bold flex-shrink-0 ${colorFor(
                                                    u.id
                                                )}`}
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    fontSize: 13,
                                                }}
                                            >
                                                {initials(
                                                    u.username
                                                )}
                                            </div>

                                            <div className="overflow-hidden flex-fill">
                                                <div className="fw-medium text-truncate">
                                                    {
                                                        u.username
                                                    }
                                                </div>

                                                <div className="font-mono text-app-muted user-email">
                                                    {u.email ||
                                                        '—'}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top border-app">
                                            {statusBadge(u)}

                                            <span className="font-mono text-app-muted user-id">
                                                #{u.id}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* DETAIL */}
            {selectedUser && (
                <section
                    className="section-detail py-4"
                    id="detailSection"
                >
                    <div className="container">
                        <div className="row align-items-center g-3 mb-4">
                            <div className="col-auto">
                                <div
                                    className={`rounded-circle d-flex align-items-center justify-content-center font-mono fw-bold ${colorFor(
                                        selectedUser.id
                                    )}`}
                                    style={{
                                        width: 52,
                                        height: 52,
                                        fontSize: 16,
                                    }}
                                >
                                    {initials(
                                        selectedUser.username
                                    )}
                                </div>
                            </div>

                            <div className="col">
                                <h2 className="fs-5 fw-semibold mb-0">
                                    {
                                        selectedUser.username
                                    }
                                </h2>

                                <div className="font-mono text-app-muted detail-sub">
                                    ID: {selectedUser.id} ·{' '}
                                    {selectedUser.email ||
                                        '—'}
                                </div>
                            </div>

                            <div className="col-auto d-flex align-items-center gap-2">
                                {statusBadge(
                                    selectedUser,
                                    '12px'
                                )}
                            </div>
                        </div>

                        {/* Tabs */}
                        <ul className="nav nav-tabs mb-4">
                            {[
                                {
                                    key: 'info',
                                    icon: 'info-circle',
                                    label: 'Informasi',
                                },
                                {
                                    key: 'ban',
                                    icon: 'slash-circle',
                                    label: 'Ban',
                                },
                                {
                                    key: 'roles',
                                    icon: 'shield-check',
                                    label: 'Roles',
                                },
                                {
                                    key: 'perms',
                                    icon: 'key',
                                    label: 'Permissions',
                                },
                                {
                                    key: 'activation',
                                    icon: 'lightning-charge',
                                    label: 'Aktivasi',
                                },
                            ].map((tab) => (
                                <li
                                    className="nav-item"
                                    key={tab.key}
                                >
                                    <button
                                        className={`nav-link ${
                                            activeTab ===
                                            tab.key
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            setActiveTab(
                                                tab.key
                                            )
                                        }
                                    >
                                        <i
                                            className={`bi bi-${tab.icon} me-1`}
                                        />
                                        {tab.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* TAB CONTENT */}
                        {activeTab === 'info' && (
                            <div className="row g-4">
                                <div className="col-12 col-lg-7">
                                    <div className="card border h-100">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center gap-2 mb-4">
                                                <span className="card-section-title">
                                                    Edit
                                                    Informasi
                                                    Pengguna
                                                </span>

                                                {apiMethodBadge(
                                                    'PATCH'
                                                )}
                                            </div>

                                            <div className="row g-3">
                                                <div className="col-12 col-sm-6">
                                                    <label className="form-label">
                                                        USERNAME
                                                    </label>

                                                    <input
                                                        className="form-control"
                                                        value={
                                                            editForm.username
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setEditForm(
                                                                (
                                                                    prev
                                                                ) => ({
                                                                    ...prev,
                                                                    username:
                                                                        e
                                                                            .target
                                                                            .value,
                                                                })
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className="col-12 col-sm-6">
                                                    <label className="form-label">
                                                        EMAIL
                                                    </label>

                                                    <input
                                                        className="form-control"
                                                        value={
                                                            editForm.email
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setEditForm(
                                                                (
                                                                    prev
                                                                ) => ({
                                                                    ...prev,
                                                                    email:
                                                                        e
                                                                            .target
                                                                            .value,
                                                                })
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className="col-12">
                                                    <label className="form-label">
                                                        PASSWORD
                                                        BARU
                                                    </label>

                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        value={
                                                            editForm.password
                                                        }
                                                        onChange={(
                                                            e
                                                        ) =>
                                                            setEditForm(
                                                                (
                                                                    prev
                                                                ) => ({
                                                                    ...prev,
                                                                    password:
                                                                        e
                                                                            .target
                                                                            .value,
                                                                })
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end pt-3 mt-3 border-top border-app">
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={
                                                        saveInfo
                                                    }
                                                >
                                                    <i className="bi bi-floppy me-1" />
                                                    Simpan
                                                    Perubahan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-5">
                                    <div className="card border h-100">
                                        <div className="card-body">
                                            <div className="card-section-title mb-4">
                                                Informasi
                                                Sistem
                                            </div>

                                            <div className="row g-2">
                                                <InfoBox
                                                    label="Dibuat"
                                                    value={fmt(
                                                        selectedUser.created_at
                                                    )}
                                                />

                                                <InfoBox
                                                    label="Diperbarui"
                                                    value={fmt(
                                                        selectedUser.updated_at
                                                    )}
                                                />

                                                <InfoBox
                                                    label="Status"
                                                    value={statusBadge(
                                                        selectedUser
                                                    )}
                                                />

                                                <InfoBox
                                                    label="Last Active"
                                                    value={
                                                        selectedUser.last_active
                                                            ? fmt(
                                                                  selectedUser.last_active
                                                              )
                                                            : '—'
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BAN */}
                        {activeTab === 'ban' && (
                            <div className="row g-4">
                                <div className="col-12 col-lg-6">
                                    <div
                                        className={`p-4 mb-3 d-flex align-items-start gap-3 ${
                                            selectedUser.status ===
                                            'banned'
                                                ? 'ban-box-on'
                                                : 'ban-box-off'
                                        }`}
                                    >
                                        <div className="fs-4 flex-shrink-0">
                                            {selectedUser.status ===
                                            'banned'
                                                ? '🚫'
                                                : '✅'}
                                        </div>

                                        <div>
                                            <div className="fw-semibold mb-1">
                                                {selectedUser.status ===
                                                'banned'
                                                    ? 'Pengguna ini sedang dibanned'
                                                    : 'Pengguna tidak dibanned'}
                                            </div>

                                            {selectedUser.status_message && (
                                                <div className="reason-box p-2 mt-2">
                                                    Alasan:{' '}
                                                    {
                                                        selectedUser.status_message
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {selectedUser.status ===
                                    'banned' ? (
                                        <button
                                            className="btn btn-success btn-sm"
                                            onClick={
                                                doUnban
                                            }
                                        >
                                            <i className="bi bi-unlock me-1" />
                                            Unban
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                banModalInst.current.show()
                                            }
                                        >
                                            <i className="bi bi-slash-circle me-1" />
                                            Ban
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ROLES */}
                        {activeTab === 'roles' && (
                            <div className="row g-4">
                                <div className="col-12 col-lg-7">
                                    <div className="card border">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap gap-2 mb-4">
                                                {(selectedUser.groups ||
                                                    []).map(
                                                    (
                                                        g
                                                    ) => (
                                                        <span
                                                            key={
                                                                g
                                                            }
                                                            className="badge tag-role rounded-pill py-2 px-3 d-flex align-items-center gap-1"
                                                        >
                                                            {
                                                                g
                                                            }

                                                            <button
                                                                type="button"
                                                                className="btn-close btn-close-white ms-1"
                                                                style={{
                                                                    fontSize:
                                                                        '.45em',
                                                                }}
                                                                onClick={() =>
                                                                    removeRole(
                                                                        g
                                                                    )
                                                                }
                                                            />
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <div className="row g-2">
                                                <div className="col">
                                                    <select
                                                        className="form-select form-select-sm"
                                                        id="role-add-select"
                                                    >
                                                        <option value="">
                                                            Pilih
                                                            role...
                                                        </option>

                                                        {avGroups
                                                            .filter(
                                                                (
                                                                    g
                                                                ) =>
                                                                    !selectedUser.groups?.includes(
                                                                        g
                                                                    )
                                                            )
                                                            .map(
                                                                (
                                                                    g
                                                                ) => (
                                                                    <option
                                                                        key={
                                                                            g
                                                                        }
                                                                        value={
                                                                            g
                                                                        }
                                                                    >
                                                                        {
                                                                            g
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                    </select>
                                                </div>

                                                <div className="col-auto d-flex gap-2">
                                                    <button
                                                        className="btn btn-primary btn-sm"
                                                        onClick={
                                                            addRole
                                                        }
                                                    >
                                                        Tambah
                                                    </button>

                                                    <button
                                                        className="btn btn-secondary btn-sm"
                                                        onClick={
                                                            syncRoles
                                                        }
                                                    >
                                                        Sync
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* PERMS */}
                        {activeTab === 'perms' && (
                            <div className="row g-4">
                                <div className="col-12 col-lg-7">
                                    <div className="card border">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap gap-2 mb-4">
                                                {(selectedUser.permissions ||
                                                    []).map(
                                                    (
                                                        p
                                                    ) => (
                                                        <span
                                                            key={
                                                                p
                                                            }
                                                            className="badge tag-perm rounded-pill py-2 px-3 d-flex align-items-center gap-1"
                                                        >
                                                            {
                                                                p
                                                            }

                                                            <button
                                                                type="button"
                                                                className="btn-close btn-close-white ms-1"
                                                                style={{
                                                                    fontSize:
                                                                        '.45em',
                                                                }}
                                                                onClick={() =>
                                                                    removePerm(
                                                                        p
                                                                    )
                                                                }
                                                            />
                                                        </span>
                                                    )
                                                )}
                                            </div>

                                            <div className="row g-2">
                                                <div className="col">
                                                    <select
                                                        className="form-select form-select-sm"
                                                        id="perm-add-select"
                                                    >
                                                        <option value="">
                                                            Pilih
                                                            permission...
                                                        </option>

                                                        {avPerms
                                                            .filter(
                                                                (
                                                                    p
                                                                ) =>
                                                                    !selectedUser.permissions?.includes(
                                                                        p
                                                                    )
                                                            )
                                                            .map(
                                                                (
                                                                    p
                                                                ) => (
                                                                    <option
                                                                        key={
                                                                            p
                                                                        }
                                                                        value={
                                                                            p
                                                                        }
                                                                    >
                                                                        {
                                                                            p
                                                                        }
                                                                    </option>
                                                                )
                                                            )}
                                                    </select>
                                                </div>

                                                <div className="col-auto d-flex gap-2">
                                                    <button
                                                        className="btn btn-primary btn-sm"
                                                        onClick={
                                                            addPerm
                                                        }
                                                    >
                                                        Tambah
                                                    </button>

                                                    <button
                                                        className="btn btn-secondary btn-sm"
                                                        onClick={
                                                            syncPerms
                                                        }
                                                    >
                                                        Sync
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ACTIVATION */}
                        {activeTab === 'activation' && (
                            <div className="row g-4">
                                <div className="col-12 col-lg-6">
                                    <div className="card border">
                                        <div className="card-body">
                                            <div className="toggle-row d-flex align-items-center justify-content-between p-3 mb-4">
                                                <div>
                                                    <div className="fw-medium">
                                                        Status
                                                        Akun
                                                    </div>

                                                    <div className="text-app-sub small-text mt-1">
                                                        {selectedUser.active
                                                            ? 'Akun aktif'
                                                            : 'Akun nonaktif'}
                                                    </div>
                                                </div>

                                                <span className="fs-4">
                                                    {selectedUser.active
                                                        ? '🟢'
                                                        : '🔴'}
                                                </span>
                                            </div>

                                            {selectedUser.active ? (
                                                <button
                                                    className="btn btn-warning btn-sm"
                                                    onClick={
                                                        doDeactivate
                                                    }
                                                >
                                                    Nonaktifkan
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-success btn-sm"
                                                    onClick={
                                                        doActivate
                                                    }
                                                >
                                                    Aktifkan
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* ADD MODAL */}
            <div
                className="modal fade"
                ref={addModalRef}
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-1">
                            <div>
                                <h5 className="modal-title fw-semibold">
                                    Tambah Pengguna Baru
                                </h5>

                                <div className="font-mono text-app-muted modal-endpoint">
                                    POST /api/users/
                                </div>
                            </div>

                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                            />
                        </div>

                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label className="form-label">
                                        USERNAME
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={
                                            addForm.username
                                        }
                                        onChange={(e) =>
                                            setAddForm(
                                                (
                                                    prev
                                                ) => ({
                                                    ...prev,
                                                    username:
                                                        e
                                                            .target
                                                            .value,
                                                })
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">
                                        EMAIL
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={
                                            addForm.email
                                        }
                                        onChange={(e) =>
                                            setAddForm(
                                                (
                                                    prev
                                                ) => ({
                                                    ...prev,
                                                    email:
                                                        e
                                                            .target
                                                            .value,
                                                })
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label">
                                        PASSWORD
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        value={
                                            addForm.password
                                        }
                                        onChange={(e) =>
                                            setAddForm(
                                                (
                                                    prev
                                                ) => ({
                                                    ...prev,
                                                    password:
                                                        e
                                                            .target
                                                            .value,
                                                })
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer border-0 pt-0">
                            <button
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Batal
                            </button>

                            <button
                                className="btn btn-primary"
                                onClick={submitAdd}
                            >
                                <i className="bi bi-person-plus me-1" />
                                Buat Akun
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* BAN MODAL */}
            <div
                className="modal fade"
                ref={banModalRef}
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0 pb-1">
                            <div>
                                <h5 className="modal-title fw-semibold text-danger">
                                    🚫 Ban Pengguna
                                </h5>
                            </div>

                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                            />
                        </div>

                        <div className="modal-body">
                            <label className="form-label">
                                ALASAN BAN
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                value={banReason}
                                onChange={(e) =>
                                    setBanReason(
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="modal-footer border-0 pt-0">
                            <button
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Batal
                            </button>

                            <button
                                className="btn btn-danger"
                                onClick={confirmBan}
                            >
                                Ban Pengguna
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* TOAST */}
            <div
                className="toast-container position-fixed bottom-0 end-0 p-3"
                id="toastContainer"
                style={{ zIndex: 9999 }}
            />
        </div>
    );
}

function StatCard({ color, value, label }) {
    return (
        <div className="col-6 col-sm-3">
            <div className="card stat-card border p-3 text-center">
                <div className={`stat-num ${color}`}>
                    {value}
                </div>

                <div className="text-app-muted mt-1 stat-label">
                    {label}
                </div>
            </div>
        </div>
    );
}

function InfoBox({ label, value }) {
    return (
        <div className="col-6">
            <div className="info-cell p-3">
                <div className="info-cell-label mb-1">
                    {label}
                </div>

                <div className="fw-medium info-value">
                    {value}
                </div>
            </div>
        </div>
    );
}
