import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }
  render() {
    return (
      <Layout>
        <h3>Withdrawal Requests</h3>
          <Link route={`/campaigns/${this.props.address}/requests/newRequest`}>
            <a>
              <Button icon labelPosition="left" primary>
              <Icon name="plus" />
              Create Request
              </Button>
            </a>
          </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
