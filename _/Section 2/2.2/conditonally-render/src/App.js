import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link> |<Link to="/about">About</Link> |
    <Link to="/profile">Profile</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        <Route path="/profile" render={() => <h1>Profile</h1>} />
        <Route
          path="/:id"
          render={({ match }) => <h1>ID: {match.params.id}</h1>}
        />
      </Switch>
    </div>
  </Router>
);

export default App;
