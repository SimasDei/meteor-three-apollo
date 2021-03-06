import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export class LoginForm extends Component {
  handleUserLogin = e => {
    e.preventDefault();

    Meteor.loginWithPassword(this.email.value, this.password.value, error => {
      if (!error) {
        this.props.client.resetStore();
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleUserLogin}>
        <input
          type="email"
          placeholder="Email"
          ref={input => (this.email = input)}
        />
        <input
          type="password"
          placeholder="Password"
          ref={input => (this.password = input)}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default LoginForm;
