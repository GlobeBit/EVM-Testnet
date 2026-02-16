# EVM-Testnet

A cleaned-up Hardhat starter project for deploying and testing a simple ERC20-like token on EVM testnets.

## Cleanup proposal (implemented)

1. **Standardize project structure and scripts**
   - Add working Hardhat config and reusable network settings.
   - Add npm scripts for compile, test, deploy, clean, and accounts.
2. **Improve smart contract baseline quality**
   - Keep the token simple, but add `transferFrom` and internal transfer logic.
   - Add missing events/validations expected from ERC20-like behavior.
3. **Make deployment repeatable**
   - Add a deploy script that prints deployed address and metadata.
4. **Add automated tests**
   - Cover deployment, transfer, approve, transferFrom, and negative cases.
5. **Reduce repo noise**
   - Add `.gitignore` and remove generated cache artifacts.
   - Keep `BasicContractStructure` as reference, but clearly mark it as legacy.

## Quick start

```bash
npm install
cp .env.example .env
npx hardhat compile
npx hardhat test
```

## Available commands

```bash
npm run compile
npm run test
npm run accounts
npm run deploy:local
npm run deploy:sepolia
npm run deploy:amoy
npm run clean
```

## Environment variables

See `.env.example`.

At minimum for testnet deploys:
- `PRIVATE_KEY`
- `SEPOLIA_RPC_URL` or `AMOY_RPC_URL`

Optional verification:
- `ETHERSCAN_API_KEY`
- `POLYGONSCAN_API_KEY`
