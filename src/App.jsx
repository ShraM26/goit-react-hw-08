import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import Layout from 'components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
      </Route>
    </Routes>
  );
}

export default App;
