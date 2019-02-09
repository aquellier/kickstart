const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const constructPath = path.resolve(__dirname, 'construct');
// removeSync removes one folder and everything inside of it
fs.removeSync(constructPath);

// Getting the campaign path
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// Reading the code from that file
const source = fs.readFileSync(campaignPath, 'utf8');
// Contains 2 differents objects
// Output from compiling our contarct
// Output from compiling the campaign Factory
const output = solc.compile(source, 1).contracts;

// We have to recreate the folder we deleted
fs.ensureDirSync(constructPath);

console.log(output);
for (let contract in output) {
  fs.outputJsonSync(
    // I construct the path in which I want to save this
    path.resolve(constructPath, contract.replace(':', '') + '.json'),
    output[contract]
  );

}
