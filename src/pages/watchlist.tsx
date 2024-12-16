import { DefiWatchlistContainer } from '~/containers/Watchlist/Defi'
import Layout from '~/layout'
import { maxAgeForNext } from '~/api'
import { withPerformanceLogging } from '~/utils/perf'

export const getStaticProps = withPerformanceLogging('watchlist', async () => {
	return {
		props: {},
		revalidate: maxAgeForNext([22])
	}
})

export default function Portfolio() {
	return (
		<Layout title={`Saved TVL Rankings - Dextracker`} defaultSEO>
			<DefiWatchlistContainer />
		</Layout>
	)
}