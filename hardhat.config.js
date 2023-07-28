/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
const PRIVATE_KEY =
  "8140ff0edef8e47e619662f58864713f0866ea134b5c41cca890f8b3af187915";
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/oXvJIBhd6JaRbM8jSzZzHT-_Ezqp8zLm",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/i7qaAE3oeyKHgdXQ_I3EKJ_NliivPghp",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.19",
};

//
