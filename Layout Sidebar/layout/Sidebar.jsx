import Brand from "./Brand";
import { PrimaryToggleButton, PrimaryOffcanvasButton } from ".";
import NavMenu from "./NavMenu";
import MENUS from "../const/Menus";
import { BASE_URL } from "../const";

export default function Sidebar() {
    return (
        <div className="w-100 h-100 d-flex flex-column pt-2">
            <div className="container h-100">
                <div className="row h-100 flex-nowrap flex-column align-items-start g-2">

                    {/* Header */}
                    <div className="col-12 px-0 d-flex align-items-center justify-content-start mb-3 nav-menu">
                        <Brand className="me-auto" />
                        <PrimaryToggleButton className="btn-light ms-auto d-none d-sm-flex" />
                    </div>

                    {/* Menu utama */}
                    <div className="col-12 px-0 nav-menu">
                        <NavMenu menus={MENUS} />
                    </div>

                    {/* Bottom Dropdown (tanpa user data) */}
                    <div className="col-12 mt-auto position-sticky bottom-0 p-0 nav-menu">

                        <div className="btn-group dropup w-100">
                            <button
                                type="button"
                                className="btn btn-light w-100 text-start d-flex align-items-center justify-content-between p-2 rounded-3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span>
                                    <i className="bi bi-gear me-2"></i>
                                    Menu
                                </span>
                                <i className="bi bi-chevron-up"></i>
                            </button>

                            <ul className="dropdown-menu w-100 mb-1 mx-0 p-1">
                                <li>
                                    <a
                                        className="btn btn-light w-100 text-start d-flex align-items-center rounded-3"
                                        href={`${BASE_URL}/logout`}
                                    >
                                        <i className="bi bi-box-arrow-right me-2"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
