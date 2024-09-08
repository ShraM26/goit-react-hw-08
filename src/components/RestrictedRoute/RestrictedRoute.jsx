import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/slice';

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/contacts" />;
};

export default RestrictedRoute;