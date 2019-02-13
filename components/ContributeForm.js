import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

class ContributeForm extends Component {
  state = {
    value: ''
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to Contribute:</label>
          <Input
            value="{this.state.value}"
            onchange={event => this.setState ({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
          <Button primary>
            Contribute
          </Button>
        </Form.Field>
      </Form>
    )
  }
}

export default ContributeForm;
