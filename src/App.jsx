// src/App.jsx
import { Outlet } from 'react-router-dom'; // Importamos Outlet
import Navbar from './components/Navbar';   // Importamos nuestro menú
import './App.css';

function App() {
  return (
    <div className="App">
      {/* El Navbar aparecerá en todas las páginas */}
      <Navbar />

      <main>
        {/* <Outlet> renderizará Inicio, Menu, o Contacto
            dependiendo de la URL */}
        <Outlet />
      </main>

      {/* Puedes agregar un Footer aquí y aparecerá en todas las páginas */}
      <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc' }}>
        <p>© 2025 Mi Cafetería</p>
      </footer>
    </div>
  );
}

export default App;