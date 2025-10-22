// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom'; // ¡Importante! Usamos NavLink para el estilo "active"
import styles from './Navbar.module.css';   // Importamos el CSS Module

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        // className recibe una función que nos da el estado 'isActive'
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Inicio 🏠
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Menú 🍽️
      </NavLink>
      <NavLink
        to="/contacto"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Contacto 📞
      </NavLink>
    </nav>
  );
}

export default Navbar;