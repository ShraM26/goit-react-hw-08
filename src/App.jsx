import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
    </div>
  );
}

export default App;
