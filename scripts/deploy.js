const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy();
  console.log("Address:", lottery.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//0xD0dc1de3521B20F4157CDD8cC326e5D50f36f4eA sepolia
//0x5FbDB2315678afecb367f032d93F642f64180aa3 localhost
