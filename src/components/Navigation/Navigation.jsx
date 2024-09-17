import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
