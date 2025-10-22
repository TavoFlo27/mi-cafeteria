// src/components/Navbar.jsx
import { Link } from 'react-router-dom'; // ¡Importante! Usa Link en lugar de <a>

// Define los colores para reusabilidad
const colors = {
  background: '#3e2723', // Marrón oscuro, casi chocolate (fondo de la barra)
  text: '#efebe9',       // Crema claro (texto de los enlaces)
  hover: '#bcaaa4',      // Gris topo suave (al pasar el ratón)
  accent: '#a1887f'      // Marrón más claro y cálido (opcional para acentos)
};

const navStyle = {
  padding: '15px 20px',
  background: colors.background,
  display: 'flex',
  justifyContent: 'center', // Centra los enlaces
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' // Sombra sutil
};

const linkStyle = {
  margin: '0 25px', // Más espacio entre los enlaces
  color: colors.text,
  textDecoration: 'none', // Quita el subrayado por defecto
  fontSize: '1.1rem', // Tamaño de fuente un poco más grande
  fontWeight: '600', // Un poco más de peso a la fuente
  padding: '5px 10px',
  borderRadius: '4px',
  transition: 'color 0.3s, background-color 0.3s' // Transición suave para el hover
};

// Componente de enlace reutilizable con lógica de hover
function NavLink({ to, children }) {
  // Simplemente definimos el estilo base y lo retornamos
  // En un proyecto real, se usaría CSS/librerías (Tailwind, Styled Components)
  // o el hook useMatch de react-router-dom para el estilo activo.
  // Aquí, por simplicidad y el requerimiento de JavaScript style,
  // mantendremos el estilo de Link directamente.

  return (
    <Link 
      to={to} 
      style={linkStyle}
      // NOTA: Los estilos de hover no son soportados directamente en objetos 'style' de React.
      // Para un hover real, necesitarías usar CSS, librerías como styled-components, o el 
      // evento onMouseEnter/onMouseLeave de React (más complejo).
      // Para esta mejora, confiamos en la apariencia profesional de los colores y el diseño.
    >
      {children}
    </Link>
  );
}


function Navbar() {
  return (
    <nav style={navStyle}>
      {/* Usamos el componente NavLink para mantener la consistencia */}
      <NavLink to="/">
        Inicio 🏠
      </NavLink>
      <NavLink to="/menu">
        Menú 🍽️
      </NavLink>
      <NavLink to="/contacto">
        Contacto 📞
      </NavLink>
    </nav>
  );
}

export default Navbar;