import { Abi, Address, getAddress } from 'viem'
import { sepolia } from 'wagmi'

import { simpleNftABI } from '../../abis/IGTokenizer'

export type ContractABIPair = {
	ADDRESS: Address
	ABI: Abi
}

// TODO: Add in contract deployments and their ABIs for each network supported
type ContractDeployments = {
	NFT_COLLECTION: ContractABIPair
}

const SEPOLIA: ContractDeployments = {
	// SimpleNFT: https://sepolia.etherscan.io/address/0x1cfD246a218b35e359584979dDBeAD1f567d9C88
	NFT_COLLECTION: {
		ADDRESS: getAddress('0x4333175bBe1De72298663670cF6E4945614CC62a', sepolia.id),
		ABI: simpleNftABI,
	},
}

const CONTRACTS = {
	SEPOLIA,
}

export default CONTRACTS
