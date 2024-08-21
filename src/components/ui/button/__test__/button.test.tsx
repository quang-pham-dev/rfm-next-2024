import { render, fireEvent } from '@testing-library/react'

import { Button } from '../index'

describe('Button test', () => {
  const button = render(<Button />)
  test('should render properly', () => {
    expect(button).toMatchSnapshot()
  })

  test('Should render the specified titleBtn and register the click', () => {
    const onClick = vi.fn()
    const titleBtn = 'This is a button'

    const { getByText, getByRole } = render(
      <Button onClick={onClick}>{titleBtn}</Button>,
    )

    const button = getByRole('button')

    expect(getByText(titleBtn)).toBeDefined()
    expect(button).toBeDefined()
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
