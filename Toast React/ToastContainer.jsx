import React, { useEffect, useRef } from "react";

const ICONS = {
  success: "bi-check-circle",
  danger: "bi-x-circle",
  warning: "bi-exclamation-triangle",
  info: "bi-info-circle",
  primary: "bi-bell",
  secondary: "bi-chat-left-text",
  dark: "bi-moon",
  light: "bi-sun"
};

const ToastItem = ({ toast, removeToast }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !window.bootstrap) return;

    const bsToast = window.bootstrap.Toast.getOrCreateInstance(ref.current, {
      autohide: true,
      delay: toast.delay
    });

    bsToast.show();

    const handleHidden = () => {
      removeToast(toast.id);
    };

    ref.current.addEventListener("hidden.bs.toast", handleHidden);

    return () => {
      ref.current?.removeEventListener("hidden.bs.toast", handleHidden);
      bsToast.dispose();
    };
  }, [toast, removeToast]);

  const iconClass = ICONS[toast.type] || "bi-bell-fill";

  return (
    <div
      ref={ref}
      className={`toast align-items-center toast-${toast.type} border shadow-sm rounded-4 mb-2`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex align-items-center">
        
        <div className="ps-3 fs-5">
          <i className={`bi ${iconClass}`}></i>
        </div>

        <div className="toast-body">
          <strong>{toast.title}</strong>
          <div>{toast.message}</div>
        </div>

        <button
          type="button"
          className="btn border-0 me-3 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        >
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-2">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          removeToast={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
