/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-truffle5");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-gas-reporter");

if (!process.env.ALCHEMY_MAIN_API_KEY)
  throw new Error("ALCHEMY_MAIN_API_KEY missing from .env file");

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAIN_API_KEY}`,
        blockNumber: 12686302,
      },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
    currency: "USD",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 240000,
  },
};
