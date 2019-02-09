import web3 from './web3';
import CampaignFactory from './construct/CampaignFactory.json';

const instace = web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x314EeF11c0ee8D51F8a62da78543eFD58FAC58c0'
)

export default instance;

// If we need to access our deployed factory instance from
// somewhere else in the app we can import this file instead
// of going through the whole process
