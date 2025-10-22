import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Nuestra plantilla principal
import './index.css';

// 1. Importaciones del Router y nuestras páginas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Menu from './pages/Menu.jsx';
import Contacto from './pages/Contacto.jsx';

// 2. Definir la estructura de las rutas
const router = createBrowserRouter([
  {
    path: '/',         // Esta es la ruta "padre"
    element: <App />,  // <App> será el layout (Navbar, Footer, etc.)
    children: [
      {
        index: true,       // Esta es la ruta "index" (/)
        element: <Inicio />, // Muestra la página de Inicio en la ruta /
      },
      {
        path: '/menu',     // Ruta /menu
        element: <Menu />,   // Muestra la página de Menú
      },
      {
        path: '/contacto', // Ruta /contacto
        element: <Contacto />, // Muestra la página de Contacto
      },
    ],
  },
]);

// 3. Renderizar el "Proveedor de Rutas" en lugar de <App />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);