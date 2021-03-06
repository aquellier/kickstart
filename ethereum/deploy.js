const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./construct/CampaignFactory.json');

const provider = new HDWalletProvider(
  'build venture together bench cable become yard imitate arrive churn say siren',
  'https://rinkeby.infura.io/v3/a9ebfe2f4f374d69ba01d686cd0e9c4f'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode }) // add bytecode
    .send({ from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
