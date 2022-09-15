import {
	Code,
	Flex,
	Heading,
	Spacer,
	Text,
	useColorMode
} from '@chakra-ui/react'

const Welcome = (): JSX.Element => {
	const { colorMode } = useColorMode()
	const paperColor =
		colorMode === 'light' ? 'brand.paper.light' : 'brand.paper.dark'
	return (
		<Flex flexDir={'column'} align={'center'} h={'calc(100vh - 80px)'}>
			{/* 80px is the height of the navbar */}
			<Spacer />
			<Flex
				flexDir={'column'}
				bg={paperColor}
				p={6}
				borderRadius={'lg'}
				align={'center'}
			>
				<Heading>Welcome to this</Heading>
				<Heading color={'green.400'}> Next.js Typescript & Chakra-UI</Heading>
				<Heading>starter</Heading>
			</Flex>
			<Flex flexDir={'column'} align={'center'} margin={'20px 0'} gap={1}>
				<Text mb={4}>Get started by editing:</Text>
				<Code>pages/index.tsx</Code>
				<Code>theme/theme.ts</Code>
				<Code>components/Layout.tsx</Code>
				<Code>components/Welcome.tsx</Code>
				<Code>components/Navbar.tsx</Code>
			</Flex>
			<Text>Enjoy!</Text>
			<Heading mt={6}>🚀</Heading>
			<Spacer />
		</Flex>
	)
}

export default Welcome
