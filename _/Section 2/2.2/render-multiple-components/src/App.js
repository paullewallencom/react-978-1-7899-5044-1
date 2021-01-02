import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Header />
    <Content />
    <Footer />
  </nav>
);

const Header = () => (
  <div className="header">
    <Route
      exact
      path="/:page"
      render={({ match }) => <h1>{match.params.page} header</h1>}
    />
  </div>
);
const Content = () => (
  <div className="content">
    <Route
      path="/:page"
      render={({ match }) => <p>{match.params.page} content</p>}
    />
  </div>
);

const Footer = () => (
  <div className="content">
    <Route
      path="/:page"
      render={({ match }) => <p>{match.params.page} footer</p>}
    />
  </div>
);

const App = () => (
  <Router>
    <div>
      <Links />
    </div>
  </Router>
);

export default App;
