import { Box, Button, Paper, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'IGTokenizer dApp',
	description:
		'IGTokenizer is a decentralized application (dApp) that allows you to tokenize your Instagram posts as NFTs.',
}

const styles = {
	paper: {
		p: 4,
		textAlign: 'start',
		backgroundColor: 'transparent',
	},
	titleBox: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}

const DefaultPage = () => {
	return (
		<Paper sx={styles.paper}>
			<Box sx={styles.titleBox}>
				<Box>
					<Typography variant="h3" fontWeight={'bold'} gutterBottom>
						Welcome to IGTokenizer
					</Typography>
					<Typography variant="body1" gutterBottom>
						IGTokenizer is a decentralized application (dApp) that allows you to tokenize your Instagram posts as NFTs.
					</Typography>
				</Box>
				<img src="/igtknzr_logo.jpg" alt="IGTokenizer" width={300} />
			</Box>
			<Button variant="contained" color="primary" href="/dashboard" sx={{ mt: 2 }}>
				Start
			</Button>
		</Paper>
	)
}

export default DefaultPage
