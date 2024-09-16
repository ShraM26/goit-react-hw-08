import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/selectors';
import { apiLogout } from '../../redux/auth/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser); 

 
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.userMenu}>
      <p className={styles.userName}>Welcome, {user.name}</p> 
      <button type="button" onClick={() => dispatch(apiLogout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;