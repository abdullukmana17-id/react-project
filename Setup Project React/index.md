# Setup Project

## Buat project React (Vite)
```bash
npm create vite@latest my-app
```

## Install Sass
```bash
npm install sass
```

## Install Router
```jsx
npm install react-router-dom
```

## Edit `App.jsx`
```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Element() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <p>Welcome ke aplikasi React kamu 🚀</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Element />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Edit `main.jsx`
Hapus bagian `import './index.css'`

## Edit `App.jsx`
Hapus bagian `import './App.css'`

## Edit `index.html`
```html
<!doctype html>
<html lang="en" data-bs-theme="light">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS v5.3.8 -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <div id="root"></div>

    <!-- Bootstrap JavaScript Bundle (includes Popper) -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ></script>

    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## Hapus beberapa file tidak terpakai
Hafus file berikut:
- `App.css`
- `index.css`
