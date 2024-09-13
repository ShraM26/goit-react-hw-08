import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUsername } from 'redux/auth/selectors';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div className={css.container}>
      <span className={css.name}>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>Log out</button>
    </div>
  );
};

export default UserMenu;
