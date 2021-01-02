import React from 'react';
import { fakeAuth } from '../auth.service';
import { withRouter } from 'react-router-dom';

const AuthButton = ({ history }) => {
  console.log('AuthButton rendered!');
  //   console.log(history);
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Signout
      </button>
    </p>
  ) : (
    <p>You are not loggedIn</p>
  );
};

export default withRouter(AuthButton);
