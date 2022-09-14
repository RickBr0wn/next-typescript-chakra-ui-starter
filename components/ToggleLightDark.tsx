import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ToggleLightDark(): JSX.Element {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<IconButton
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
			variant='ghost'
			aria-label={'Theme toggle switch'}
			role={'switch'}
		/>
	)
}
