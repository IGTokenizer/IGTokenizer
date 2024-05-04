'use client'
import { Box, Link, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const styles = {
	wrap: {
		p: 2,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '72px',
		backgroundColor: grey[900],
	},
}

const AppFooter = () => {
	return (
		<Box sx={styles.wrap}>
			<Typography variant="caption">
				&copy;{new Date().getFullYear()}&nbsp;|&nbsp;made by{' '}
				<Link href="https://faysalbadaoui.com" target="_blank" underline="always" color="inherit">
					Faysal Badaoui Mahdad
				</Link>
			</Typography>
		</Box>
	)
}

export default AppFooter
