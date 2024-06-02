'use client'
import { Box, Button, Grid, Input, Paper, Typography } from '@mui/material'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import axios from 'axios'
import { useState } from 'react'
import { useAccount } from 'wagmi'

import { useContract } from '@/components/ContractProvider'

const styles = {
	paper: {
		p: 4,
		textAlign: 'start',
	},
	button: {
		display: 'block',
		my: 2,
		mx: 'auto',
	},
}

const Dashboard: React.FC = () => {
	// State
	const [nftName, setNftName] = useState<string>('')
	const [tokenUri, setTokenUri] = useState<string>('')
	const [igPostUrl, setIgPostUrl] = useState<string>('')
	const [verificationHash, setVerificationHash] = useState<string>('')
	const [stepProcess, setStepProcess] = useState<number>(0)
	const [stepProcessText, setStepProcessText] = useState<string>('')
	const [metadataNFT, setMetadataNFT] = useState<string>('')
	const [nftId, setNFTId] = useState<string>('')
	// Hooks
	const { nft, executeContractRead, executeContractWrite } = useContract()
	const { address, isConnected } = useAccount()
	const { open } = useWeb3Modal()

	// Handlers
	const handleGetPostHash = async () => {
		const postId = extractPostId(igPostUrl)
		console.log({ postId })
		try {
			if (!isConnected) return open()

			const [result, hash] = await executeContractWrite({
				address: nft.address,
				abi: nft.abi,
				functionName: 'generateTokenId',
				args: [postId],
			})

			console.log({ result, hash })
			if (result && (result as any[]).length > 0) {
				const vHash = (result as any[])[0]
				const postId = (result as any[])[1]
				console.log('First value of result:', vHash)
				const link = `https://testnets.opensea.io/es/assets/sepolia/0x4333175bbe1de72298663670cf6e4945614cc62a/${postId}`
				setVerificationHash(vHash.toString())
				setNFTId(link)
			}
		} catch (e) {
			console.error(e)
		}
	}

	const handleMintNFT = async () => {
		try {
			console.log('Minting NFT with metadata:', metadataNFT)
			const result = await executeContractWrite({
				address: nft.address,
				abi: nft.abi,
				functionName: 'mint',
				args: [extractPostId(igPostUrl), metadataNFT],
			})
			console.log({ result })
		} catch (e) {
			console.error(e)
		}
	}

	function extractPostId(url: string) {
		const regex = /\/p\/([^\/]+)\//
		const match = url.match(regex)
		if (match && match[1]) {
			return match[1]
		} else {
			return null
		}
	}

	const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIgPostUrl(e.target.value)
	}

	const handleGetName = async () => {
		try {
			setNftName('')
			const result = (await executeContractRead({ address: nft.address, abi: nft.abi, functionName: 'name' })) as string
			setNftName(result)
		} catch (e) {
			console.error(e)
		}
	}

	const handleGetTokenURI = async (tokenId: number) => {
		try {
			setTokenUri('')
			const result = (await executeContractRead({
				address: nft.address,
				abi: nft.abi,
				functionName: 'tokenURI',
				args: [tokenId],
			})) as string
			setTokenUri(result)
		} catch (e) {
			console.error(e)
		}
	}

	const buildNFTMetadata = async () => {
		setStepProcess(1)
		setStepProcessText('Generating NFT Image and uploading to IPFS...')
		const postId = extractPostId(igPostUrl)
		console.log({ postId })
		const response = await axios.post(
			'http://localhost:3001/process-image',
			{
				ownerWallet: address,
				igpostId: postId,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
		const imageIPFSHash = response.data.data.IpfsHash
		setStepProcessText('NFT Image generated and uploaded to IPFS with hash: ' + imageIPFSHash)
		console.log('Image IPFS Hash:', imageIPFSHash)
		setStepProcessText('Generating NFT Metadata and uploading to IPFS...')
		const sReponse = await axios.post(
			'http://localhost:3001/process-metadata',
			{
				imageHash: imageIPFSHash,
				igpostId: postId,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		)
		const metadataIPFSHash = sReponse.data.data.IpfsHash
		setStepProcessText('NFT Metadata generated and uploaded to IPFS with hash: ' + metadataIPFSHash)
		setMetadataNFT(metadataIPFSHash)
		console.log('Metadata IPFS Hash:', metadataIPFSHash)
		setStepProcess(2)
	}

	return (
		<>
			<Paper sx={styles.paper}>
				<Typography variant="h4" fontWeight={'bold'} gutterBottom>
					IGTokenizer Dashboard
				</Typography>
				{stepProcess === 0 && (
					<>
						<Typography variant="h6">
							To start with the minting process, first make Instagram Post Public, then input input the Instagram Image
							url below:
						</Typography>
						<Input placeholder="Instagram Image URL" fullWidth onChange={handleOnChangeInput} />
						{!verificationHash && (
							<Button onClick={handleGetPostHash} variant="contained" sx={styles.button}>
								Get Post Verification Hash
							</Button>
						)}
						{verificationHash &&
							(console.log('Verification Hash:', verificationHash),
							(
								<>
									<Typography variant="body1">
										To verify that you are the owner, you need to add the following hash to the description of the
										Instagram post. Otherwise the mint will fail and you won't receive the NFT.
									</Typography>
									<Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
										<Typography variant="body1">Verification Hash:</Typography>
										<Box p={1} ml={3} borderColor={'#A020F0'} border={1.5} borderRadius={2}>
											<Typography variant="body1" fontWeight={'bold'}>
												{verificationHash}
											</Typography>
										</Box>
									</Box>
									<Typography variant="body1">After adding the hash, continue with the process.</Typography>
									<Button onClick={buildNFTMetadata} variant="contained" sx={styles.button}>
										Continue
									</Button>
								</>
							))}
					</>
				)}
				{stepProcess === 1 && (
					<>
						<Typography variant="h6">{stepProcessText}</Typography>
					</>
				)}
				{metadataNFT && stepProcess == 2 && (
					<>
						<Typography variant="h6">
							NFT Image and Metadata generated and uploaded to IPFS. Now you can mint the NFT.
						</Typography>
						<Typography variant="h6">
							If you did everything correctly, you should see the NFT in your OpenSea account after minting.
						</Typography>
						<Typography variant="h6">
							Your NFT will be viewed from here: <a href={nftId}>NFT</a>
						</Typography>
						<Button onClick={handleMintNFT} variant="contained" sx={styles.button}>
							Mint NFT
						</Button>
					</>
				)}
			</Paper>
		</>
	)
}

export default Dashboard
