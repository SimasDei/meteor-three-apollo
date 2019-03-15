import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
const ahoyQuery = gql`
  {
    ahoy
    clients {
      _id
      name
    }
  }
`;

const App = ({ data }) => {
  if (data.loading) return null;
  return (
    <div>
      <h1>{data.ahoy}</h1>
      <ul>
        {data.clients.map(client => (
          <li key={client._id}>
            <p>{client.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default graphql(ahoyQuery)(App);
