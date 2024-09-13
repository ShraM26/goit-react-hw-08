import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectLoggedIn, selectToken } from '../../redux/auth/selectors';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const token = useSelector(selectToken);

  if (!isLoggedIn && token) {
    return <p>...loading</p>;
  }

  if (isLoggedIn && token) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;