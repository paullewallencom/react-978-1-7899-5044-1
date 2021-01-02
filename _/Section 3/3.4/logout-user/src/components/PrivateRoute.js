import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from '../auth.service';

function PrivateRoute({ component: Component, ...rest }) {
  console.log(Component);
  console.log({ ...rest });

  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
