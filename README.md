# Web4Asset NFT

A production-ready ERC721 NFT smart contract with metadata support, role-based minting, and deployable using Hardhat.

## Features

- `ERC721URIStorage` NFT contract
- Owner-only minting
- IPFS-ready metadata
- Base URI management
- Hardhat deployment script

## Setup

```bash
npm install
npx hardhat compile
```

## Deploy

Update `.env`:

```
PRIVATE_KEY=your_private_key
ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/your-key
```

Then run:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```
