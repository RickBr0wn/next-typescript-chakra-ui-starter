import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import '@testing-library/jest-dom'
import { JSXElementConstructor, ReactElement, ReactNode } from 'react'

import Layout from './components/Layout'

interface _ChakraRendererProps {
	children: ReactNode
}

const ChakraRenderer = ({ children }: _ChakraRendererProps) => {
	return (
		<ChakraProvider>
			<ColorModeScript initialColorMode={'dark'} />
			<Layout>{children}</Layout>
		</ChakraProvider>
	)
}

const customRenderer = (
	ui: ReactElement<any, string | JSXElementConstructor<any>>,
	options?: RenderOptions<
		typeof import('@testing-library/dom/types/queries'),
		HTMLElement,
		HTMLElement
	>
) =>
	render(ui, {
		wrapper: ChakraRenderer,
		...options
	})

export * from '@testing-library/react'
export { customRenderer as render }
