import { Flex } from '@chakra-ui/react'
import Navbar from './Navbar'

interface _LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: _LayoutProps): JSX.Element => {
	return (
		<Flex h={'100vh'} w={'100vw'} flexDir={'column'}>
			<Navbar /> {/* This navbar is 80px tall */}
			{children}
		</Flex>
	)
}

export default Layout
