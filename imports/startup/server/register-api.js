import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ClientsSchema from '../../api/clients/Clients.graphql';

const testSchema = `
  type Query {
    ahoy: String
    clients: [Client]
  }
`;

const typeDefs = [testSchema, ClientsSchema];

const resolvers = {
  Query: {
    ahoy() {
      return 'Ahoy Sailor o/';
    },
    clients() {
      return [
        {
          _id: 'abs123',
          name: 'Billy'
        },
        {
          _id: 'cvc111',
          name: 'James'
        }
      ];
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });
