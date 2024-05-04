import { Paper, Typography } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'IGTokenizer dApp',
	description:
		'IGTokenizer is a decentralized application (dApp) that allows you to tokenize your Instagram posts as NFTs.',
}

const styles = {
	paper: {
		p: 4,
		textAlign: 'center',
	},
}

const DefaultPage = () => {
	return (
		<Paper sx={styles.paper}>
			<Typography variant="h4" gutterBottom>
				Home Page
			</Typography>
			<Typography>Put some info here</Typography>
		</Paper>
	)
}

export default DefaultPage
