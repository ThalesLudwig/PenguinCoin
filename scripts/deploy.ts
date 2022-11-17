import { ethers } from "hardhat";

async function main() {
  const PenguinCoinContract = await ethers.getContractFactory("PenguinCoin");
  const penguinCoin = await PenguinCoinContract.deploy(100000000, 50);
  await penguinCoin.deployed();
  console.log("Token deployed: ", penguinCoin.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
