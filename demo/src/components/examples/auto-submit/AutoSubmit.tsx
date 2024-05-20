import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const AutoSubmitPage = () => {
  const title = "Auto Submit";
  const description = (
    <div>
      <p>
        The <code>autoSubmit</code> prop allows for automatic submission of the
        OTP once all input fields are filled. This can be useful in mobile SMS and banking apps.
      </p>
      <br />
      <p>
        When <code>autoSubmit</code> is set to <code>true</code>, the OTP will
        be submitted immediately after the user fills in the last input field.
      </p>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateAutoSubmit />}
      codeContent={autoSubmitTemp}
      id={"autosubmit"}
    />
  );
};

const TemplateAutoSubmit = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
    console.log("myOTP", newOtp);
  };

  return (
    <>
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        autoSubmit={true}
        submitOtpButton={{ show: false }}
        autoFocus={false}
      />
      <span className="absolute top-5 left-5 lato font-semibold">
        OTP Value: {otp ? otp : "Awaiting triggers..."}
      </span>
    </>
  );
};

export const autoSubmitTemp = `
import { useState } from "react";
import { OtpKit } from "react-otp-kit";
import "react-otp-kit/dist/styles.css";

function App() {
  const [otp, setOtp] = useState("");

  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  return (
    <>
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        autoSubmit={true}
        submitOtpButton={{ show: false }}
      />
    </>
  );
};

export default App;
`;

export default AutoSubmitPage;
