import React, { Component } from 'react';
import { Form, Button, Input, Message, Icon } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaigns'
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class newRequest extends Component {
  state = {
    description: '',
    value: '',
    recipient: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await campaigns.methods.createRequest(description, web3.utils.toWei(value,'ether'), recipient).send({
        from: accounts[0]
      });
    } catch (err) {}
  }

  render() {
    return (
      <Layout>
        <h3>Create New Request</ h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Request Description</label>
            <Input icon="file text" iconPosition="left" value={this.state.description} onChange={event => this.setState({ description: event.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input icon="money" iconPosition="left" value={this.state.value} onChange={event => this.setState({ value: event.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>Recepient of Funds</label>
            <Input icon="users" iconPosition="left" value={this.state.recipient} onChange={event => this.setState({ recipient: event.target.value })} />
          </Form.Field>
          <Button icon labelPosition="left" primary>Create Request
          <Icon name="plus" />
          </ Button>
        </ Form>
      </ Layout>
    );
  }
}

export default newRequest;
