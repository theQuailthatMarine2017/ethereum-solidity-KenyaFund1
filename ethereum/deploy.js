const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/:Factory.json');
const provider = new HDWalletProvider(
  'crawl diamond shiver more alien history boring outside sudden vintage budget million',
  'https://rinkeby.infura.io/v3/a2ebdaeec917487cbdb50d1b80edb86a'
);
const web3 = new Web3(provider);

const deploy = async() => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account: ',accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data:compiledFactory.bytecode})
    .send({gas: 1000000,from: accounts[0]});

  console.log('Contract Deployed to: ',result.options.address);
};
deploy();
