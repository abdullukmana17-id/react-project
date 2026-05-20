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
import SidebarLayout from "./Layout";

export default function App() {
  return (
    <Layout
      navbarContent={<div>Navbar saya</div>}
      primarySidebarContent={<div>Menu kiri</div>}
      mainContent={<div>Konten utama</div>}
      secondarySidebarContent={<div>Widget kanan</div>}
      footerContent={<div>Footer</div>}
    >
      <MyComponent />
    </Layout>
  );
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
