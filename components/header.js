import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{marginTop:'15px'}}>
      <Link route="/">
      <a className="item">KenyaFund</a>
      </Link>
      <Menu.Menu position="right">
      <Menu.Item>Campaigns</Menu.Item>
      <Link route="/campaigns/newCampaign">
      <a className="item">+</a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};
