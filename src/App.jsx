import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './index.css';
import { apiRefreshUser } from './redux/auth/operations';
import { selectAuthIsRefreshing } from './redux/auth/selectors';
import Loader from './components/Loader/Loader';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  
  if (isRefreshing) {
    return <Loader />;
  }

  return (
   
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} redirectTo="/login" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={RegistrationPage} redirectTo="/contacts" />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;