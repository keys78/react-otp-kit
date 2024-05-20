import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const PlaceholderPage = () => {
  const title = "Input Placholder";
  const description = (
    <div>
      <p>
        Enhance the user experience by providing a placeholder text in your OTP
        input fields. The <code>placeholder</code> prop allows you to specify a
        placeholder text that will be displayed inside each input field when it
        is empty.
      </p>
      <br />
      <p>
        Below is an example demonstrating how to use the{" "}
        <code>placeholder</code> prop:
      </p>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateAutofocus />}
      codeContent={autoFocusTemp}
      id={"placeholder"}
    />
  );
};

const TemplateAutofocus = () => {
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
        placeholder="otp"
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
     <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        placeholder="otp" write preffered placeholder
        autoFocus={false}
      />
    </>
  );
};

export default App;
`;

export default PlaceholderPage;
