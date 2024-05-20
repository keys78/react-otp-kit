import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const AutofocusPage = () => {
  const title = "Autofocus";
  const description = (
    <div>
      <p>
        By default, autofocus is active. Depending on your project, you can
        decide to disable this feature by setting the <code>autoFocus</code>{" "}
        prop to <code>false</code>. This allows you to control whether the OTP
        input field automatically focuses when the component mounts, enhancing
        the user experience based on your specific needs.
      </p>{" "}
      <br />
      <p>
        In the example below, autofocus it set to <code>false</code>.
      </p>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateAutofocus />}
      codeContent={autoFocusTemp}
      id={"autofocus"}
    />
  );
};

const TemplateAutofocus = () => {
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
        autoFocus={false}
      />
      <span className="absolute top-5 left-5 lato font-semibold">
        OTP Value: {otp ? otp : "Awaiting triggers..."}
      </span>
    </>
  );
};

export const autoFocusTemp = `
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
      <OtpKit value={otp} 
        onChange={handleChange} 
        type={"number"}  
        autoFocus={false} //set autofocus true |  false
      />
    </>
  );
};

export default App;
`;

export default AutofocusPage;
