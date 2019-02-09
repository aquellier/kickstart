import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  // Next wants to be able to get the initial data without
  // rendering the component, hence this statis keyword
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  render () {

    return <div>{this.props.campaigns[0]}</div>
  }
}

export default CampaignIndex;
