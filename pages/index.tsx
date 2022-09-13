import type { NextPage } from 'next'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
	return (
		<div>
			<main>
				<Welcome />
			</main>
		</div>
	)
}

export default Home
