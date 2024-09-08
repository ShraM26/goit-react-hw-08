import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <Link to="/login" className={css.link}>
        Login
      </Link>
      <Link to="/register" className={css.link}>
        Register
      </Link>
    </nav>
  );
};

export default AuthNav;