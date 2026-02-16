async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const tokenFactory = await ethers.getContractFactory("Token");
  const token = await tokenFactory.deploy();
  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();
  console.log("Token deployed to:", tokenAddress);

  const name = await token.name();
  const symbol = await token.symbol();
  const totalSupply = await token.totalSupply();

  console.log(`Token metadata => ${name} (${symbol}), supply: ${totalSupply}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
