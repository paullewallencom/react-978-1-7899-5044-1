import React from 'react';

import Dashboard from '../components/Dashboard/Dashboard';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// then our route config
export const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    routes: [
      {
        path: '/dashboard/management',
        component: () => <div>Management Component</div>
      },
      {
        path: '/dashboard/product',
        component: () => <div>Product Component</div>
      }
    ]
  }
];
