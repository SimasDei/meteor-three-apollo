import Clients from './clients';

export default {
  Query: {
    clients(obj, args, { userId }) {
      return Clients.find({ userId }).fetch();
    }
  },
  Mutation: {
    createClient(obj, { name }, { userId }) {
      const clientId = Clients.insert({
        name,
        userId
      });
      return Clients.findOne(clientId);
    }
  }
};
