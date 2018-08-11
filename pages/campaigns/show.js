import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaigns';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requests: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      approversCount,
      requests
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Campaign Manager`s Address',
        description: 'The address above belongs to the Manager who created this contract.',
        style: { overflowWrap: 'break-word'}
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution',
        description: 'The minimum contribution amount required to become a Contributor.'
      },
      {
        header: requests,
        meta: 'Requests made by Manager.',
        description: 'Once half of all Contributors approve the request Manager is allowed to withdraw the requested funds.'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Account Balance (Ether)',
        description: 'Amount contributed so far by Contributors.'
      },
      {
        header: approversCount,
        meta: 'Contributors',
        description: 'Total number of Contributors to this campaign.'
      }
    ];

    return <Card.Group items={items} />;
  };

  render() {
    return(
      <Layout>
      <h4>Campaign Details</h4>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>
          <Grid.Column width={6}>
          <ContributeForm address={ this.props.address }/>
          </Grid.Column>
          </ Grid.Row>

        <Grid.Row>
        <Grid.Column>
          <Link route={`/campaigns/${this.props.address}/requests`}>
            <a>
            <Button primary>View Requests</Button>
            </a>
          </ Link>
        </ Grid.Column>
        </Grid.Row>
      </Grid>
      </Layout>
    );
  };
};

export default CampaignShow;
