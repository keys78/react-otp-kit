import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const InputTypePage = () => {
  const title = "Input Type";
  const description = (
    <div>
      <p>
        Customize the input type for your OTP fields to suit various use cases.
        You can specify whether the OTP inputs should be numbers, text (which
        can include mixed characters), or password fields for enhanced security.
        This flexibility allows you to tailor the OTP input experience based on
        the specific needs of your application.
      </p>{" "}
      <br />
      <ul>
        <li>
          <code>type</code>: Defines the type of input for OTP fields. Options
          include:
        </li>
        <ul className="list-disc ml-5">
          <li className="mb-3">
            <code>number</code>: Restricts input to numeric values.
          </li>
          <li className="mb-3">
            <code>text</code>: Allows alphanumeric and special characters.
          </li>
          <li className="mb-3">
            <code>password</code>: Masks the input for secure entry.
          </li>
        </ul>
      </ul>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateInputType />}
      codeContent={inputTypeTemp}
      id={"type"}
    />
  );
};

const TemplateInputType = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  return (
    <div>
      <p className="pb-2">Numbers Only</p>
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        submitOtpButton={{ show: false }}
        autoFocus={false}
      />
      <p className="pb-2">Texts & Numbers</p>
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"text"}
        submitOtpButton={{ show: false }}
        autoFocus={false}
      />
      <p className="pb-2">Password</p>
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"password"}
        submitOtpButton={{ show: false }}
        autoFocus={false}
      />
    </div>
  );
};

export const inputTypeTemp = `
import { useState } from "react";
import { OtpKit } from "react-otp-kit";
import "react-otp-kit/dist/index.css";

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
        type={"number"} type={"number"} // enter "number" | "text" | "password" -  here
        submitOtpButton={{ show: false }}
      />
    </>
  );
}

export default App;
`;

export default InputTypePage;
