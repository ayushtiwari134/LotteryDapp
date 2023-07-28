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
//0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 localhost
