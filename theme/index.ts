import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = {
	// define custom breakpoints
	// sm: '30em',
	// md: '48em',
	// lg: '62em',
	// xl: '80em'
}

const colors = {
	// add custom colors
	brand: {
		paper: {
			light: 'white',
			dark: '#292B2F'
		}
		// 	100: 'red',
		// 	200: 'red',
		// 	300: 'red',
		// 	400: 'red',
		// 	500: 'red',
		// 	600: 'red',
		// 	700: 'red',
		// 	800: 'red',
		// 	900: 'red'
	}
}

const config = {
	// adjust the config of the light/dark mode
	initialColorMode: 'dark',
	useSystemColorMode: true
}

const fonts = {
	// add custom fonts
	// body: `Inter,"Segoe UI"...`,
	// heading: `Inter,"Segoe UI"...`
}

const styles = {
	// add global styles
	global: (props: StyleFunctionProps) => ({
		body: {
			// example of changing both the background &
			// foreground color based on the color mode
			bg: mode('#F6F6F6', '#36393F')(props),
			color: mode('#292B30', '#ffffff')(props)
		},
		h1: {
			// example of changing a particular element's style
			// fontSize: '6xl',
			// color: mode('red.900', 'red.100')(props)
		}
	})
}

const overrides = { breakpoints, colors, config, fonts, styles }

const theme = extendTheme(overrides)

export default theme
