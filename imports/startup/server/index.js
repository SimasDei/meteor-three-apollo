import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type Query {
    ahoy: String
  }
`;

const resolvers = {
  Query: {
    ahoy() {
      return 'Ahoy Sailor o/';
    }
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });
