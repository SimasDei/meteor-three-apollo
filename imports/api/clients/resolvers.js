import Clients from './clients';

const res = Clients.find({}).fetch();
console.log(res);

export default {
  Query: {
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
