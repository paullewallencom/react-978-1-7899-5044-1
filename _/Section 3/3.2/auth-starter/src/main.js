import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Protected from './components/Protected';
import { Public } from './components/Public';

function AuthExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/protected" component={Protected} />
      </div>
    </Router>
  );
}
export default AuthExample;
