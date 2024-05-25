import type { Metadata } from 'next'

import Dashboard from '@/components/Dashboard'

export const metadata: Metadata = {
	title: 'IGTokenizer dApp',
	description:
		'IGTokenizer is a decentralized application (dApp) that allows you to tokenize your Instagram posts as NFTs.',
}

const DashboardPage = () => {
	return <Dashboard />
}

export default DashboardPage
