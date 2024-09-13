
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.authSection}>
        <AuthNav />
        <UserMenu />
      </div>
    </header>
  );
};

export default AppBar;