import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const BasicUsagePage = () => {
  const title = "Basic Usage";
  const description = (
    <div>
      Easily integrate OTP functionality with minimal setup. Use the{" "}
      <code>onChange</code> prop to handle OTP value changes by passing a
      function like <code>setOtp</code>. Alternatively, we can call the{" "}
      <code>setOtp</code> directly within <code>onChange</code> to get the
      values.
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateBasic />}
      codeContent={basicUsageTemp}
      id={"basicusage"}
    />
  );
};

const TemplateBasic = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  return (
    <>
      <OtpKit value={otp} onChange={handleChange} type={"number"} />
      <span className="absolute top-5 left-5 lato font-semibold">
        OTP Value: {otp ? otp : "Awaiting triggers..."}
      </span>
    </>
  );
};

export const basicUsageTemp = `
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
        type={"number"}
      />
    </>
  );
};

export default App;

--
Alternative Method...
--

import { useState } from "react";
import { OtpKit } from "react-otp-kit";
import "react-otp-kit/dist/index.css";

function App() {
  const [otp, setOtp] = useState("");

  return (
    <>
      <OtpKit
        value={otp}
        onChange={setOtp}
        type={"text"}
      />
    </>
  );
};

export default App;
`;

export default BasicUsagePage;
