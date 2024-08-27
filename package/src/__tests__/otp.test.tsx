import { render, screen, fireEvent } from '@testing-library/react'
import OtpKit, { OtpKitProps } from './../App'
import { describe, it, expect, vi } from 'vitest'

describe('OtpKit Component', () => {
  const setup = (props: Partial<OtpKitProps> = {}) => {
    const initialProps: OtpKitProps = {
      value: '',
      onChange: vi.fn(),
      type: 'text',
      ...props,
    }
    return render(<OtpKit {...initialProps} />)
  }

  it('renders the correct number of inputs', () => {
    setup({ numOfInputs: 4 })
    expect(screen.getAllByRole('textbox')).toHaveLength(4)
  })

  it('focuses the first input on render when autoFocus is true', () => {
    setup({ autoFocus: true })
    expect(screen.getAllByRole('textbox')[0]).toHaveFocus()
  })

  it('calls onChange with the correct value when input is entered', () => {
    const handleChange = vi.fn()
    setup({ onChange: handleChange })

    const firstInput = screen.getAllByRole('textbox')[0]
    fireEvent.change(firstInput, { target: { value: '1' } })

    expect(handleChange).toHaveBeenCalledWith('1')
  })

  it('disables the submit button when not all inputs are filled', () => {
    setup({ submitOtpButton: { show: true } })
    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeDisabled()
  })

  it('enables the submit button when all inputs are filled', () => {
    const handleChange = vi.fn()
    setup({ numOfInputs: 4, onChange: handleChange })

    const inputs = screen.getAllByRole('textbox')
    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: `${index + 1}` } })
    })

    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeEnabled()
  })

  it('submits the form when submit button is clicked', () => {
    const handleChange = vi.fn()
    setup({ numOfInputs: 4, onChange: handleChange })

    const inputs = screen.getAllByRole('textbox')
    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: `${index + 1}` } })
    })

    const submitButton = screen.getByRole('button', { name: /submit/i })
    fireEvent.click(submitButton)

    expect(handleChange).toHaveBeenCalledWith('1234')
  })

  it('auto submits the form when all inputs are filled if autoSubmit is true', () => {
    const handleChange = vi.fn()
    setup({ numOfInputs: 4, onChange: handleChange, autoSubmit: true })

    const inputs = screen.getAllByRole('textbox')
    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: `${index + 1}` } })
    })

    expect(handleChange).toHaveBeenCalledWith('1234')
  })
})
