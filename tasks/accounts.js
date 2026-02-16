const { task } = require("hardhat/config");

task("accounts", "Prints the list of available accounts", async (_, hre) => {
  const accounts = await hre.ethers.getSigners();

  accounts.forEach((account, index) => {
    console.log(`${index}: ${account.address}`);
  });
});
