import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { StandardButton } from './StandardButton'

afterEach(cleanup)

describe('Standard button component', () => {
  it('Should render a standard button and be enabled', () => {
    render(<StandardButton text='text' onClick={() => {}} />)
    const standardButton = screen.getByRole('button', { name: /text/i })
    expect(standardButton).toBeEnabled()
  })

  // Si utilitzem async s'ha de fer servir el findBy...
  // Es fa servir async, perque quan es crea el component, en un principi esta enabled,
  // despres passa a disabled, per tant amb el async espera a que es posi disabled
  it('Should be disbled when enabled false', async () => {
    render(<StandardButton text='text' onClick={() => {}} enabled={false} />)
    const standardButton = await screen.findByRole('button', { name: /text/i })
    expect(standardButton).not.toBeEnabled()
  })

  it('Should fire onclick function when the button is pressed', async () => {
    const mockHandler = jest.fn()
    render(<StandardButton text='text' onClick={mockHandler} />)
    const standardButton = await screen.findByRole('button', { name: /text/i })
    userEvent.click(standardButton)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
