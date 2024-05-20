import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const SubmitButtonOptionsPage = () => {
  const title = "Submit Button Options";
  const description = (
    <div>
      <p>
        The <code>submitOtpButton</code> prop controls the visibility and text
        of the submit button. By default, the submit button is shown.
      </p>
      <br />
      <p>
        You can customize the button text using the <code>text</code> property
        within the <code>submitOtpButton</code> prop. Additionally, the button's
        styles can be overridden using CSS, SCSS, or Tailwind classes, allowing
        for seamless integration with your project's design system.
      </p>
      <br />
      <p>
        To remove or hide submit button, simple toggle the <code>show</code>{" "}
        prop.
        <code>submitOtpButton</code> prop:
      </p>
      <br />
      <ul className="ml-5 list-disc">
        <li className="mb-3">
          <code>show</code>: Controls the visibility of the submit button. Set
          to <code>true</code> by default.
        </li>
        <li className="mb-3">
          <code>text</code>: Customizes the text displayed on the submit button.
          Default is "Submit".
        </li>
        <li className="mb-3">
          <code>className</code>: Allows you to add custom styles to the submit
          button using CSS, SCSS, or Tailwind classes.
        </li>
      </ul>
    </div>
  );

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateSubmitOptions />}
      codeContent={submitOptionsTemp}
      id={"submitoptions"}
    />
  );
};

const TemplateSubmitOptions = () => {
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
        submitOtpButton={{
          show: true,
          text: "Whatever Name",
          className: "whatever-classes",
        }}
        autoFocus={false}
      />
      <span className="absolute top-5 left-5 lato font-semibold">
        OTP Value: {otp ? otp : "Awaiting triggers..."}
      </span>
    </>
  );
};

export const submitOptionsTemp = `
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
        submitOtpButton={{
          show: true,
          text: 'Whatever Name',
          className: "whatever-classes",
        }}
      />
    </>
  );
};

export default App;
`;

export default SubmitButtonOptionsPage;
