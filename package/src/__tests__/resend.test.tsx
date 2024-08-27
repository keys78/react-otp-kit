import { render, screen, waitFor } from '@testing-library/react'
import { OtpKitResendCode, ResendCodeProps } from './../App'
import { describe, it, expect } from 'vitest'


describe('OtpKitResendCode Component', () => {

  const setup = (props: Partial<ResendCodeProps> = {}) => {
    const initialProps: ResendCodeProps = {
      resendOtpButton: {
        apiURL: '',
        initialCountdown: 3,
        text: 'Resend Code',
        show: true,
      },
      ...props,
    }
    return render(<OtpKitResendCode {...initialProps} />)
  }

  it('starts the countdown on render', async () => {
    setup({ resendOtpButton: { initialCountdown: 2 } })
    expect(screen.getByText(/Resend Code/i)).toHaveTextContent('2s')
    await waitFor(() =>
      expect(screen.getByText(/Resend Code/i)).toHaveTextContent('1s'),
    )
    await waitFor(() =>
      expect(screen.getByText(/Resend Code/i)).toHaveTextContent('0s'),
    )
  })

  it('disables the resend button during the countdown', () => {
    setup()
    const button = screen.getByText(/Resend Code/i)
    expect(button).toBeDisabled()
  })
})
