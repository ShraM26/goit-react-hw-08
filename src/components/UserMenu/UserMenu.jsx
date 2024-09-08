import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/slice';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.menu}>
      
      {user ? (
        <span>Welcome, {user.name}</span>
      ) : (
        <span>Welcome, Guest</span> 
      )}
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
};

export default UserMenu;