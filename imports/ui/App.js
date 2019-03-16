import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { withApollo } from 'react-apollo';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ClientForm from './ClientForm';

const App = ({ loading, clients, client, user }) => {
  if (loading) return null;
  return (
    <div>
      {user && user._id ? (
        <button
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          Logout
        </button>
      ) : (
        <div>
          <h1>Login</h1>
          <LoginForm client={client} />
          <h1>Register</h1>
          <RegisterForm client={client} />
        </div>
      )}

      <h1>Clients</h1>
      <ClientForm />
      <ul>
        {clients.map(client => (
          <li key={client._id}>
            <p>{client.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const clientsQuery = gql`
  query Clients {
    clients {
      _id
      name
    }
    user {
      _id
    }
  }
`;

export default graphql(clientsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
