import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ClientForm from './ClientForm';

const clientsQuery = gql`
  query Clients {
    clients {
      _id
      name
    }
  }
`;

const App = ({ loading, clients }) => {
  if (loading) return null;
  return (
    <div>
      <h1>Clients</h1>
      <ClientForm />
      <ul>
        {clients.map(client => (
          <li key={client._id}>
            <p>{client.name}</p>
          </li>
        ))}
      </ul>
      <h1>Login</h1>
      <LoginForm />
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default graphql(clientsQuery, {
  props: ({ data }) => ({ ...data })
})(App);
