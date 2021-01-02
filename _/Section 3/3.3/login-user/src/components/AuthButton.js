import React from 'react';
import { fakeAuth } from '../auth.service';

function AuthButton(props) {
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button>Signout</button>
    </p>
  ) : (
    <p>You are not loggedIn</p>
  );
}

export default AuthButton;
