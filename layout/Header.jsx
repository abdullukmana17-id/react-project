import { forwardRef } from "react";
import { PrimaryOffcanvasButton } from ".";
import Settings from "../pages/Settings";

const Header = forwardRef(({ title, children, className, settings = true, navs, ...props }, ref) => {
    return (
        <header
            ref={ref}
            className={`bg-body position-sticky top-0 ${className || 'py-2'} z-3`}
            {...props}
        >
            <div className="container-fluid">
                <div className="row justify-content-center mt-1">
                    <div className="col-12 d-flex align-items-center gap-2">
                        <PrimaryOffcanvasButton className="d-sm-none btn-light mt-1" />

                        {title && (
                            <>
                                <h1 className="mb-0 font-sans fw-normal fs-6 me-auto">
                                    <small>{title}</small>
                                </h1>
                                {navs}
                                {settings && (
                                    <button type="button" className="btn btn-light" data-bs-target="#pengaturanModal" data-bs-toggle="modal">
                                        <i className="bi bi-gear-wide-connected"></i>
                                        <span className="ms-2 d-none d-md-inline">Pengaturan</span>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {children}
            <Settings />
        </header>
    );
});

Header.displayName = "Header";

export default Header;