/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { OtpKitResendCode } from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const ResendCodePage = () => {
  const title = "Resend OTP Functions";
  const description = (
    <div>
      <p>
        The <code>resendOtpButton</code> prop provides functionality for users
        to request a new OTP (One Time Password). This is particularly useful in
        scenarios where the user did not receive the initial OTP or if the OTP
        has expired.
      </p>
      <br />
      <p>
        The prop allows you to customize various aspects of the resend button
        including:
      </p>
      <ul className="list-disc ml-5 leadisng-10">
        <li className="mb-3">
          <code>localFunctions</code>: A function that locally generates the
          OTP. This is useful for testing purposes or if you want to handle OTP
          generation on the client side.
        </li>
        <li className="mb-3">
          <code>apiURL</code>: A URL to your backend API where the OTP can be
          requested. This would typically send a request to your server to
          generate and send a new OTP to the user.
        </li>
        <li className="mb-3">
          <code>initialCountdown</code>: Sets the countdown time (in seconds)
          before the resend button can be clicked again. This prevents users
          from spamming the button. The default countdown time is 60s.
        </li>
        <li className="mb-3">
          <code>text</code>: The text displayed on the resend button. You can
          customize it to fit your application's wording.
        </li>
        <li className="mb-3">
          <code>className</code>: Allows you to apply custom styles to the
          resend button using CSS, SCSS, or Tailwind classes.
        </li>
        <li className="mb-3">
          <code>responseData</code>: A callback function that handles the data
          returned from the <code>localFunctions</code> or the API response.
          This function can be used to update the state with the new OTP or
          handle any additional logic.
        </li>
      </ul>
      <br />
      <p>
        In the example below, we simulated scenarios where the otp is requested
        from an a server side and where we generate them locally on the client
        side. We are using <a target="blank" href="https://designer.mocky.io/"><code>mocky.io</code> </a> static endpoint here so our api would always return 123456. To have a better understanding,
        investigate the network tab on chrome dev tools or your local browser.
      </p>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateResendCode />}
      codeContent={resendCodeTemp}
      id={"resendotp"}
    />
  );
};

const TemplateResendCode = () => {
  const [localOtp, setLocalOtp] = useState("");
  const [apiOtp, setApiOtp] = useState("");

  const handleLocalResponseData = (data: any) => {
    setLocalOtp(data);
  };

  const handleApiResponseData = (data: any) => {
    setApiOtp(data.otp);
  };

  // Example: locally generating random codes as OTP
  const generateRandomDigits = () => {
    let result = "";
    const characters = "0123456789";
    const length = 6;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  return (
    <div className="flex flex-col space-y-10 items-center justify-center">
      <div className="text-center">
        <p  className="pb-1">Generated Local OTP: {localOtp ? localOtp : 'waiting...'}</p>
        <OtpKitResendCode
          resendOtpButton={{
            localFunctions: generateRandomDigits,
            initialCountdown: 10,
            text: "Resend code (Local)",
            className: "resendbutton__styles",
            responseData: handleLocalResponseData, // Pass the function to handle response data
          }}
        />
      </div>
      <div className="text-center">
        <p  className="pb-1">Generated API OTP: {apiOtp ? apiOtp : 'waiting...'}</p>
        <OtpKitResendCode
          resendOtpButton={{
            apiURL:
              "https://run.mocky.io/v3/5b8c2be7-ae6d-4ca4-9ece-fe5d96fdb120",
            initialCountdown: 10,
            text: "Resend code (API)",
            className: "resendbutton__styles",
            responseData: handleApiResponseData, // Pass the function to handle response data
          }}
        />
      </div>
    </div>
  );
};

export const resendCodeTemp = `
import { useState } from "react";
import { OtpKitResendCode } from "react-otp-kit";

function App() {
   const [localOtp, setLocalOtp] = useState("");
  const [apiOtp, setApiOtp] = useState("");

  const handleLocalResponseData = (data: any) => {
    setLocalOtp(data);
  };

  const handleApiResponseData = (data: any) => {
    setApiOtp(data.otp);
  };

  // Example: locally generating random codes as OTP
  const generateRandomDigits = () => {
    let result = "";
    const characters = "0123456789";
    const length = 6;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  return (
    <>
      <OtpKitResendCode
        resendOtpButton={{
          localFunctions: generateRandomDigits,
          initialCountdown: 10,
          text: "Resend code (Local)",
          className: "resendbutton__styles",
          responseData: handleLocalResponseData, // Pass the function to handle response data
        }}
      />
      <p>Generated Local OTP: {localOtp}</p>
      <OtpKitResendCode
        resendOtpButton={{
          apiURL:
            "https://run.mocky.io/v3/5b8c2be7-ae6d-4ca4-9ece-fe5d96fdb120",
          initialCountdown: 10,
          text: "Resend code (API)",
          className: "resendbutton__styles",
          responseData: handleApiResponseData, // Pass the function to handle response data
        }}
      />
      <p>Generated API OTP: {apiOtp}</p>
    </>
  );
};

export default App
`;
export default ResendCodePage;
