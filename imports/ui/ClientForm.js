import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createClient = gql`
  mutation createClient($name: String!) {
    createClient(name: $name) {
      _id
    }
  }
`;

export class ClientForm extends Component {
  handleSubmit = () => {
    this.props
      .createClient({
        variables: {
          name: this.name.value
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          ref={input => (this.name = input)}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default graphql(createClient, {
  name: 'createClient',
  options: {
    refetchQueries: ['Clients']
  }
})(ClientForm);
