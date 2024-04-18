export enum ChainId {
  ETHEREUM = 1,
  // ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  BASE = 8453,
  MATIC = 137,
  // MATIC_TESTNET = 80001,
  FANTOM = 250,
  // FANTOM_TESTNET = 4002,
  // XDAI = 100,
  BSC = 56,
  // BSC_TESTNET = 97,
  ARBITRUM = 42161,
  // ARBITRUM_TESTNET = 79377087078960,
  // MOONBEAM_TESTNET = 1287,
  AVALANCHE = 43114,
  // AVALANCHE_TESTNET = 43113,
  // HECO = 128,
  // HECO_TESTNET = 256,
  // HARMONY = 1666600000,
  // HARMONY_TESTNET = 1666700000,
  // OKEX = 66,
  // OKEX_TESTNET = 65,
  // CELO = 42220,
  // PALM = 11297108109,
  // PALM_TESTNET = 11297108099,
  MOONRIVER = 1285,
  MANTLE = 5000,
  // FUSE = 122,
  // TELOS = 40,
  // HARDHAT = 31337,
  // MOONBEAM = 1284,
}

const ethereum = {
  chainId: ChainId.ETHEREUM,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: "https://rpc.ankr.com/eth"
}
const base = {
  chainId: ChainId.BASE,
  name: 'Coinbase',
  currency: 'ETH',
  explorerUrl: 'https://basescan.org',
  rpcUrl: "https://rpc.ankr.com/base"
}
const fantom = {
  chainId: ChainId.FANTOM,
  name: 'Fantom Opera',
  currency: 'FTM',
  explorerUrl: 'https://ftmscan.com',
  rpcUrl: "https://rpc.ankr.com/fantom"
}
const arbitrum = {
  chainId: ChainId.ARBITRUM,
  name: 'Arbitrum',
  currency: 'ETH',
  explorerUrl: 'https://arbiscan.io',
  rpcUrl:"https://rpc.ankr.com/arbitrum"
}
const avalanche = {
  chainId: ChainId.AVALANCHE,
  name: 'Avalanche',
  currency: 'AVAX',
  explorerUrl: 'https://snowtrace.io',
  rpcUrl: "https://rpc.ankr.com/avalanche"
}

const mantle = {
  chainId: ChainId.MANTLE,
  name: 'Mantle',
  currency: 'MNT',
  explorerUrl: 'https://mantlescan.info',
  rpcUrl: "https://rpc.ankr.com/mantle"
}

export const chains = [ethereum, base, mantle, fantom, arbitrum, avalanche]