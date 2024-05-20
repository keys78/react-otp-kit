import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const SeparatorsPage = () => {
  const title = "Separators & Intervales";
  const description = (
    <div>
      <p>
        Customize your OTP input fields with separators to improve readability
        and aesthetics. The <code>separator</code> prop allows you to specify a
        character to be inserted at regular intervals between the input fields.
      </p>{" "}
      <br />
      <p>
        Adjust the interval with the <code>intervals</code> property to control
        where the separator appears. Below are examples demonstrating the use of
        different separators and intervals.
      </p>{" "}
      <br />
      <ul>
        <li>
          <code>separator</code>: Defines the properties of the separator.
          Options include:
          <ul className="list-disc ml-5">
            <li className="mb-3">
              <code>show</code>: Boolean to show or hide the separator.
            </li>
            <li className="mb-3">
              <code>value</code>: The character used as the separator.
            </li>
            <li className="mb-3">
              <code>intervals</code>: The number of input fields between each
              separator.
            </li>
            <li className="mb-3">
              <code>className</code>: CSS class to style the separator.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateSeparators />}
      codeContent={inputLengthTemp}
      id={"separators"}
    />
  );
};

const TemplateSeparators = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  return (
    <div>
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        separator={{
          show: true,
          value: "-",
          intervals: 1,
          className: "//add separator styles here",
        }}
        submitOtpButton={{ show: false }}
        autoFocus={false}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        separator={{
          show: true,
          value: "*",
          intervals: 2,
          className: "//add separator styles here",
        }}
        submitOtpButton={{ show: false }}
        autoFocus={false}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        separator={{
          show: true,
          value: "/",
          intervals: 3,
          className: "//add separator styles here",
        }}
        submitOtpButton={{ show: false }}
        autoFocus={false}
      />
    </div>
  );
};

export const inputLengthTemp = `
import { useState } from "react";
import { OtpKit } from "react-otp-kit";

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
        separator={{ //tweak the separator properties
          show: true,
          value: "-",
          intervals: 1,
          className: "//add separator styles here",
        }}
        submitOtpButton={{ show: false }}
      />
    </>
  );
}

export default App;
`;

export default SeparatorsPage;
