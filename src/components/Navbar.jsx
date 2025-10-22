// src/components/Navbar.jsx
import { Link } from 'react-router-dom'; // ¡Importante! Usa Link en lugar de <a>

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      {/* Link nos permite navegar sin recargar la página */}
      <Link to="/" style={{ margin: '10px' }}>
        Inicio
      </Link>
      <Link to="/menu" style={{ margin: '10px' }}>
        Menú
      </Link>
      <Link to="/contacto" style={{ margin: '10px' }}>
        Contacto
      </Link>
    </nav>
  );
}
export default Navbar;