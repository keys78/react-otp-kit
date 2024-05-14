import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
  FormEvent,
} from "react";

type whiteListInputTypes = "number" | "text" | "password";

interface CustomOtpKitProps {
  value: string;
  onChange: (value: string) => void;
  numOfInputs: number;
  //   type:
  placeholder?: string;
  separator: {
    show: boolean;
    value?: string;
    intervals: number;
    className?: string;
  };
  autoFocus: {
    isAutoFocused: boolean;
    style: React.CSSProperties;
  };
  resendButton: {
    initialCountdown: number;
    show: boolean;
    text: string;
    className: string;
  };
  type: whiteListInputTypes;
}

const CustomOtpKit: React.FC<CustomOtpKitProps> = ({
  onChange,
  numOfInputs,
  type,
  placeholder,
  separator,
  autoFocus,
  resendButton,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(numOfInputs).fill(""));
  const [countdown, setCountdown] = useState<number>(
    resendButton.initialCountdown
  );
  const [isVerifyDisabled, setIsVerifyDisabled] = useState<boolean>(true);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    new Array(numOfInputs).fill(null)
  );

  useEffect(() => {
    if (autoFocus.isAutoFocused) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus.isAutoFocused]);

  useEffect(() => {
    if (countdown === 0) {
      setIsResendDisabled(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    setIsVerifyDisabled(otp.some((digit) => digit === ""));
  }, [otp]);

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const newOtp = [...otp];
    newOtp[index] = value.charAt(value.length - 1); // Get the last character entered
    setOtp(newOtp);
    onChange(newOtp.join("")); // Call onChange prop with updated value

    // Focus on the next input field whenever any value is entered into the current input field
    inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    const { key } = event;
    if (
      key === "ArrowLeft" &&
      index > 0 &&
      event.target === document.activeElement
    ) {
      inputRefs.current[index - 1]?.focus();
      event.preventDefault();
    } else if (
      key === "ArrowRight" &&
      index < otp.length - 1 &&
      event.target === document.activeElement
    ) {
      inputRefs.current[index + 1]?.focus();
      event.preventDefault();
    } else if (
      (key === "Backspace" || key === "Delete") &&
      event.target === document.activeElement
    ) {
      const isBackspace = key === "Backspace";
      const isDelete = key === "Delete";
      if (
        (isBackspace && index > 0 && otp[index] === "") ||
        (isDelete && index < otp.length - 1 && otp[index] === "")
      ) {
        inputRefs.current[isBackspace ? index - 1 : index + 1]?.focus();
      }
    } else if (/^\d$/.test(key) && index < otp.length) {
      const newValue = key;
      if (otp[index] !== newValue) {
        const newOtp = [...otp];
        newOtp[index] = newValue;
        if (index < otp.length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
        setOtp(newOtp);
      }
      event.preventDefault(); // Prevent default behavior of adding the character twice
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const clipboardData = event.clipboardData?.getData("Text");
    if (!clipboardData) return;

    const clipboardText = clipboardData.replace(/\s/g, ""); // Remove all white spaces
    if (!clipboardText) return; // If nothing was pasted, don't proceed

    const clipboardDigits = clipboardText.split("");
    const newOtp = [...otp];
    clipboardDigits.slice(0, otp.length).forEach((digit, index) => {
      newOtp[index] = digit;
    });
    setOtp(newOtp);

    // Find the index of the last pasted digit
    const lastPastedIndex = newOtp.findIndex((digit) => digit === "");

    // Check if the last input field is filled
    const isLastInputFilled = lastPastedIndex === -1;

    // Focus on the last input field if it's filled
    if (isLastInputFilled) {
      inputRefs.current[inputRefs.current.length - 1]?.focus();
    } else if (lastPastedIndex !== -1) {
      // Focus on the input field containing the last pasted digit
      inputRefs.current[lastPastedIndex]?.focus();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filledOtp = otp.join("");
    console.log("OTP submitted:", filledOtp);
    handleVerifyClick();
    // Handle OTP verification logic here
  };

  const clearInputs = () => {
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleVerifyClick = () => {
    clearInputs();
  };

  const handleResendClick = () => {
    if (!isResendDisabled) {
      setIsResendDisabled(true);
      setCountdown(resendButton.initialCountdown);
      handleVerifyClick();
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="text-center">
        <div role="group" className="input-group">
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
                className={`border rounded-md py-2 s-767:w-12 w-10 text-center ${
                  digit ? "border-green-500" : ""
                }`}
                ref={(el) => (inputRefs.current[index] = el)}
                autoComplete="one-time-code"
              />
              {separator.show &&
                (index + 1) % separator.intervals === 0 &&
                index !== numOfInputs - 1 && (
                  <div className={separator.className}>{separator.value}</div>
                )}
            </React.Fragment>
          ))}
        </div>
        <button
          className={`bg-greenThree text-white px-4 py-2 rounded-md w-[120px] ${
            isVerifyDisabled ? "bg-grayThree cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isVerifyDisabled}
        >
          Submit
        </button>
      </form>
      <div>
        {resendButton?.show && (
          <button
            onClick={handleResendClick}
            type="button"
            disabled={isResendDisabled}
            className={` ${isResendDisabled ? "" : ""}`}
          >
            {`${resendButton?.text} (${Math.floor(countdown / 60)}:${
              countdown % 60 < 10 ? "0" : ""
            }${countdown % 60})`}
          </button>
        )}
      </div>
    </section>
  );
};

export default CustomOtpKit;
