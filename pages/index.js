import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';

  // Next wants to be able to get the initial data without
  // rendering the component, hence this statis keyword
class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      }
    });

    return <Card.Group items={items}/>
  }
  render () {
    return <div>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
      {this.renderCampaigns()}
      <Button
        content="Create campaign"
        icon="add circle"
        primary
      />
    </div>
  }
}

export default CampaignIndex;
