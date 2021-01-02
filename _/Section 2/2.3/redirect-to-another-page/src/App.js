import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>|<Link to="/protected">Protected</Link>
  </nav>
);

const loggedIn = true;
const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/login" render={() => <h2>Please Login</h2>} />
      <Route
        path="/protected"
        render={() => (loggedIn ? <h1>Welcome!</h1> : <Redirect to="/login" />)}
      />
    </div>
  </Router>
);

export default App;
