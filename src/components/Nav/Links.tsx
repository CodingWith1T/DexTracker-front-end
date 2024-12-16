import { ReactNode } from 'react'
import { IS_PRO_API_ENABLED } from '~/containers/ProApi/lib/constants'
import { Icon } from '~/components/Icon'

export interface IMainLink {
	name: string
	path: string
	newTag?: boolean
}

interface IFooterLink {
	name: string
	path: string
	external?: boolean
	newTag?: boolean
	referrer?: boolean
}

interface IButtonLink {
	name: string
	onClick: () => void
}

interface ILinks {
	[key: string]: {
		main: Array<IMainLink>
		tools: Array<IFooterLink | IButtonLink>
		footer: Array<IFooterLink | IButtonLink>
		icon: ReactNode
		newTag?: boolean
	}
}

export const defaultToolsAndFooterLinks = {
	tools: [
		// { name: 'Watchlist', path: '/watchlist' },
		// { name: 'Directory', path: '/directory' },
		// {
		// 	name: 'Roundup',
		// 	path: '/roundup'
		// },
		// { name: 'Trending Contracts', path: '/trending-contracts' },
		// {
		// 	name: 'Token Liquidity',
		// 	path: '/liquidity',
		// 	external: true
		// },
		// { name: 'Correlation', path: '/correlation', newTag: true },
	],
	footer: [
		// { name: 'About / Contact', path: '/about' },
		// {
		// 	name: 'Twitter',
		// 	path: 'https://twitter.com/Dextracker',
		// 	external: true
		// },
		// {
		// 	name: 'Discord',
		// 	path: 'https://discord.Dextracker.com',
		// 	external: true
		// },
		// {
		// 	name: 'Donate',
		// 	path: '/donations'
		// }
		// {
		// 	name: 'Reports',
		// 	path: '/reports'
		// }
	]
}

export const navLinks: ILinks = {
	DeFi: {
		main: [
			{ name: 'Overview', path: '/' },
			// { name: 'Chains', path: '/chains' },
			// { name: 'Bridged TVL', path: '/bridged' },
			// { name: 'Compare Chains', path: '/compare?chains=Optimism&chains=Arbitrum' },
			// { name: 'Airdrops', path: '/airdrops' },
			// { name: 'Treasuries', path: '/treasuries', newTag: true },
			// { name: 'Oracles', path: '/oracles' },
			// { name: 'Forks', path: '/forks' },
			{ name: 'Top Protocols', path: '/top-protocols' },
			{ name: 'Comparison', path: '/comparison?protocol=MakerDAO&protocol=Curve+DEX' },
			{ name: 'Protocol Expenses', path: '/expenses' },
			{ name: 'Token Usage', path: '/tokenUsage?token=ETH' },
			{ name: 'Categories', path: '/categories' },
			{ name: 'Recent', path: '/recent' },
			{ name: 'Languages', path: '/languages' },
			{ name: 'Token PNL', path: '/token-pnl', newTag: true }
		],
		...defaultToolsAndFooterLinks,
		icon: <Icon name="bar-chart-2" height={16} width={16} />
	},
	Yields: {
		main: [
			{ name: 'Pools', path: '/yields' },
			{ name: 'Delta Neutral', path: '/yields/strategy' },
			{ name: 'Long-Short Strats', path: '/yields/strategyLongShort' },
			{ name: 'Leveraged Lending', path: '/yields/loop' },
			{ name: 'Overview', path: '/yields/overview' },
			{ name: 'Stablecoin Pools', path: '/yields/stablecoins' },
			{ name: 'Projects', path: '/yields/projects' },
			// { name: 'Halal', path: '/yields/halal' }
		],
		tools: [
			{ name: 'Watchlist', path: '/yields/watchlist' },
			{ name: 'Directory', path: '/directory' },
			{
				name: 'Roundup',
				path: '/roundup'
			},
			{ name: 'Trending Contracts', path: '/trending-contracts', newTag: true },
			{
				name: 'Token Liquidity',
				path: '/liquidity',
				newTag: true,
				external: true
			},
			{ name: 'Correlation', path: '/correlation', newTag: true },
			{
				name: 'Wiki',
				path: 'https://wiki.Dextracker.com/wiki/Main_Page',
				external: true
			},
			{
				name: 'Press / Media',
				path: '/press'
			},
			{
				name: 'API Docs',
				path: '/docs/api'
			},
			{ name: 'List your protocol', path: 'https://github.com/CodingWith1T/yield-server#readme', external: true },
			{
				name: 'Download Data',
				path: 'https://datasets.llama.fi/yields/yield_rankings.csv'
			}
		],
		footer: [
			{ name: 'About CryptDash', path: '/about' },
			{
				name: 'Twitter',
				path: 'https://twitter.com/Dextracker',
				external: true
			},
			{
				name: 'Discord',
				path: 'https://discord.Dextracker.com',
				external: true
			},
			{
				name: 'Donate',
				path: '/donations'
			}
		],
		icon: <Icon name="percent" height={16} width={16} />
	},
	// 'CryptDash Swap': {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="repeat" height={16} width={16} />
	// },
	// LlamaFeed: {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="align-left" height={16} width={16} />
	// },
	// NFT: {
	// 	main: [
	// 		{ name: 'Collections', path: '/nfts' },
	// 		{ name: 'Marketplaces', path: '/nfts/marketplaces' },
	// 		{ name: 'Earnings', path: '/nfts/earnings' }
	// 	],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="image" height={16} width={16} />
	// },
	// Unlocks: {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="unlock" height={16} width={16} />,
	// 	newTag: true
	// },
	// 'Borrow Aggregator': {
	// 	main: [
	// 		{ name: 'Basic', path: '/borrow', newTag: true },
	// 		{ name: 'Advanced', path: '/borrow/advanced' }
	// 	],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="search" height={16} width={16} />
	// },
	// 'CEX Transparency': {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="book-open" height={16} width={16} />
	// },
	// Bridges: {
	// 	main: [
	// 		{ name: 'Overview', path: '/bridges' },
	// 		{ name: 'Chains', path: '/bridges/chains' },
	// 		{ name: 'Transactions', path: '/bridge-transactions', newTag: true }
	// 	],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="shuffle" height={16} width={16} />
	// },
	Governance: {
		main: [],
		...defaultToolsAndFooterLinks,
		icon: <Icon name="file-text" height={16} width={16} />,
		newTag: true
	},
	Liquidations: {
		main: [],
		...defaultToolsAndFooterLinks,
		icon: <Icon name="droplet" height={16} width={16} />
	},
	// Volumes: {
	// 	main: [
	// 		{ name: 'DEXs', path: '/dexs' },
	// 		// { name: 'Chains', path: '/dexs/chains' },
	// 		{ name: 'Aggregators', path: '/aggregators', newTag: true },
	// 		{ name: 'Perps', path: '/perps' },
	// 		{ name: 'Perps (Chains)', path: '/perps/chains' },
	// 		{ name: 'Perp Aggregators', path: '/perps-aggregators', newTag: true },
	// 		{ name: 'Options', path: '/options' },
	// 		{ name: 'Options (Chains)', path: '/options/chains' },
	// 		{ name: 'Bridge Aggregators', path: '/bridge-aggregators', newTag: true }
	// 	],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="bar-chart" height={16} width={16} />
	// },
	// 'Fees/Revenue': {
	// 	main: [
	// 		{ name: 'Simple', path: '/fees/simple' },
	// 		{ name: 'Advanced', path: '/fees' }
	// 	],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="pie-chart" height={16} width={16} />
	// },
	// Raises: {
	// 	main: [
	// 		{ name: 'Overview', path: '/raises' },
	// 		{ name: 'Investors', path: '/raises/investors' }
	// 	],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="book" height={16} width={16} />
	// },
	// Stables: {
	// 	main: [
	// 		{ name: 'Overview', path: '/stablecoins' },
	// 		{ name: 'Chains', path: '/stablecoins/chains' }
	// 	],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="dollar-sign" height={16} width={16} />
	// },
	// Hacks: {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="shield-off" height={16} width={16} />
	// },
	// 'ETH Liquid Staking': {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="layers" height={16} width={16} />
	// },
	// ETFs: {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="trending-up" height={16} width={16} />
	// },
	// 'Narrative Tracker': {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <Icon name="eye" height={16} width={16} />,
	// 	newTag: true
	// }
	// NFTs: {
	// 	main: [],
	// 	...defaultToolsAndFooterLinks,
	// 	icon: <FeatherImage height={16} width={16} />
	// }
}

if (IS_PRO_API_ENABLED) {
	navLinks['Pro API'] = {
		main: [],
		...defaultToolsAndFooterLinks,
		icon: <Icon name="file-plus" height={16} width={16} />,
		newTag: true
	}
}

export const linksWithNoSubMenu = [
	// { name: 'Liquidations', url: '/liquidations/eth' },
	// { name: 'Hacks', url: '/hacks' },
	// { name: 'Unlocks', url: '/unlocks' },
	// { name: 'Governance', url: '/governance' },
	// { name: 'CEX Transparency', url: '/cexs' },
	// { name: 'CryptDash Swap', url: 'https://swap.Dextracker.com/', external: true },
	// { name: 'LlamaFeed', url: 'https://feed.Dextracker.com/', external: true },
	// { name: 'ETH Liquid Staking', url: '/lsd' },
	// { name: 'ETFs', url: '/etfs' },
	// { name: 'Pro API', url: '/pro-api' },
	// { name: 'Narrative Tracker', url: '/narrative-tracker' }
]
