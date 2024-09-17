import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';
import { selectAuthIsLoggedIn } from '../../redux/auth/selectors'; 

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn); 

  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.authSection}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;