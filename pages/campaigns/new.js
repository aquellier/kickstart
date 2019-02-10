import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: ''
  }

  // Whenever we call a function on a contract
  // it is always going to be asynchronous
  onSubmit = async (event) => {
    // Prevent from submitting the form when event occurs
    event.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });
    } catch (err) {
      // This will render the message to the user entering wrong input
      this.setState({ errorMessage: err.message });
    }
  };

  // No parentheses on the onSubmit function because we
  // do not want it to be executed right now

  // error property will appear only if the message is not ''
  // The !! transforms the string into its boolean equivalent
  render() {
    return(
    <Layout>
      <h3>Create a campaign</h3>

      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={this.state.minimumContribution}
            onChange={event =>
              this.setState({ minimumContribution: event.target.value })
            }
          />
        </Form.Field>

        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary>Create</Button>
      </Form>
    </Layout>
    )
  }
}

export default CampaignNew;
