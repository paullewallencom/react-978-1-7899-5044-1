import React from 'react';
import { Link } from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';

function Dashboard({ routes }) {
  return (
    <div>
      <h3>Dashboard</h3>
      <li>
        <Link to="/dashboard/management">Management</Link>
      </li>
      <li>
        <Link to="/dashboard/product">Product</Link>
      </li>
      {routes.map((route, index) => (
        <RouteWithSubRoutes {...route} key={index} />
      ))}
    </div>
  );
}

export default Dashboard;
