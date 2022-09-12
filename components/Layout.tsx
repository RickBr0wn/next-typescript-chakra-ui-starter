import { Box, Flex, Spacer } from '@chakra-ui/react'
import Navbar from './Navbar'
import ToggleLightDark from './ToggleLightDark'

interface _LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: _LayoutProps): JSX.Element => {
	return (
		<Flex
			h={'100vh'}
			w={'100vw'}
			justifyContent={'center'}
			alignItems={'center'}
			flexDir={'column'}
		>
			<Navbar />
			<Spacer />
			{children}
			<Spacer />
		</Flex>
	)
}

export default Layout
