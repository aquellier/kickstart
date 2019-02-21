import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestsCount = await campaign.methods.getRequestsCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestsCount)).fill().map((element, index) => {
        return campaign.methods.requests(index).call();
      })
    );

    return { address, requests, requestsCount };
  }
  render() {
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>
              New Request
            </Button>
          </a>
        </Link>
      </Layout>
    )
  }
}

export default RequestIndex;
