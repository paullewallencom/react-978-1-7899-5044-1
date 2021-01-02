import React from 'react';

export const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/posts',
    sidebar: () => <div>posts sidebar</div>,
    main: () => <h2>posts main</h2>
  },
  {
    path: '/orders',
    sidebar: () => <div>Orders Sidebar</div>,
    main: () => <h2>Orders Main</h2>
  },
  {
    path: '/customers',
    sidebar: () => <div>Customer Sidebar</div>,
    main: () => <div>Customer Main</div>
  },
  {
    path: '/students',
    sidebar: () => <div>Students Sidebar section</div>,
    main: () => <div>Students Main section</div>
  }
];
