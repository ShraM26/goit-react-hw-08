import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <nav>
    <NavLink
      to="/register"
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.activeLink}` : styles.link
      }
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.activeLink}` : styles.link
      }
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;