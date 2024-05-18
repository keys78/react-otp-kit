/* eslint-disable prettier/prettier */
import { useState } from 'react'
import OtpKit, { OtpKitResendCode } from './CustomOtpKit'

const Testing = () => {
  const [otp, setOtp] = useState('')
  const handleResponseData = (data: any) => {
    console.log('responseFataOTP', data)
  }
  const generateRandomDigits = () => {
    let result = ''
    const characters = '0123456789'
    const length = 6
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  return (
    <>
      <OtpKit
        value={otp}
        onChange={setOtp}
        placeholder=""
        numOfInputs={6}
        type="number"
        // separator={{
        //   show: true,
        //   value: '+',
        //   intervals: 1,
        //   className: 'default__styles',
        // }}
        inputStyles={{
          generalStyles: 'rok__input--variant6',
          onFill: 'onfill__type2',
        }}
        autoFocus={true}
        // submitOtpButton={{
        //   show: true,
        //   text: 'Submit OTP',
        //   className: '',
        // }}
        clearOtpButton={{
          show: true,
          text: 'Clear',
          className: 'rado',
        }}
        // autoSubmit={true}
      />
      <OtpKitResendCode
        resendOtpButton={{
          localFunctions: generateRandomDigits,
          apiURL: 'https://jsonplaceholder.typicode.com/posts',
          initialCountdown: 2,
          responseData: handleResponseData, // Pass the function to handle response data
        }}
      />
    </>
  )
}

export default Testing

{
  /* <OtpKitResendCode
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
    </div> */
}
