// Routes/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Ejemplo básico, ajusta según tus necesidades
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated =  true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
