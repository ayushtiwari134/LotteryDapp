const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  isCallTrace,
} = require("hardhat/internal/hardhat-network/stack-traces/message-trace");
describe("Lottery dapp", function () {
  describe("deployment", function () {
    it("Checks owner name", async function () {
      const Lottery = await ethers.getContractFactory("Lottery");
      const [owner] = await ethers.getSigners();
      const lottery = await Lottery.deploy();
      expect(await lottery.owner()).to.equal(owner.address);
    });
    it("Counts initial player count", async function () {
      const [owner] = await ethers.getSigners();
      const Lottery = await ethers.getContractFactory("Lottery");
      const lottery = await Lottery.deploy();
      expect(await lottery.playerCount()).to.equal(0);
    });
  });
});
