import Clients from './clients';

export default {
  Query: {
    clients() {
      return Clients.find({}).fetch();
    }
  },
  Mutation: {
    createClient(obj, { name }, context) {
      const clientId = Clients.insert({
        name
      });
      return Clients.findOne(clientId);
    }
  }
};
