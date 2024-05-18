/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
  FormEvent,
} from 'react'
import axios from 'axios'

export type whiteListInputTypes = 'number' | 'text' | 'password'

interface OtpKitProps {
  value: string
  onChange: (value: string) => void
  numOfInputs?: number
  placeholder?: string
  autoSubmit?: boolean
  autoFocus: boolean
  separator?: {
    show?: boolean
    value?: string
    intervals: number
    className?: string
  }
  submitOtpButton?: {
    show?: boolean
    text?: string
    className?: string
  }
  clearOtpButton?: {
    show?: boolean
    text?: string
    className?: string
  }
  type: whiteListInputTypes
  inputStyles?: {
    generalStyles?: string
    onFill?: string
  }
}

const OtpKit: React.FC<OtpKitProps> = ({
  onChange,
  numOfInputs = 6, // Default value for numOfInputs
  type,
  placeholder,
  separator,
  autoFocus = true,
  autoSubmit = false,
  submitOtpButton,
  clearOtpButton,
  inputStyles,
}) => {
  const defaultSubmitOtpButton = {
    show: true,
    text: 'Submit',
    className: 'rok__submit_button',
  }
  const defaultClearOtpButton = {
    show: false,
    text: 'Clear',
    className: 'rok__clear_button',
  }

  const finalSubmitOtpCTA = {
    ...defaultSubmitOtpButton,
    ...submitOtpButton,
  }
  const finalClearOtpCTA = {
    ...defaultClearOtpButton,
    ...clearOtpButton,
  }

  const sanitizedNumOfInputs: number = Math.min(numOfInputs || 6, 100)

  const [otp, setOtp] = useState<string[]>(
    new Array(sanitizedNumOfInputs).fill(''),
  )
  const [isVerifyDisabled, setIsVerifyDisabled] = useState<boolean>(true)
  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    new Array(sanitizedNumOfInputs).fill(null),
  )

  useEffect(() => {
    // Find the index of the next empty input field
    const nextEmptyIndex = otp.findIndex((digit) => digit === '')

    // If there is an empty input field, focus on it
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    }
  }, [otp])


  useEffect(() => {
    if (autoFocus) {
      inputRefs.current[0]?.focus()
    } else {
      inputRefs.current[0]?.blur()
    }
  }, [autoFocus])

  // Auto-submit when all inputs are filled and autoSubmit is enabled
  useEffect(() => {
    setIsVerifyDisabled(otp.some((digit) => digit === ''))
    if (autoSubmit && !isVerifyDisabled && otp.every((digit) => digit !== '')) {
      handleSubmit()
    }
  }, [otp, autoSubmit, isVerifyDisabled])

  useEffect(() => {
    setIsVerifyDisabled(otp.some((digit) => digit === ''))
  }, [otp])

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target
    const newOtp = [...otp]
    newOtp[index] = value.charAt(value.length - 1)
    setOtp(newOtp)
    onChange(newOtp.join('')) // Call onChange prop with updated value

    // Find the next empty input field
    const nextEmptyIndex = newOtp.findIndex((digit) => digit === '')
    if (nextEmptyIndex !== -1) {
      // Focus on the next empty input field
      inputRefs.current[nextEmptyIndex]?.focus()
    }
  }

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event
    if (
      key === 'ArrowLeft' &&
      index > 0 &&
      event.target === document.activeElement
    ) {
      inputRefs.current[index - 1]?.focus()
      event.preventDefault()
    } else if (
      key === 'ArrowRight' &&
      index < otp.length - 1 &&
      event.target === document.activeElement
    ) {
      inputRefs.current[index + 1]?.focus()
      event.preventDefault()
    } else if (
      (key === 'Backspace' || key === 'Delete') &&
      event.target === document.activeElement
    ) {
      const isBackspace = key === 'Backspace'
      const isDelete = key === 'Delete'
      if (
        (isBackspace && index > 0 && otp[index] === '') ||
        (isDelete && index < otp.length - 1 && otp[index] === '')
      ) {
        inputRefs.current[isBackspace ? index - 1 : index + 1]?.focus()
      }
    } else if (/^\d$/.test(key) && index < otp.length) {
      const newValue = key
      if (otp[index] !== newValue) {
        const newOtp = [...otp]
        newOtp[index] = newValue
        if (index < otp.length - 1) {
          inputRefs.current[index + 1]?.focus()
        }
        setOtp(newOtp)
      }
      event.preventDefault()
    }
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const clipboardData = event.clipboardData?.getData('Text')
    if (!clipboardData) return

    const clipboardText = clipboardData.replace(/\s/g, '') // Remove all white spaces
    if (!clipboardText) return // If nothing was pasted, don't proceed

    const clipboardDigits = clipboardText.split('')
    const newOtp = [...otp]
    clipboardDigits.slice(0, otp.length).forEach((digit, index) => {
      newOtp[index] = digit
    })
    setOtp(newOtp)

    // Find the index of the last pasted digit
    const lastPastedIndex = newOtp.findIndex((digit) => digit === '')

    // Check if the last input field is filled
    const isLastInputFilled = lastPastedIndex === -1

    // Focus on the last input field if it's filled
    if (isLastInputFilled) {
      inputRefs.current[inputRefs.current.length - 1]?.focus()
    } else if (lastPastedIndex !== -1) {
      // Focus on the input field containing the last pasted digit
      inputRefs.current[lastPastedIndex]?.focus()
    }
  }

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const filledOtp = otp.join('')
    console.log('OTP submitted:', filledOtp)
    // Handle OTP verification logic here
  }

  const handleClearInputs = () => {
    setOtp(new Array(sanitizedNumOfInputs).fill(''))
    inputRefs.current[0]?.focus()
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="rok__form" role="form">
        <div role="group" className="rok__input__group">
          {otp.map((digit, index) => (
            <React.Fragment key={index}>
              <input
                type={type}
                value={digit}
                placeholder={placeholder}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                maxLength={1}
                disabled={index !== 0 && otp[index - 1] === ''}
                className={`${inputStyles?.generalStyles || 'rok__input--defaultStyles'} ${digit ? inputStyles?.onFill || 'rok__defaultFill' : ''}`}
                ref={(el) => (inputRefs.current[index] = el)}
                autoComplete="one-time-code"
                aria-label={`Digit ${index + 1}`}
              />
              {separator?.show &&
                (index + 1) % separator.intervals === 0 &&
                index !== sanitizedNumOfInputs - 1 && (
                  <div className={separator.className}>{separator.value}</div>
                )}
            </React.Fragment>
          ))}
        </div>
        <div className="rok__cta__container">
          {finalClearOtpCTA?.show && (
            <button
              type="button"
              className={finalClearOtpCTA.className}
              onClick={handleClearInputs}
            >
              {finalClearOtpCTA.text}
            </button>
          )}
          {finalSubmitOtpCTA?.show && (
            <button
              className={finalSubmitOtpCTA?.className}
              type="submit"
              disabled={isVerifyDisabled}
            >
              {finalSubmitOtpCTA?.text}
            </button>
          )}
        </div>
      </form>
    </section>
  )
}

export default OtpKit

//Resend OTP Code
interface ResendCodeProps {
  resendOtpButton: {
    localFunctions?: () => any
    apiURL?: string
    initialCountdown?: number
    show?: boolean
    text?: string
    className?: string
    responseData?: (data: any) => void // we define responseData as a function that receives any data
  }
}

export const OtpKitResendCode: React.FC<ResendCodeProps> = ({
  resendOtpButton,
}) => {
  const defaultResendOtpButton = {
    initialCountdown: 60,
    text: 'Resend code',
    className: 'rok__resend_button',
  }

  const finalResendOtpButton = {
    ...defaultResendOtpButton,
    ...resendOtpButton,
  }

  const [countdown, setCountdown] = useState<number>(
    finalResendOtpButton.initialCountdown,
  )
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (countdown === 0) {
      setIsResendDisabled(false)
      return
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(timer)
          return 0
        }
        return prevCountdown - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown])

  const handleResendClick = async () => {
    if (!isResendDisabled) {
      setIsResendDisabled(true)
      if (
        finalResendOtpButton.localFunctions &&
        finalResendOtpButton.localFunctions
      ) {
        try {
          const otp = await finalResendOtpButton.localFunctions()
          if (finalResendOtpButton.responseData) {
            finalResendOtpButton.responseData(otp)
          }
        } catch (error) {
          console.error('Error generating OTP:', error)
        }
      } else if (finalResendOtpButton.apiURL) {
        // Fetch OTP from the API
        try {
          const response = await axios.get(finalResendOtpButton.apiURL)
          if (finalResendOtpButton.responseData) {
            finalResendOtpButton.responseData(response.data)
          }
        } catch (error) {
          console.error('Error fetching OTP from API:', error)
        }
      } else {
        console.error('No OTP source specified')
      }

      // Reset the countdown timer
      setCountdown(finalResendOtpButton.initialCountdown)
    }
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    const parts = []

    if (hours > 0) {
      parts.push(`${hours}h`)
    }

    if (minutes > 0 || hours > 0) {
      parts.push(`${minutes}m`)
    }

    parts.push(`${remainingSeconds}s`)

    return parts.join(' ')
  }

  return (
    <div>
      <button
        onClick={handleResendClick}
        type="button"
        disabled={isResendDisabled}
        className={finalResendOtpButton?.className}
        aria-label={finalResendOtpButton?.text}

      >
        {`${finalResendOtpButton?.text} (${formatTime(countdown)})`}
      </button>
    </div>
  )
}


