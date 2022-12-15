import React from 'react';
import { useState, useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/Route/RestrictedRoute';
import { PrivateRoute } from 'components/Route/PrivateRoute';

import { createTheme, CssBaseline, Switch, ThemeProvider } from '@mui/material';

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LogInPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return isRefreshing ? (
    <b>Refreshing contacts...</b>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch
        onChange={() => {
          setDarkMode(!darkMode);
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LogInPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
