import { Button, Typography } from '@mui/material'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useConnect } from 'wagmi'

const styles = {
	button: {
		py: 1,
	},
	walletText: {
		pl: 1,
	},
}

const ConnectWalletButton = (): JSX.Element => {
	const { error } = useConnect()
	const { open } = useWeb3Modal()

	return (
		<>
			{error && (
				<Typography color="error" mr={2}>
					{error.message}
				</Typography>
			)}
			<Button
				id="connect-wallet-button"
				variant="contained"
				color="primary"
				size="small"
				sx={styles.button}
				onClick={() => addTextAndOverlay('background.jpg', '0xE23131232423424234H32H4D32', 'C5r2ACGtTuP')}
			>
				Connect Wallet
			</Button>
		</>
	)
}

export default ConnectWalletButton
