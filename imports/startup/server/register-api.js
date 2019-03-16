import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

/**
 * @schema - import Client Schema and Resolvers
 */
import ClientsSchema from '../../api/clients/Clients.graphql';
import ClientsResolvers from '../../api/clients/resolvers';
import UsersSchema from '../../api/admins/User.graphql';
import UsersResolvers from '../../api/admins/resolvers';

const typeDefs = [UsersSchema, ClientsSchema];

const resolvers = merge(ClientsResolvers, UsersResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

createApolloServer({ schema });
