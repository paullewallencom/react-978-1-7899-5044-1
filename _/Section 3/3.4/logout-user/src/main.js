import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Protected from './components/Protected';
import { Public } from './components/Public';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        {/* Define the route dynamically */}
        {/* <Route path="/protected" component={Protected} />
         */}
        <PrivateRoute component={Protected} path="/protected" />
      </div>
    </Router>
  );
}
export default AuthExample;
