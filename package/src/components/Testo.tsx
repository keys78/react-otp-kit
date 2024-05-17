/* eslint-disable prettier/prettier */
import { useState } from 'react'
import OtpKit, { OtpKitResendCode } from './CustomOtpKit'

const Testing = () => {
  const [otp, setOtp] = useState('')
  const handleResponseData = (data: any) => {
    console.log('responseFataOTP', data)
  }
  // const generateRandomDigits = () => {
  //   let result = ''
  //   const characters = '0123456789'
  //   const length = 6
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * characters.length))
  //   }
  //   return result
  // }

  return (
    <div>
      <h1>Testing Imports</h1>
      <OtpKit
        value={otp}
        onChange={setOtp}
        placeholder="go"
        numOfInputs={13}
        type="text"
        separator={{
          show: true,
          value: '+',
          intervals: 1,
          className: 'default__styles',
        }}
        inputStyles={{
          generalStyles: 'gen__style',
          onFill: 'komo',
        }}
        autoFocus={{
          isAutoFocused: true,
          style: { backgroundColor: 'yellow' },
        }}
        submitOtpButton={{
          show: true,
          text: 'Submit OTP',
          className: '',
        }}
        clearOtpButton={{
          show: true,
          text: 'Clear OTP',
          className: '',
        }}
        autoSubmit={false}
      />
      <OtpKitResendCode
        resendOtpButton={{
          // localFunctions: generateRandomDigits,
          // apiURL: 'https://jsonplaceholder.typicode.com/posts',
          initialCountdown: 2,
          text: 'Get code',
          className: 'resendbutton_styles',
          responseData: handleResponseData, // Pass the function to handle response data
        }}
      />
      <p>Generated OTP: {otp}</p>
    </div>
  )
}

export default Testing
