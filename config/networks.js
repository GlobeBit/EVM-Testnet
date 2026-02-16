const parseChainId = (value, fallback) => {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
};

const makeNetworkConfig = (url, privateKey, chainId) => {
  if (!url || !privateKey) {
    return undefined;
  }

  return {
    url,
    accounts: [privateKey],
    chainId,
  };
};

const networks = {
  hardhat: {},
};

const sepolia = makeNetworkConfig(
  process.env.SEPOLIA_RPC_URL,
  process.env.PRIVATE_KEY,
  parseChainId(process.env.SEPOLIA_CHAIN_ID, 11155111)
);

if (sepolia) {
  networks.sepolia = sepolia;
}

const amoy = makeNetworkConfig(
  process.env.AMOY_RPC_URL,
  process.env.PRIVATE_KEY,
  parseChainId(process.env.AMOY_CHAIN_ID, 80002)
);

if (amoy) {
  networks.amoy = amoy;
}

const etherscan = {
  apiKey: {
    sepolia: process.env.ETHERSCAN_API_KEY || "",
    polygonAmoy: process.env.POLYGONSCAN_API_KEY || "",
  },
};

module.exports = {
  networks,
  etherscan,
};
