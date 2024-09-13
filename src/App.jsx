import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import './index.css';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = React.lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = React.lazy(() => import('./pages/RegistrationPage/RegistrationPage'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
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

export default App;
