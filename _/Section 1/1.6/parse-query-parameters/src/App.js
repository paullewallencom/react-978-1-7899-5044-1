import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="person/?id=123">Person</Link> |
    <Link to={{ pathname: '/person', search: '?id=4567', hash: '#some-hash' }}>
      Person in Object
    </Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route
        path="/person"
        render={({ match, location }) => (
          <div>
            <p>{JSON.stringify(match)}</p>
            <p>{JSON.stringify(location)}</p>
            <p>{new URLSearchParams(location.search).get('id')}</p>
          </div>
        )}
      />
    </div>
  </Router>
);

export default App;
