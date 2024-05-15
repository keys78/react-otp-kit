import { useState } from 'react'
import CustomOtpKit from './CustomOtpKit'

const Testing = () => {
  const [otp, setOtp] = useState('')

  return (
    <div>
      <h1>Testing Imports</h1>
      <CustomOtpKit
        value={otp}
        onChange={setOtp}
        numOfInputs={6}
        type="number"
        separator={{
          show: true,
          value: '*',
          intervals: 1,
          className: 'default__styles',
        }}
        autoFocus={{
          isAutoFocused: true,
          style: { backgroundColor: 'yellow' },
        }}
        resendButton={{
          initialCountdown: 10,
          show: true,
          text: 'emma', // Specify the text for the resend button
          className: 'Rsend_styles', // Specify the class name for the resend button
        }}
      />
    </div>
  )
}

export default Testing
