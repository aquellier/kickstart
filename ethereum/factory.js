import web3 from './web3';
import CampaignFactory from './construct/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x4d41d01B73dC89e026c56CA0fc9a94AAC3A23c19'
)

export default instance;

// If we need to access our deployed factory instance from
// somewhere else in the app we can import this file instead
// of going through the whole process
