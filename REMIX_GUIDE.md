# 🧪 Remix Deployment Guide

## Step 1: Open Remix
Go to [Remix IDE](https://remix.ethereum.org)

## Step 2: Create Contract File
- Click "+" to add `TransferBTT.sol`
- Paste the contract code from `contracts/TransferBTT.sol`

## Step 3: Compile
- Go to Solidity Compiler tab
- Choose 0.8.7 or later
- Click Compile

## Step 4: Deploy
- In Deploy tab, select environment (e.g. JavaScript VM)
- Click Deploy

## Step 5: Use Functions
- Call `setToken("0x...")` with token address
- Fund the contract with BTT tokens
- Call `transferTokens("recipient", amount)` to send tokens

