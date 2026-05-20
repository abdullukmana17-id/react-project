## Contoh Penggunaan
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ToastProvider } from "./components/toast/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
```

## Gunakan `useToast()`
```jsx
import { useToast } from "./components/toast/ToastContext";

export default function Home() {
  const { showToast } = useToast();

  const handleSuccess = () => {
    showToast({
      title: "Berhasil",
      message: "Data berhasil disimpan",
      type: "success",
      delay: 3000
    });
  };

  const handleError = () => {
    showToast({
      title: "Gagal",
      message: "Terjadi kesalahan",
      type: "danger"
    });
  };

  return (
    <div className="p-4">
      <button
        className="btn btn-success me-2"
        onClick={handleSuccess}
      >
        Success Toast
      </button>

      <button
        className="btn btn-danger"
        onClick={handleError}
      >
        Error Toast
      </button>
    </div>
  );
}
```
