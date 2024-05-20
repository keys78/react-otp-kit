import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const InputLengthPage = () => {
  const title = "Input Length";
  const description = (
    <div>
      Use the default number of provided inputs or easily customize the number
      of inputs you need with the <code>numOfInputs</code> prop. Max length of the inputs can only be 100.
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateInputLength />}
      codeContent={inputLengthTemp}
      id={"numberofinputs"}
    />
  );
};

const TemplateInputLength = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
    console.log("myOTP", newOtp);
  };

  return (
    <div>
        <p className="pb-2 text-center">5 inputs</p>
        <OtpKit
          value={otp}
          onChange={handleChange}
          numOfInputs={5}
          submitOtpButton={{ show: false }}
          type={"number"}
          autoFocus={false}
        />
        <p className="pb-2 text-center">3 inputs</p>
        <OtpKit
          value={otp}
          onChange={handleChange}
          numOfInputs={3}
          submitOtpButton={{ show: false }}
          type={"number"}
          autoFocus={false}
        />
        <p className="pb-2 text-center">4 inputs</p>
        <OtpKit
          value={otp}
          onChange={handleChange}
          numOfInputs={4}
          submitOtpButton={{ show: false }}
          type={"number"}
          autoFocus={false}
        />
    </div>
  );
};

export const inputLengthTemp = `
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
        numOfInputs={3} //tweak this to increase or decrease number of inputs
        submitOtpButton={{ show: false }}
        type={"number"}
        autoFocus={false}
      />
    </>
  );
}

export default App;
`;

export default InputLengthPage;
