import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const ClearButtonOptionsPage = () => {
  const title = "Clear Button Options";
  const description = (
    <div>
      <p>
        The <code>clearOtpButton</code> prop controls the visibility and text of
        the clear button. By default, the clear button is shown, allowing users
        to easily clear the OTP input fields.
      </p>
      <br />
      <p>
        You can customize the button text using the <code>text</code> property
        within the <code>clearOtpButton</code> prop. Additionally, the button's
        styles can be overridden 
      </p>
      <br />
      <ul>
        <li className="mb-3">
          <code>show</code>: Controls the visibility of the clear button. Set to{" "}
          <code>false</code> by default.
        </li>
        <li className="mb-3">
          <code>text</code>: Customizes the text displayed on the clear button.
          Default is "Clear".
        </li>
        <li className="mb-3">
          <code>className</code>: Allows you to add custom styles to the clear
          button using CSS, SCSS, or Tailwind classes.
        </li>
      </ul>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateClearButtonOptions />}
      codeContent={clearButtonOptionsTemp}
      id={"clearbutton"}
    />
  );
};

const TemplateClearButtonOptions = () => {
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
        clearOtpButton={{
          show: true,
          text: "Clear",
          className: "bg-red-500 text-white",
        }}
        autoFocus={false}
      />
      <span className="absolute top-5 left-5 lato font-semibold">
        OTP Value: {otp ? otp : "Awaiting input..."}
      </span>
    </>
  );
};

export const clearButtonOptionsTemp = `
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
        clearOtpButton={{
          show: true,
          text: 'Clear',
          className: 'bg-red-500 text-white',
        }}
      />
    </>
  );
};

export default App;
`;

export default ClearButtonOptionsPage;
