import { render, screen } from '@testing-library/react'
import Home from '@pages/index'

describe('Home', () => {
    it('render index page', () => {
        render(<Home />)

        const bodyText = screen.getByText('홈').textContent
        expect(bodyText).toBe('홈')
    })
})
