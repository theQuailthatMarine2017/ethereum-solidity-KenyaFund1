import web3 from './web3';
import Factory from './build/:Factory.json';

const instance = new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '0xcbA018d1506CA46EdEf78c899667d72a64531eF7'
);

export default instance;
