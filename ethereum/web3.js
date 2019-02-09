import Web3 from 'web3';


let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser AND metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not running Metamask
  // This means we have to create our own provider
  const provider = Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/a9ebfe2f4f374d69ba01d686cd0e9c4f'
  )
  web3 = new Web3(provider);
}

export default web3;
