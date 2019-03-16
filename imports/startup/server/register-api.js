import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

/**
 * @schema - import Client Schema and Resolvers
 */
import ClientsSchema from '../../api/clients/Clients.graphql';
import ClientsResolvers from '../../api/clients/resolvers';

const testSchema = `
  type Query {
    ahoy: String
    clients: [Client]
  }
`;

const typeDefs = [testSchema, ClientsSchema];

const resolver = {
  Query: {
    ahoy() {
      return 'Ahoy Sailor o/';
    }
  }
};

const resolvers = merge(ClientsResolvers, resolver);

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });
