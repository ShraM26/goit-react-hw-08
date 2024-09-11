import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink 
          to="/contacts" 
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;