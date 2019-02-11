import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false
  }

  // Whenever we call a function on a contract
  // it is always going to be asynchronous
  onSubmit = async (event) => {
    // Prevent from submitting the form when event occurs
    event.preventDefault();

    // Starting the spinner
    this.setState({ loading: true, errorMessage: '' })
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });
    Router.pushRoute('/');
    } catch (err) {
      // This will render the message to the user entering wrong input
      this.setState({ errorMessage: err.message });
    }

    // Stopping the spinner
    this.setState({ loading: false })
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
        <Button loading={this.state.loading} primary>Create</Button>
      </Form>
    </Layout>
    )
  }
}

export default CampaignNew;
