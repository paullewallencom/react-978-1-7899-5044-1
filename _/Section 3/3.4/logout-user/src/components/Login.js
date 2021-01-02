import React, { Component } from 'react';
import { fakeAuth } from '../auth.service';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    isLoggedIn: false
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ isLoggedIn: true });
    });
  };
  render() {
    let { isLoggedIn } = this.state;
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    console.log(from);
    if (isLoggedIn) return <Redirect to={from} />;

    return (
      <div>
        <p>To view protected route you must LoggedIn</p>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
