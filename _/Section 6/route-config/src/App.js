import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/dashboard">Dashboard</Link>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default App;
