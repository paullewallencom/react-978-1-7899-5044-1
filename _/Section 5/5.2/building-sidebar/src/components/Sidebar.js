import React from 'react';
import { Route, Link } from 'react-router-dom';
import { routes } from '../routes';

function Sidebar() {
  return (
    <div
      style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}
    >
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
      </ul>

      {routes.map((route, index) => (
        // You can render a <Route> in as many places
        // as you want in your app. It will render along
        // with any other <Route>s that also match the URL.
        // So, a sidebar or breadcrumbs or anything else
        // that requires you to render multiple things
        // in multiple places at the same URL is nothing
        // more than multiple <Route>s.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.sidebar}
        />
      ))}
    </div>
  );
}
export default Sidebar;
