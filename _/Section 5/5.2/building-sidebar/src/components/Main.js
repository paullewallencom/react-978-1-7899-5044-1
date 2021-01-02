import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from '../routes';

function Main() {
  return (
    <div style={{ flex: 1, padding: '10px' }}>
      {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  );
}
export default Main;
