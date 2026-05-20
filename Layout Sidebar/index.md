# Layout Sidebar

## Tambah File Konfigurasi
```txt
src/
├── const/
│   ├── Menu.jsx
│   └── index.jsx
│
├── layout/
│   ├── Brand.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── NavMenu.jsx
│   ├── Sidebar.jsx
│   └── index.jsx
```

## Penggunaan `<Layout/>`
```jsx
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Layout, {
    PrimaryToggleButton,
    PrimaryOffcanvasButton,
    SecondaryOffcanvasButton,
    SecondaryToggleButton
} from "../layout/index";

import "../assets/scss/main.scss"

export default function Home() {
    return (
        <>
            <Layout
                primarySidebarContent={
                    <Sidebar />
                }
                primaryMinWidth="calc(2.25rem + 1rem)"
                secondarySidebarContent={
                    <div>Widget kanan</div>
                }
                secondaryMinWidth="0"
                mainContent={
                    <>
                        <Header
                            className="d-lg-none"
                            navs={
                                <>
                                    <SecondaryOffcanvasButton className="btn btn-light d-xl-none" />
                                    <SecondaryToggleButton className="btn btn-light d-none d-xl-inline-flex" />
                                </>
                            }
                        />
                        <section className="vh-100"></section>
                    </>
                }
            />
            <Footer />
        </>
    )
}
```

## Mengakses state sidebar
```jsx
import { useSidebarLayout } from "./Layout";

function MyComponent() {
  const {
    primaryHidden,
    togglePrimary,
    setPrimaryHidden,
  } = useSidebarLayout();

  return (
    <button onClick={togglePrimary}>
      {primaryHidden ? "Show" : "Hide"} Sidebar
    </button>
  );
}
```

## Pakai tombol bawaan
### Hide/show inline sidebar
```jsx
import {
  PrimaryToggleButton,
  SecondaryToggleButton
} from "./Layout";

function Navbar() {
  return (
    <div className="d-flex gap-2">
      <PrimaryToggleButton />
      <SecondaryToggleButton />
    </div>
  );
}
```
### Offcanvas
```jsx
import {
  PrimaryOffcanvasButton,
  SecondaryOffcanvasButton
} from "./Layout";

function NavbarMobile() {
  return (
    <div className="d-flex gap-2">
      <PrimaryOffcanvasButton />
      <SecondaryOffcanvasButton />
    </div>
  );
}
```
