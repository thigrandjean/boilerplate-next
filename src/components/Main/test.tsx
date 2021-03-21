import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Should render color correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({
      backgroundColor: '#06092b'
    })
  })
})
