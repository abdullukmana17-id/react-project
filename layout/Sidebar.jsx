import Brand from "./Brand"
import { PrimaryToggleButton, PrimaryOffcanvasButton } from ".";
import NavMenu from "./NavMenu";
import User from "../const/User";
import MENUS from "../const/Menus";
import { BASE_URL } from "../const";

export default function Sidebar() {
    const { data: user, loading, error } = User();
    const menus = [
        ...MENUS,
        ...(user && !loading
            ? [
                {
                    to: "/progress",
                    title: "Progress Hafalan",
                    label: (
                        <>
                            <i className="bi bi-graph-up"></i>
                            <span className="ms-2">Progress Hafalan</span>
                        </>
                    )
                }
            ]
            : [])
    ];

    return (
        <>
            <div className="w-100 h-100 d-flex flex-column pt-2">
                <div className="container h-100">
                    <div className="row h-100 flex-nowrap flex-column align-items-start g-2">
                        <div className="col-12 px-0 pt-1 d-flex align-items-center justify-content-center mb-3 nav-menu">
                            <Brand />
                            <PrimaryToggleButton className="btn-light ms-auto btn-sm d-none d-sm-flex" />
                            <PrimaryOffcanvasButton className="btn-light ms-auto btn-sm d-sm-none" />
                        </div>
                        <div className="col-12 px-0 nav-menu">
                            <NavMenu menus={
                                menus
                            } />
                        </div>

                        {/* User Info - Sticky Bottom */}
                        <div className="col-12 mt-auto position-sticky bottom-0 p-0 nav-menu">
                            {loading ? (
                                <p className="m-0 text-center font-sans text-muted">
                                    <span className="spinner-border spinner-border-sm" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </span>
                                    <small className="detail ms-2">Memuat data pengguna</small>
                                </p>
                            ) : user ? (
                                <div className="btn-group dropup p-0 w-100">
                                    <button
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        className="btn btn-light rounded-2 w-100 text-start d-flex flex-nowrap overflow-hidden align-items-center gap-2 p-1"
                                    >
                                        <img
                                            src={user.avatar}
                                            alt={user.full_name}
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            className="flex-shrink-0 object-fit-cover rounded-2"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.full_name)}&background=random`;
                                            }}
                                        />
                                        <div
                                            style={{ maxWidth: "calc(100% - 80px - .5rem)", marginBottom: "-.5rem" }}
                                            className="flex-grow-1 detail"
                                        >
                                            <h6 className="m-0 small text-truncate font-sans">{user.full_name}</h6>
                                            <p className="m-0 text-truncate font-sans"><small>{user.email}</small></p>
                                        </div>
                                        <i className="bi bi-arrows-expand ms-auto"></i>
                                    </button>
                                    <ul className="dropdown-menu w-100 mb-1 mx-0 p-1">
                                        <li>
                                            <a className="btn btn-light w-100 gap-2 text-start d-flex align-items-center justify-content-start" href={`${BASE_URL}/logout`}>
                                                <i className="bi bi-box-arrow-right me-2"></i>
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <NavMenu menus={[
                                        {
                                            href: `${BASE_URL}/login`,
                                            title: "Login",
                                            label: (
                                                <>
                                                    <i className="bi bi-person-circle"></i>
                                                    <span className="ms-2">Login</span>
                                                </>
                                            )
                                        },
                                        {
                                            href: `${BASE_URL}/register`,
                                            title: "Register",
                                            label: (
                                                <>
                                                    <i className="bi bi-person-plus"></i>
                                                    <span className="ms-2">Register</span>
                                                </>
                                            )
                                        }
                                    ]} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}