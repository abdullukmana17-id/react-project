<!DOCTYPE html>
<html lang="id" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css">
    <style>
        /* ── Color Variables Only ── */
        /* =========================================================
        LIGHT THEME (DEFAULT)
        ========================================================= */
        :root,
        [data-bs-theme="light"] {
            --app-bg:          #f4f7fb;
            --app-bg2:         #ffffff;
            --app-bg3:         #eef2f7;
            --app-bg4:         #e2e8f0;

            --app-border:      #d7deea;
            --app-border2:     #b9c3d6;

            --app-text:        #111827;
            --app-text2:       #4b5563;
            --app-text3:       #94a3b8;

            --app-blue:        #2563eb;
            --app-blue-dim:    #dbeafe;
            --app-blue-txt:    #1d4ed8;

            --app-green:       #16a34a;
            --app-green-dim:   #dcfce7;
            --app-green-txt:   #15803d;

            --app-red:         #dc2626;
            --app-red-dim:     #fee2e2;
            --app-red-txt:     #b91c1c;

            --app-amber:       #d97706;
            --app-amber-dim:   #fef3c7;
            --app-amber-txt:   #b45309;

            --app-purple:      #7c3aed;
            --app-purple-dim:  #ede9fe;
            --app-purple-txt:  #6d28d9;

            --app-teal:        #0f766e;
            --app-teal-dim:    #ccfbf1;
            --app-teal-txt:    #0f766e;

            --bs-body-bg:              var(--app-bg);
            --bs-body-color:           var(--app-text);
            --bs-border-color:         var(--app-border);

            --bs-secondary-bg:         var(--app-bg2);
            --bs-tertiary-bg:          var(--app-bg3);

            --bs-card-bg:              var(--app-bg2);
            --bs-card-border-color:    var(--app-border);

            --bs-modal-bg:             var(--app-bg2);
            --bs-modal-border-color:   var(--app-border2);

            --bs-input-bg:             var(--app-bg3);
            --bs-input-border-color:   var(--app-border);
            --bs-input-color:          var(--app-text);

            --bs-nav-link-color:       var(--app-text2);
            --bs-nav-link-hover-color: var(--app-text);
        }

        /* =========================================================
        DARK THEME
        ========================================================= */
        [data-bs-theme="dark"] {
            --app-bg:          #0f1117;
            --app-bg2:         #181c25;
            --app-bg3:         #1f2330;
            --app-bg4:         #252a38;

            --app-border:      #2c3347;
            --app-border2:     #3a4260;

            --app-text:        #e2e8f8;
            --app-text2:       #8b92a9;
            --app-text3:       #555e78;

            --app-blue:        #3b82f6;
            --app-blue-dim:    #1e3a5f;
            --app-blue-txt:    #93c5fd;

            --app-green:       #22c55e;
            --app-green-dim:   #14532d;
            --app-green-txt:   #86efac;

            --app-red:         #ef4444;
            --app-red-dim:     #450a0a;
            --app-red-txt:     #fca5a5;

            --app-amber:       #f59e0b;
            --app-amber-dim:   #451a03;
            --app-amber-txt:   #fcd34d;

            --app-purple:      #8b5cf6;
            --app-purple-dim:  #2e1065;
            --app-purple-txt:  #c4b5fd;

            --app-teal:        #14b8a6;
            --app-teal-dim:    #042f2e;
            --app-teal-txt:    #5eead4;

            --bs-body-bg:              var(--app-bg);
            --bs-body-color:           var(--app-text);
            --bs-border-color:         var(--app-border);

            --bs-secondary-bg:         var(--app-bg2);
            --bs-tertiary-bg:          var(--app-bg3);

            --bs-card-bg:              var(--app-bg2);
            --bs-card-border-color:    var(--app-border);

            --bs-modal-bg:             var(--app-bg2);
            --bs-modal-border-color:   var(--app-border2);

            --bs-input-bg:             var(--app-bg3);
            --bs-input-border-color:   var(--app-border);
            --bs-input-color:          var(--app-text);

            --bs-nav-link-color:       var(--app-text2);
            --bs-nav-link-hover-color: var(--app-text);
        }

        /* =========================================================
        GLOBAL
        ========================================================= */
        body {
            font-family: 'IBM Plex Sans', sans-serif;
            background: var(--app-bg);
            color: var(--app-text);
        }

        .font-mono {
            font-family: 'IBM Plex Mono', monospace !important;
        }

        /* =========================================================
        NAVBAR
        ========================================================= */
        .navbar {
            background: var(--app-bg2);
            border-bottom: 1px solid var(--app-border);
        }

        .navbar-brand {
            font-weight: 600;
            color: var(--app-text) !important;
        }

        /* =========================================================
        SECTION BACKGROUNDS
        ========================================================= */
        .section-hero {
            background: var(--app-bg2);
            border-bottom: 1px solid var(--app-border);
        }

        .section-users {
            background: var(--app-bg);
        }

        .section-detail {
            background: var(--app-bg3);
            border-top: 1px solid var(--app-border);
        }

        /* =========================================================
        STAT CARDS
        ========================================================= */
        .stat-card {
            background: var(--app-bg2);
            border: 1px solid var(--app-border);
        }

        .stat-num {
            font-size: 1.75rem;
            font-weight: 700;
            font-family: 'IBM Plex Mono', monospace;
        }

        /* =========================================================
        USER CARDS
        ========================================================= */
        .user-card {
            background: var(--app-bg2);
            border: 1px solid var(--app-border);
            cursor: pointer;
            transition:
                border-color .15s,
                background .15s,
                transform .1s;
        }

        .user-card:hover {
            border-color: var(--app-border2);
            background: var(--app-bg3);
            transform: translateY(-1px);
        }

        .user-card.active {
            border-color: var(--app-blue);
            background: var(--app-blue-dim);
        }

        /* =========================================================
        AVATARS
        ========================================================= */
        .av-0 { background: var(--app-blue-dim);   color: var(--app-blue-txt); }
        .av-1 { background: var(--app-teal-dim);   color: var(--app-teal-txt); }
        .av-2 { background: var(--app-purple-dim); color: var(--app-purple-txt); }
        .av-3 { background: var(--app-amber-dim);  color: var(--app-amber-txt); }
        .av-4 { background: var(--app-green-dim);  color: var(--app-green-txt); }

        /* =========================================================
        NAV TABS
        ========================================================= */
        .nav-tabs {
            border-bottom: 1px solid var(--app-border);
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: none;
        }

        .nav-tabs::-webkit-scrollbar {
            display: none;
        }

        .nav-tabs .nav-link {
            color: var(--app-text2);
            border: none;
            border-bottom: 2px solid transparent;
            border-radius: 0;
            white-space: nowrap;
            font-size: 13px;
        }

        .nav-tabs .nav-link:hover {
            color: var(--app-text);
            background: transparent;
            border-bottom-color: var(--app-border2);
        }

        .nav-tabs .nav-link.active {
            color: var(--app-blue-txt);
            background: transparent;
            border-bottom-color: var(--app-blue);
        }

        /* =========================================================
        FORMS
        ========================================================= */
        .form-control,
        .form-select {
            background: var(--app-bg3) !important;
            border-color: var(--app-border) !important;
            color: var(--app-text) !important;
        }

        .form-control::placeholder {
            color: var(--app-text3) !important;
        }

        .form-control:focus,
        .form-select:focus {
            border-color: var(--app-blue) !important;
            box-shadow: 0 0 0 3px rgba(59,130,246,.15) !important;
        }

        .form-select option {
            background: var(--app-bg3);
        }

        .form-label {
            font-size: 11px;
            font-weight: 600;
            color: var(--app-text3);
            text-transform: uppercase;
            letter-spacing: .05em;
        }

        /* =========================================================
        CARD
        ========================================================= */
        .card {
            background: var(--app-bg2);
            border-color: var(--app-border);
        }

        .card-section-title {
            font-size: 11px;
            font-weight: 600;
            color: var(--app-text3);
            text-transform: uppercase;
            letter-spacing: .08em;
        }

        /* =========================================================
        INFO CELLS
        ========================================================= */
        .info-cell {
            background: var(--app-bg3);
            border: 1px solid var(--app-border);
            border-radius: .5rem;
        }

        .info-cell-label {
            font-size: 10px;
            color: var(--app-text3);
            text-transform: uppercase;
            letter-spacing: .06em;
        }

        /* =========================================================
        TAGS
        ========================================================= */
        .tag-role {
            background: var(--app-teal-dim);
            color: var(--app-teal-txt);
            border: 1px solid var(--app-teal);
            font-size: 12px;
        }

        .tag-perm {
            background: var(--app-purple-dim);
            color: var(--app-purple-txt);
            border: 1px solid var(--app-purple);
            font-size: 12px;
        }

        /* =========================================================
        BAN BOX
        ========================================================= */
        .ban-box-on {
            background: var(--app-red-dim);
            border: 1px solid var(--app-red);
            border-radius: .5rem;
        }

        .ban-box-off {
            background: var(--app-green-dim);
            border: 1px solid var(--app-green);
            border-radius: .5rem;
        }

        .reason-box {
            background: var(--app-bg3);
            border: 1px solid var(--app-border);
            font-family: 'IBM Plex Mono', monospace;
            font-size: 12px;
            color: var(--app-amber-txt);
            border-radius: .375rem;
        }

        /* =========================================================
        TOGGLE ROW
        ========================================================= */
        .toggle-row {
            background: var(--app-bg3);
            border: 1px solid var(--app-border);
            border-radius: .5rem;
        }

        /* =========================================================
        API METHOD BADGES
        ========================================================= */
        .badge-get,
        .badge-post,
        .badge-patch,
        .badge-delete,
        .badge-put {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 10px;
        }

        .badge-get {
            background: #172554;
            color: #93c5fd;
            border: 1px solid #1e40af;
        }

        .badge-post {
            background: #14532d;
            color: #86efac;
            border: 1px solid #15803d;
        }

        .badge-patch {
            background: #451a03;
            color: #fcd34d;
            border: 1px solid #92400e;
        }

        .badge-delete {
            background: #450a0a;
            color: #fca5a5;
            border: 1px solid #991b1b;
        }

        .badge-put {
            background: #2e1065;
            color: #c4b5fd;
            border: 1px solid #5b21b6;
        }

        /* =========================================================
        TEXT HELPERS
        ========================================================= */
        .text-app-blue   { color: var(--app-blue-txt) !important; }
        .text-app-teal   { color: var(--app-teal-txt) !important; }
        .text-app-purple { color: var(--app-purple-txt) !important; }
        .text-app-green  { color: var(--app-green-txt) !important; }
        .text-app-red    { color: var(--app-red-txt) !important; }
        .text-app-amber  { color: var(--app-amber-txt) !important; }
        .text-app-muted  { color: var(--app-text3) !important; }
        .text-app-sub    { color: var(--app-text2) !important; }

        /* =========================================================
        SCROLLBAR
        ========================================================= */
        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--app-border2);
            border-radius: 4px;
        }
    </style>
</head>
<body data-bs-theme="light">

<!-- ══════════════════════════════
     NAVBAR
══════════════════════════════ -->
<nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
            <span>👥</span>
            <span>User Management</span>
            <span class="badge font-mono ms-1" style="background:var(--app-bg3);color:var(--app-text3);border:1px solid var(--app-border);font-size:10px">localhost:8080/api</span>
        </a>
        <div class="d-flex align-items-center gap-2 ms-auto">
            <button class="btn btn-sm btn-outline-secondary" onclick="loadUsers()" title="Refresh data">
                <i class="bi bi-arrow-clockwise"></i>
                <span class="d-none d-sm-inline ms-1">Refresh</span>
            </button>
            <button class="btn btn-sm btn-primary" onclick="openAddModal()">
                <i class="bi bi-plus-lg me-1"></i>
                <span class="d-none d-sm-inline">Tambah Pengguna</span>
                <span class="d-sm-none">Tambah</span>
            </button>
        </div>
    </div>
</nav>

<!-- ══════════════════════════════
     SECTION: HERO / SEARCH
══════════════════════════════ -->
<section class="section-hero py-4">
    <div class="container">
        <div class="row align-items-center g-3">
            <div class="col-12 col-md-6 col-lg-5">
                <h1 class="fs-5 fw-semibold mb-1">Kelola Pengguna</h1>
                <p class="text-app-sub mb-0" style="font-size:13px">Lihat, edit, dan atur hak akses seluruh pengguna sistem.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-4 ms-lg-auto">
                <div class="input-group">
                    <span class="input-group-text" style="background:var(--app-bg3);border-color:var(--app-border)">
                        <i class="bi bi-search text-app-muted"></i>
                    </span>
                    <input type="text" class="form-control" id="searchInput" placeholder="Cari username..." oninput="filterUsers()">
                </div>
            </div>
        </div>

            <!-- Stats row -->
        <div class="row g-3 mt-2" id="globalStats">
            <div class="col-6 col-sm-3">
                <div class="card stat-card border p-3 text-center">
                    <div class="stat-num text-app-blue" id="st-total">—</div>
                    <div class="text-app-muted mt-1" style="font-size:11px">Total Pengguna</div>
                </div>
            </div>
            <div class="col-6 col-sm-3">
                <div class="card stat-card border p-3 text-center">
                    <div class="stat-num text-app-green" id="st-active">—</div>
                    <div class="text-app-muted mt-1" style="font-size:11px">Aktif</div>
                </div>
            </div>
            <div class="col-6 col-sm-3">
                <div class="card stat-card border p-3 text-center">
                    <div class="stat-num text-app-red" id="st-banned">—</div>
                    <div class="text-app-muted mt-1" style="font-size:11px">Dibanned</div>
                </div>
            </div>
            <div class="col-6 col-sm-3">
                <div class="card stat-card border p-3 text-center">
                    <div class="stat-num text-app-amber" id="st-inactive">—</div>
                    <div class="text-app-muted mt-1" style="font-size:11px">Nonaktif</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ══════════════════════════════
     SECTION: USER LIST
══════════════════════════════ -->
<section class="section-users py-4">
    <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-3">
            <h2 class="fs-6 fw-semibold mb-0">Daftar Pengguna</h2>
            <span class="badge font-mono" style="background:var(--app-bg3);color:var(--app-text2);border:1px solid var(--app-border)" id="userCountBadge">—</span>
        </div>

        <div id="userListSection">
            <div class="text-center py-5 text-app-muted">
                <div class="spinner-border mb-3" style="color:var(--app-blue);width:2rem;height:2rem"></div>
                <div style="font-size:13px">Memuat pengguna...</div>
            </div>
        </div>
    </div>
</section>

<!-- ══════════════════════════════
     SECTION: USER DETAIL
══════════════════════════════ -->
<section class="section-detail py-4" id="detailSection" style="display:none">
    <div class="container">

        <!-- Detail header -->
        <div class="row align-items-center g-3 mb-4">
            <div class="col-auto">
                <div class="rounded-circle d-flex align-items-center justify-content-center font-mono fw-bold" id="detailAvatar"
                        style="width:52px;height:52px;font-size:16px;background:var(--app-blue-dim);color:var(--app-blue-txt)">??</div>
                </div>
            <div class="col">
                <h2 class="fs-5 fw-semibold mb-0" id="detailName">—</h2>
                <div class="font-mono text-app-muted" style="font-size:11px" id="detailSub">—</div>
            </div>
            <div class="col-auto d-flex align-items-center gap-2" id="detailBadge"></div>
        </div>

        <!-- Detail stats -->
        <div class="row g-2 mb-4" id="detailStats"></div>

        <!-- Tabs -->
        <ul class="nav nav-tabs mb-4" id="detailTabs">
            <li class="nav-item"><button class="nav-link active" onclick="setTab('info')"><i class="bi bi-info-circle me-1"></i>Informasi</button></li>
            <li class="nav-item"><button class="nav-link" onclick="setTab('ban')"><i class="bi bi-slash-circle me-1"></i>Ban</button></li>
            <li class="nav-item"><button class="nav-link" onclick="setTab('roles')"><i class="bi bi-shield-check me-1"></i>Roles</button></li>
            <li class="nav-item"><button class="nav-link" onclick="setTab('perms')"><i class="bi bi-key me-1"></i>Permissions</button></li>
            <li class="nav-item"><button class="nav-link" onclick="setTab('activation')"><i class="bi bi-lightning-charge me-1"></i>Aktivasi</button></li>
        </ul>

        <!-- Tab content -->
        <div id="tabContent"></div>

    </div>
</section>

<!-- ══════════════════════════════
     MODAL: TAMBAH PENGGUNA
══════════════════════════════ -->
<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0 pb-1">
                <div>
                    <h5 class="modal-title fw-semibold" id="addModalLabel">Tambah Pengguna Baru</h5>
                    <div class="font-mono text-app-muted" style="font-size:11px">POST /api/users/</div>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="row g-3">
                    <div class="col-12">
                        <label class="form-label">USERNAME</label>
                        <input type="text" class="form-control" id="m-username" placeholder="johndoe">
                    </div>
                    <div class="col-12">
                        <label class="form-label">EMAIL</label>
                        <input type="email" class="form-control" id="m-email" placeholder="user@example.com">
                    </div>
                    <div class="col-12">
                        <label class="form-label">PASSWORD</label>
                        <input type="password" class="form-control" id="m-password" placeholder="••••••••">
                    </div>
                </div>
            </div>
            <div class="modal-footer border-0 pt-0">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button class="btn btn-primary" id="addBtn" onclick="submitAdd()">
                    <i class="bi bi-person-plus me-1"></i>Buat Akun
                </button>
            </div>
        </div>
    </div>
</div>

<!-- ══════════════════════════════
     MODAL: BAN PENGGUNA
══════════════════════════════ -->
<div class="modal fade" id="banModal" tabindex="-1" aria-labelledby="banModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0 pb-1">
                <div>
                    <h5 class="modal-title fw-semibold text-danger">🚫 Ban Pengguna</h5>
                    <div class="font-mono text-app-muted" style="font-size:11px">POST /api/users/{id}/ban</div>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="alert mb-3" style="background:var(--app-red-dim);border:1px solid #7f1d1d;color:var(--app-red-txt);font-size:13px">
                    <i class="bi bi-exclamation-triangle me-2"></i>
                    Tindakan ini akan memblokir akses pengguna ke seluruh sistem.
                </div>
                <label class="form-label">ALASAN BAN</label>
                <input type="text" class="form-control" id="ban-reason-input" placeholder="Masukkan alasan...">
            </div>
            <div class="modal-footer border-0 pt-0">
                <button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button class="btn btn-danger" id="banConfirmBtn" onclick="confirmBan()">
                    <i class="bi bi-slash-circle me-1"></i>Ban Pengguna
                </button>
            </div>
        </div>
    </div>
</div>

<!-- Toast container -->
<div class="toast-container position-fixed bottom-0 end-0 p-3" id="toastContainer" style="z-index:9999"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js"></script>
<script>
/* ── CONFIG ── */
const API_BASE = 'http://localhost:8080/api';
const HEADERS  = { 'Content-Type': 'application/json', 'Accept': 'application/json' };

/* ── STATE ── */
let allUsers      = [];
let filteredUsers = [];
let selectedUser  = null;
let activeTab     = 'info';
let avGroups      = [];
let avPerms       = [];
let addModalInst, banModalInst;

/* ── UTILS ── */
const $ = id => document.getElementById(id);
const colors = ['av-0','av-1','av-2','av-3','av-4'];
const colorFor = id => colors[id % colors.length];
const initials = name => name.slice(0,2).toUpperCase();

function statusBadge(u, size = '') {
    const s = size ? `font-size:${size}` : 'font-size:10px';
    if (u.status === 'banned')
        return `<span class="badge rounded-pill" style="background:var(--app-red-dim);color:var(--app-red-txt);border:1px solid #7f1d1d;${s}"><i class="bi bi-slash-circle me-1"></i>Banned</span>`;
    if (!u.active)
        return `<span class="badge rounded-pill bg-secondary" style="${s}"><i class="bi bi-pause-circle me-1"></i>Nonaktif</span>`;
    return `<span class="badge rounded-pill" style="background:var(--app-green-dim);color:var(--app-green-txt);border:1px solid #14532d;${s}"><i class="bi bi-check-circle me-1"></i>Aktif</span>`;
}

function apiMethodBadge(method) {
    return `<span class="badge badge-${method.toLowerCase()} me-1">${method}</span>`;
}

function fmt(dt) {
    if (!dt) return '—';
    return typeof dt === 'object' ? (dt.date?.split(' ')[0] || '—') : dt.split(' ')[0];
}

/* ── TOAST ── */
function toast(msg, type = 'ok') {
    const map = {
        ok:  { bg:'var(--app-green-dim)', border:'#15803d', color:'var(--app-green-txt)', icon:'check-circle-fill' },
        err: { bg:'var(--app-red-dim)',   border:'#b91c1c', color:'var(--app-red-txt)',   icon:'x-circle-fill' },
        inf: { bg:'var(--app-blue-dim)',  border:'#1d4ed8', color:'var(--app-blue-txt)',  icon:'info-circle-fill' },
    };
    const c = map[type];
    const id = 'toast-' + Date.now();
    $('toastContainer').insertAdjacentHTML('beforeend', `
        <div id="${id}" class="toast align-items-center border-0 show"
            style="background:${c.bg};border:1px solid ${c.border}!important;color:${c.color};min-width:280px" role="alert">
        <div class="d-flex align-items-center gap-2 p-3" style="font-size:13px">
            <i class="bi bi-${c.icon}"></i>
            <span class="flex-fill">${msg}</span>
            <button type="button" class="btn-close btn-close-white btn-close-sm" data-bs-dismiss="toast"></button>
        </div>
        </div>`);
    const el = $(id);
    const t = new bootstrap.Toast(el, { delay: 3500 });
    t.show();
    el.addEventListener('hidden.bs.toast', () => el.remove());
}

/* ── API ── */
async function api(method, endpoint, body = null) {
    const opts = { method, headers: HEADERS };
    if (body) opts.body = JSON.stringify(body);
    try {
        const res  = await fetch(API_BASE + endpoint, opts);
        const data = await res.json();
        return { ok: res.ok, status: res.status, data };
    } catch {
        return { ok: false, status: 0, data: { messages: { error: 'Tidak dapat terhubung ke server.' } } };
    }
}

function errMsg(data) {
    if (!data) return 'Terjadi kesalahan.';
    if (data.messages) { const v = Object.values(data.messages); return v[0] || 'Terjadi kesalahan.'; }
    return data.message || 'Terjadi kesalahan.';
}

/* ── LOAD USERS ── */
async function loadUsers() {
    $('userListSection').innerHTML = `
        <div class="text-center py-5 text-app-muted">
        <div class="spinner-border mb-3" style="color:var(--app-blue);width:2rem;height:2rem"></div>
        <div style="font-size:13px">Memuat...</div>
        </div>`;
    const r = await api('GET', '/users?page=1&perPage=100');
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    allUsers = Object.values(r.data.data || {});

    const ar = await api('GET', '/authorization');
    if (ar.ok) {
        avGroups = (ar.data.groups       || []).map(g => g.name);
        avPerms  = (ar.data.permissions  || []).map(p => p.name);
    }

    updateGlobalStats();
    filterUsers();
}

function updateGlobalStats() {
    $('st-total').textContent   = allUsers.length;
    $('st-active').textContent  = allUsers.filter(u => u.active && u.status !== 'banned').length;
    $('st-banned').textContent  = allUsers.filter(u => u.status === 'banned').length;
    $('st-inactive').textContent = allUsers.filter(u => !u.active && u.status !== 'banned').length;
}

function filterUsers() {
    const q = ($('searchInput')?.value || '').toLowerCase();
    filteredUsers = q ? allUsers.filter(u => u.username.toLowerCase().includes(q)) : [...allUsers];
    $('userCountBadge').textContent = filteredUsers.length + ' pengguna';
    renderUserList();
}

/* ── USER LIST ── */
function renderUserList() {
    const container = $('userListSection');
    if (!filteredUsers.length) {
        container.innerHTML = `
        <div class="text-center py-5 text-app-muted">
            <i class="bi bi-person-x fs-1 d-block mb-3" style="opacity:.3"></i>
            <div style="font-size:13px">Tidak ada pengguna ditemukan.</div>
        </div>`;
        return;
    }

    container.innerHTML = `<div class="row g-3" id="userCardGrid">` +
        filteredUsers.map(u => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card user-card border rounded-3 p-3 h-100 ${selectedUser?.id === u.id ? 'active' : ''}"
                onclick="selectUser(${u.id})">
            <div class="d-flex align-items-center gap-3 mb-2">
                <div class="rounded-circle d-flex align-items-center justify-content-center font-mono fw-bold flex-shrink-0 ${colorFor(u.id)}"
                    style="width:40px;height:40px;font-size:13px">${initials(u.username)}</div>
                <div class="overflow-hidden flex-fill">
                <div class="fw-medium text-truncate">${u.username}</div>
                <div class="font-mono text-app-muted text-truncate" style="font-size:10px">${u.email || '—'}</div>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-auto pt-2 border-top" style="border-color:var(--app-border)!important">
                ${statusBadge(u)}
                <span class="font-mono text-app-muted" style="font-size:10px">#${u.id}</span>
            </div>
            </div>
        </div>`).join('') + `</div>`;
}

/* ── SELECT USER ── */
async function selectUser(id) {
    const r = await api('GET', `/users/${id}`);
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    selectedUser = r.data.user;
    activeTab = 'info';
    renderUserList();
    renderDetail();
    $('detailSection').style.display = '';
    $('detailSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── DETAIL SECTION ── */
function renderDetail() {
    if (!selectedUser) return;
    const u = selectedUser;

    // Avatar
    const av = $('detailAvatar');
    av.className = `rounded-circle d-flex align-items-center justify-content-center font-mono fw-bold ${colorFor(u.id)}`;
    av.style.cssText = 'width:52px;height:52px;font-size:16px';
    av.textContent = initials(u.username);

    $('detailName').textContent = u.username;
    $('detailSub').textContent  = `ID: ${u.id}  ·  ${u.email || '—'}`;
    $('detailBadge').innerHTML  = statusBadge(u, '12px');

    // Mini stats
    $('detailStats').innerHTML = `
        <div class="col-6 col-sm-3">
        <div class="card stat-card border p-3 text-center">
            <div class="stat-num text-app-blue">#${u.id}</div>
            <div class="text-app-muted mt-1" style="font-size:11px">User ID</div>
        </div>
        </div>
        <div class="col-6 col-sm-3">
        <div class="card stat-card border p-3 text-center">
            <div class="stat-num text-app-teal">${(u.groups||[]).length}</div>
            <div class="text-app-muted mt-1" style="font-size:11px">Roles</div>
        </div>
        </div>
        <div class="col-6 col-sm-3">
        <div class="card stat-card border p-3 text-center">
            <div class="stat-num text-app-purple">${(u.permissions||[]).length}</div>
            <div class="text-app-muted mt-1" style="font-size:11px">Permissions</div>
        </div>
        </div>
        <div class="col-6 col-sm-3">
        <div class="card stat-card border p-3 text-center">
            <div class="stat-num ${u.active ? 'text-app-green' : 'text-app-red'}">${u.active ? 'Aktif' : 'Nonaktif'}</div>
            <div class="text-app-muted mt-1" style="font-size:11px">Status</div>
        </div>
        </div>`;

    // Update tab active state
    document.querySelectorAll('#detailTabs .nav-link').forEach(el => el.classList.remove('active'));
    const tabOrder = ['info','ban','roles','perms','activation'];
    const idx = tabOrder.indexOf(activeTab);
    if (idx >= 0) document.querySelectorAll('#detailTabs .nav-link')[idx]?.classList.add('active');

    renderTabContent();
}

function setTab(tab) {
    activeTab = tab;
    document.querySelectorAll('#detailTabs .nav-link').forEach(el => el.classList.remove('active'));
    const tabOrder = ['info','ban','roles','perms','activation'];
    const idx = tabOrder.indexOf(tab);
    if (idx >= 0) document.querySelectorAll('#detailTabs .nav-link')[idx]?.classList.add('active');
    renderTabContent();
}

function renderTabContent() {
    if (!selectedUser) return;
    const u = selectedUser;
    let html = '';
    if      (activeTab === 'info')       html = renderInfo(u);
    else if (activeTab === 'ban')        html = renderBanTab(u);
    else if (activeTab === 'roles')      html = renderRolesTab(u);
    else if (activeTab === 'perms')      html = renderPermsTab(u);
    else if (activeTab === 'activation') html = renderActivationTab(u);
    $('tabContent').innerHTML = html;
}

/* ── TAB: INFO ── */
function renderInfo(u) {
    return `
        <div class="row g-4">
        <div class="col-12 col-lg-7">
            <div class="card border h-100">
            <div class="card-body">
                <div class="d-flex align-items-center gap-2 mb-4">
                <span class="card-section-title">Edit Informasi Pengguna</span>
                ${apiMethodBadge('PATCH')}
                </div>
                <div class="row g-3">
                <div class="col-12 col-sm-6">
                    <label class="form-label">USERNAME</label>
                    <input class="form-control" id="f-username" value="${u.username||''}" placeholder="username">
                </div>
                <div class="col-12 col-sm-6">
                    <label class="form-label">EMAIL</label>
                    <input class="form-control" id="f-email" value="${u.email||''}" placeholder="email@example.com">
                </div>
                <div class="col-12">
                    <label class="form-label">PASSWORD BARU <span class="text-app-muted fw-normal">(kosongkan jika tidak diubah)</span></label>
                    <input type="password" class="form-control" id="f-password" placeholder="••••••••">
                </div>
                </div>
                <div class="d-flex justify-content-end pt-3 mt-3 border-top" style="border-color:var(--app-border)!important">
                <button class="btn btn-primary btn-sm" id="saveInfoBtn" onclick="saveInfo()">
                    <i class="bi bi-floppy me-1"></i>Simpan Perubahan
                </button>
                </div>
            </div>
            </div>
        </div>
        <div class="col-12 col-lg-5">
            <div class="card border h-100">
            <div class="card-body">
                <div class="card-section-title mb-4">Informasi Sistem</div>
                <div class="row g-2">
                <div class="col-6">
                    <div class="info-cell p-3">
                    <div class="info-cell-label mb-1">Dibuat</div>
                    <div class="fw-medium" style="font-size:13px">${fmt(u.created_at)}</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="info-cell p-3">
                    <div class="info-cell-label mb-1">Diperbarui</div>
                    <div class="fw-medium" style="font-size:13px">${fmt(u.updated_at)}</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="info-cell p-3">
                    <div class="info-cell-label mb-1">Status</div>
                    <div class="mt-1">${statusBadge(u)}</div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="info-cell p-3">
                    <div class="info-cell-label mb-1">Last Active</div>
                    <div class="fw-medium" style="font-size:13px">${u.last_active ? fmt(u.last_active) : '—'}</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>`;
}

async function saveInfo() {
    const username = $('f-username').value.trim();
    const email    = $('f-email').value.trim();
    const password = $('f-password').value;
    if (!username || !email) { toast('Username dan email wajib diisi.', 'err'); return; }
    const body = { username, email };
    if (password) body.password = password;
    const btn = $('saveInfoBtn');
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Memproses...`;
    const r = await api('PATCH', `/users/${selectedUser.id}`, body);
    btn.disabled = false;
    btn.innerHTML = `<i class="bi bi-floppy me-1"></i>Simpan Perubahan`;
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'User berhasil diperbarui.');
    await refreshSelected();
}

/* ── TAB: BAN ── */
function renderBanTab(u) {
    const banned = u.status === 'banned';
    return `
        <div class="row g-4">
        <div class="col-12 col-lg-6">
            <div class="p-4 mb-3 d-flex align-items-start gap-3 ${banned ? 'ban-box-on' : 'ban-box-off'}">
            <div class="fs-4 flex-shrink-0">${banned ? '🚫' : '✅'}</div>
            <div>
                <div class="fw-semibold mb-1" style="color:${banned ? 'var(--app-red-txt)' : 'var(--app-green-txt)'}">
                ${banned ? 'Pengguna ini sedang dibanned' : 'Pengguna tidak dibanned'}
                </div>
                <div class="text-app-sub" style="font-size:13px">
                ${banned ? 'Pengguna tidak dapat mengakses sistem.' : 'Pengguna dapat mengakses sistem secara normal.'}
                </div>
                ${banned && u.status_message ? `<div class="reason-box p-2 mt-2">Alasan: ${u.status_message}</div>` : ''}
            </div>
            </div>

            <div class="card border">
            <div class="card-body">
                <div class="d-flex align-items-center gap-2 mb-2">
                <span class="card-section-title">${banned ? 'Unban' : 'Ban'} Pengguna</span>
                ${apiMethodBadge('POST')}
                <code class="text-app-muted font-mono" style="font-size:10px">/users/${u.id}/${banned ? 'unban' : 'ban'}</code>
                </div>
                <p class="text-app-sub mb-3" style="font-size:13px">
                ${banned ? 'Hapus status ban dan izinkan pengguna kembali mengakses sistem.' : 'Memblokir akses pengguna ke seluruh sistem dengan alasan yang tercatat.'}
                </p>
                ${banned
                ? `<button class="btn btn-success btn-sm" id="unbanBtn" onclick="doUnban()"><i class="bi bi-unlock me-1"></i>Unban ${u.username}</button>`
                : `<button class="btn btn-danger btn-sm" onclick="openBanModal()"><i class="bi bi-slash-circle me-1"></i>Ban ${u.username}</button>`}
            </div>
            </div>
        </div>

        <div class="col-12 col-lg-6">
            <div class="card border h-100">
            <div class="card-body">
                <div class="d-flex align-items-center gap-2 mb-3">
                <span class="card-section-title">Cek Status Ban</span>
                ${apiMethodBadge('GET')}
                <code class="text-app-muted font-mono" style="font-size:10px">/users/${u.id}/ban-status</code>
                </div>
                <table class="table table-sm mb-0" style="font-size:13px;--bs-table-bg:transparent;--bs-table-border-color:var(--app-border)">
                <tbody>
                    <tr>
                    <td class="text-app-sub">Status ban</td>
                    <td class="fw-medium ${banned ? 'text-app-red' : 'text-app-green'}">${banned ? 'Banned' : 'Tidak dibanned'}</td>
                    </tr>
                    <tr>
                    <td class="text-app-sub border-0">Alasan</td>
                    <td class="font-mono border-0" style="font-size:12px">${u.status_message || '—'}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>`;
}

function openBanModal() {
    $('ban-reason-input').value = '';
    banModalInst.show();
}

async function confirmBan() {
    const reason = $('ban-reason-input').value.trim();
    if (!reason) { toast('Alasan ban wajib diisi.', 'err'); return; }
    const btn = $('banConfirmBtn');
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Memproses...`;
    const r = await api('POST', `/users/${selectedUser.id}/ban`, { reason });
    btn.disabled = false;
    btn.innerHTML = `<i class="bi bi-slash-circle me-1"></i>Ban Pengguna`;
    banModalInst.hide();
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'User berhasil dibanned.');
    await refreshSelected();
}

async function doUnban() {
    const btn = $('unbanBtn');
    if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Memproses...`; }
    const r = await api('POST', `/users/${selectedUser.id}/unban`);
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'User berhasil di-unban.');
    await refreshSelected();
}

/* ── TAB: ROLES ── */
function renderRolesTab(u) {
    const current   = u.groups || [];
    const available = avGroups.filter(g => !current.includes(g));
    return `
        <div class="row g-4">
        <div class="col-12 col-lg-7">
            <div class="card border h-100">
            <div class="card-body">
                <div class="d-flex align-items-center gap-2 mb-3">
                <span class="card-section-title">Role Saat Ini</span>
                ${apiMethodBadge('GET')}
                </div>
                <div class="d-flex flex-wrap gap-2 mb-4 p-3 rounded" style="background:var(--app-bg3);min-height:52px;border:1px solid var(--app-border)">
                ${current.length
                    ? current.map(g => `
                        <span class="badge tag-role rounded-pill py-2 px-3 d-flex align-items-center gap-1">${g}
                        <button type="button" class="btn-close btn-close-white ms-1" style="font-size:.45em;opacity:.6" onclick="removeRole('${g}')"></button>
                        </span>`).join('')
                    : `<span class="text-app-muted" style="font-size:13px">Tidak ada role.</span>`}
                </div>
                <div class="row g-2">
                <div class="col-12 col-sm">
                    <select class="form-select form-select-sm" id="role-add-select">
                    <option value="">Pilih role untuk ditambahkan...</option>
                    ${available.map(g => `<option value="${g}">${g}</option>`).join('')}
                    </select>
                </div>
                <div class="col-auto d-flex gap-2">
                    <button class="btn btn-primary btn-sm" onclick="addRole()"><i class="bi bi-plus-lg me-1"></i>Tambah</button>
                    <button class="btn btn-secondary btn-sm" onclick="syncRoles()" title="Sync PUT"><i class="bi bi-arrow-repeat me-1"></i>Sync</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-12 col-lg-5">
            <div class="card border h-100">
            <div class="card-body">
                <div class="card-section-title mb-3">Role Tersedia di Sistem</div>
                <div class="d-flex flex-wrap gap-2">
                ${avGroups.length
                    ? avGroups.map(g => `<span class="badge tag-role rounded-pill py-2 px-3" style="opacity:.6">${g}</span>`).join('')
                    : `<span class="text-app-muted" style="font-size:13px">Tidak ada data.</span>`}
                </div>
            </div>
            </div>
        </div>
        </div>`;
}

async function addRole() {
    const val = $('role-add-select').value;
    if (!val) { toast('Pilih role terlebih dahulu.', 'err'); return; }
    const r = await api('POST', `/users/${selectedUser.id}/groups`, { groups: [val] });
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'Group berhasil ditambahkan.');
    await refreshSelected();
}

async function removeRole(g) {
    const r = await api('DELETE', `/users/${selectedUser.id}/groups`, { groups: [g] });
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'Group berhasil dihapus.');
    await refreshSelected();
}

async function syncRoles() {
    const r = await api('PUT', `/users/${selectedUser.id}/groups`, { groups: selectedUser.groups || [] });
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'Groups berhasil disinkronisasi.');
    await refreshSelected();
}

/* ── TAB: PERMISSIONS ── */
function renderPermsTab(u) {
    const current   = u.permissions || [];
    const available = avPerms.filter(p => !current.includes(p));
    return `
        <div class="row g-4">
        <div class="col-12 col-lg-7">
            <div class="card border h-100">
            <div class="card-body">
                <div class="d-flex align-items-center gap-2 mb-3">
                <span class="card-section-title">Permissions Saat Ini</span>
                ${apiMethodBadge('GET')}
                </div>
                <div class="d-flex flex-wrap gap-2 mb-4 p-3 rounded" style="background:var(--app-bg3);min-height:52px;border:1px solid var(--app-border)">
                ${current.length
                    ? current.map(p => `
                        <span class="badge tag-perm rounded-pill py-2 px-3 d-flex align-items-center gap-1">${p}
                        <button type="button" class="btn-close btn-close-white ms-1" style="font-size:.45em;opacity:.6" onclick="removePerm('${p}')"></button>
                        </span>`).join('')
                    : `<span class="text-app-muted" style="font-size:13px">Tidak ada permission.</span>`}
                </div>
                <div class="row g-2">
                <div class="col-12 col-sm">
                    <select class="form-select form-select-sm" id="perm-add-select">
                    <option value="">Pilih permission untuk ditambahkan...</option>
                    ${available.map(p => `<option value="${p}">${p}</option>`).join('')}
                    </select>
                </div>
                <div class="col-auto d-flex gap-2">
                    <button class="btn btn-primary btn-sm" onclick="addPerm()"><i class="bi bi-plus-lg me-1"></i>Tambah</button>
                    <button class="btn btn-secondary btn-sm" onclick="syncPerms()" title="Sync PUT"><i class="bi bi-arrow-repeat me-1"></i>Sync</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="col-12 col-lg-5">
            <div class="card border h-100">
            <div class="card-body">
                <div class="card-section-title mb-3">Permissions Tersedia di Sistem</div>
                <div class="d-flex flex-wrap gap-2">
                ${avPerms.length
                    ? avPerms.map(p => `<span class="badge tag-perm rounded-pill py-2 px-3" style="opacity:.6">${p}</span>`).join('')
                    : `<span class="text-app-muted" style="font-size:13px">Tidak ada data.</span>`}
                </div>
            </div>
            </div>
        </div>
        </div>`;
}

async function addPerm() {
    const val = $('perm-add-select').value;
    if (!val) { toast('Pilih permission terlebih dahulu.', 'err'); return; }
    const r = await api('POST', `/users/${selectedUser.id}/permissions`, { permissions: [val] });
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'Permission berhasil ditambahkan.');
    await refreshSelected();
}

async function removePerm(p) {
    const r = await api('DELETE', `/users/${selectedUser.id}/permissions`, { permissions: [p] });
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'Permission berhasil dihapus.');
    await refreshSelected();
}

async function syncPerms() {
    const r = await api('PUT', `/users/${selectedUser.id}/permissions`, { permissions: selectedUser.permissions || [] });
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'Permissions berhasil disinkronisasi.');
    await refreshSelected();
}

/* ── TAB: AKTIVASI ── */
function renderActivationTab(u) {
    return `
        <div class="row g-4">
        <div class="col-12 col-lg-6">
            <div class="card border h-100">
            <div class="card-body">
                <div class="d-flex align-items-center gap-2 mb-4">
                <span class="card-section-title">Status Aktivasi</span>
                ${apiMethodBadge('POST')}
                </div>

                <div class="toggle-row d-flex align-items-center justify-content-between p-3 mb-3">
                <div>
                    <div class="fw-medium">Status Akun</div>
                    <div class="text-app-sub mt-1" style="font-size:12px">${u.active ? 'Akun aktif — pengguna dapat login' : 'Akun nonaktif — pengguna tidak dapat login'}</div>
                </div>
                <span class="fs-4">${u.active ? '🟢' : '🔴'}</span>
                </div>

                <div class="toggle-row d-flex align-items-center justify-content-between p-3 mb-4">
                <div>
                    <div class="fw-medium">Dapat Login</div>
                    <div class="text-app-sub mt-1" style="font-size:12px">${u.active && u.status !== 'banned' ? 'Ya, dapat mengakses sistem' : 'Tidak, akses diblokir'}</div>
                </div>
                <i class="bi bi-${u.active && u.status !== 'banned' ? 'check-circle-fill text-app-green' : 'x-circle-fill text-app-red'} fs-5"></i>
                </div>

                <hr style="border-color:var(--app-border)">
                <p class="text-app-sub mb-3" style="font-size:13px">
                ${u.active ? 'Nonaktifkan akun untuk memblokir akses tanpa membanned.' : 'Aktifkan akun untuk mengizinkan pengguna kembali login.'}
                <br><code class="font-mono text-app-muted" style="font-size:11px">POST /api/users/${u.id}/${u.active ? 'deactivate' : 'activate'}</code>
                </p>
                ${u.active
                ? `<button class="btn btn-warning btn-sm" id="deactivateBtn" onclick="doDeactivate()"><i class="bi bi-pause-circle me-1"></i>Nonaktifkan Akun</button>`
                : `<button class="btn btn-success btn-sm" id="activateBtn" onclick="doActivate()"><i class="bi bi-check-circle me-1"></i>Aktifkan Akun</button>`}
            </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="card border h-100">
            <div class="card-body">
                <div class="card-section-title mb-3">Riwayat Status</div>
                <div class="info-cell p-3 mb-2">
                <div class="info-cell-label mb-1">Status Sekarang</div>
                <div class="fw-medium">${statusBadge(u, '12px')}</div>
                </div>
                <div class="info-cell p-3 mb-2">
                <div class="info-cell-label mb-1">Akun Dibuat</div>
                <div class="fw-medium" style="font-size:13px">${fmt(u.created_at)}</div>
                </div>
                <div class="info-cell p-3">
                <div class="info-cell-label mb-1">Terakhir Diperbarui</div>
                <div class="fw-medium" style="font-size:13px">${fmt(u.updated_at)}</div>
                </div>
            </div>
            </div>
        </div>
        </div>`;
}

async function doActivate() {
    const btn = $('activateBtn');
    if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Memproses...`; }
    const r = await api('POST', `/users/${selectedUser.id}/activate`);
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'User berhasil diaktifkan.');
    await refreshSelected();
}

async function doDeactivate() {
    const btn = $('deactivateBtn');
    if (btn) { btn.disabled = true; btn.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Memproses...`; }
    const r = await api('POST', `/users/${selectedUser.id}/deactivate`);
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || 'User berhasil dinonaktifkan.');
    await refreshSelected();
}

/* ── ADD MODAL ── */
function openAddModal() { addModalInst.show(); }

async function submitAdd() {
    const username = $('m-username').value.trim();
    const email    = $('m-email').value.trim();
    const password = $('m-password').value.trim();
    if (!username || !email || !password) { toast('Semua field wajib diisi.', 'err'); return; }
    const btn = $('addBtn');
    btn.disabled = true;
    btn.innerHTML = `<span class="spinner-border spinner-border-sm me-1"></span>Memproses...`;
    const r = await api('POST', '/users/', { username, email, password });
    btn.disabled = false;
    btn.innerHTML = `<i class="bi bi-person-plus me-1"></i>Buat Akun`;
    if (!r.ok) { toast(errMsg(r.data), 'err'); return; }
    toast(r.data.message || `User ${username} berhasil dibuat.`);
    addModalInst.hide();
    ['m-username','m-email','m-password'].forEach(id => $(id).value = '');
    await loadUsers();
}

/* ── HELPERS ── */
async function refreshSelected() {
    if (!selectedUser) return;
    const r = await api('GET', `/users/${selectedUser.id}`);
    if (!r.ok) return;
    selectedUser = r.data.user;
    // sync in allUsers
    const idx = allUsers.findIndex(u => u.id === selectedUser.id);
    if (idx !== -1) allUsers[idx] = { ...allUsers[idx], ...selectedUser };
    updateGlobalStats();
    filterUsers();
    renderDetail();
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
    addModalInst = new bootstrap.Modal($('addModal'));
    banModalInst = new bootstrap.Modal($('banModal'));
    loadUsers();
});
</script>
</body>
</html>
