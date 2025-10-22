// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>☕ MiCafetería</div>
      <nav className={styles.navbar}>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Menú
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Contacto
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Inicio
        </NavLink>
        <button className={styles.reserveButton}>Reservar</button>
      </nav>
    </header>
  );
}

export default Navbar;
