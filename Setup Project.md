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

## Hapus beberapa file tidak terpakai
Hafus file berikut:
- `App.css`
- `index.css`
