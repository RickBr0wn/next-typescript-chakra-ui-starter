import { screen } from '@testing-library/react'
import { render } from '../test-utils'

import Home from '../pages'

describe('Home', () => {
	it('should render a main section', () => {
		render(<Home />)
		expect(screen.getByRole('main')).toBeInTheDocument()
		expect(screen.getByRole('main')).toHaveTextContent(/welcome/i)
	})

	it('should render a nav', () => {
		render(<Home />)
		expect(screen.getByRole('navigation')).toBeInTheDocument()
	})

	it('should render a toggle light/dark button', () => {
		render(<Home />)
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})

	it('should display 4 headings', () => {
		render(<Home />)
		expect(screen.getAllByRole('heading')).toHaveLength(4)
	})

	it('should display all of the headings correctly', () => {
		const headings = [
			/welcome to this/i,
			/next.js typescript & chakra-ui/i,
			/starter/i,
			/🚀/i
		]
		render(<Home />)
		expect(screen.getAllByRole('heading')[0]).toHaveTextContent(headings[0])
		expect(screen.getAllByRole('heading')[1]).toHaveTextContent(headings[1])
		expect(screen.getAllByRole('heading')[2]).toHaveTextContent(headings[2])
		expect(screen.getAllByRole('heading')[3]).toHaveTextContent(headings[3])
	})
})
