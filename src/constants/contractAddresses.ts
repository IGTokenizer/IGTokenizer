import { Abi, Address, getAddress } from 'viem'
import { sepolia } from 'wagmi'

import { simpleNftABI } from '../../abis/IGTokenizer'

export type ContractABIPair = {
	ADDRESS: Address
	ABI: Abi
}

type ContractDeployments = {
	NFT_COLLECTION: ContractABIPair
}

const SEPOLIA: ContractDeployments = {
	NFT_COLLECTION: {
		ADDRESS: getAddress('0x4333175bBe1De72298663670cF6E4945614CC62a', sepolia.id),
		ABI: simpleNftABI,
	},
}

const CONTRACTS = {
	SEPOLIA,
}

export default CONTRACTS
