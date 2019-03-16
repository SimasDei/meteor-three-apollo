import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export class RegisterForm extends Component {
  handleUserRegister = e => {
    e.preventDefault();
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value
      },
      error => console.log(error)
    );
  };

  render() {
    return (
      <form onSubmit={this.handleUserRegister}>
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
        <button>Register</button>
      </form>
    );
  }
}

export default RegisterForm;
