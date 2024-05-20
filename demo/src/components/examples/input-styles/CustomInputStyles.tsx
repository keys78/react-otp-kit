import { useState } from "react";
import OtpKit from "../../PackageClone";
import ExamplesTemplate from "../ExamplesTemplate";

const CustomInputStylesPage = () => {
  const title = "Custom Input Styles";
    const description = (
      <div>
        <p>
          Customize the appearance of your OTP input fields using the{" "}
          <code>inputStyles</code> prop. This prop allows you to apply custom
          styles to the input fields and specify styles that should be applied
          when the input is filled.
        </p>
        <br />
        <p>
          The <code>inputStyles</code> prop supports the following properties:
        </p> <br />
        <ul>
          <li>
            <code>generalStyles</code>: CSS classes to style the general state
            of the input fields. Options include:
            <div>
              <span>
                ~ <code>rok__input--variant1</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>rok__input--variant2</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>rok__input--variant3</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>rok__input--variant4</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>rok__input--variant5</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>rok__input--variant6</code>
              </span>&nbsp; &nbsp;
            </div>
          </li> <br />
          <li>
            <code>onFill</code>: CSS classes to style the input fields when they
            are filled. Options include:
            <div>
              <span>
                ~ <code>onfill__type1</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>onfill__type2</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>onfill__variant3</code>
              </span>&nbsp; &nbsp;
              <span>
                ~ <code>onfill__type3</code>
              </span>&nbsp; &nbsp;
            </div>
          </li>
        </ul>
        <br />
        <p>
          You can also style your input fields based on your preferences. You
          can use regular CSS, SCSS, or Tailwind CSS for your styles.
        </p>
        <br />
        <p>Below are examples demonstrating different custom input styles:</p>
      </div>
    );
  

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateInputStyles />}
      codeContent={inputStylesTemp}
      id={"inputstyles"}
    />
  );
};

const TemplateInputStyles = () => {
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
        inputStyles={{
          generalStyles: "rok__input--variant1",
          onFill: "onfill__type1",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant2",
          onFill: "onfill__type2",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant3",
          onFill: "onfill__variant3",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant4",
          onFill: "onfill__type3",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant5",
          onFill: "onfill__type1",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant6",
          onFill: "onfill__type1",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
    </div>
  );
};

export const inputStylesTemp = `
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
        inputStyles={{
          generalStyles: "rok__input--variant1",
          onFill: "onfill__type1",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant2",
          onFill: "onfill__type2",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant3",
          onFill: "onfill__variant3",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant4",
          onFill: "onfill__type3",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant5",
          onFill: "onfill__type1",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
      <OtpKit
        value={otp}
        onChange={handleChange}
        type={"number"}
        inputStyles={{
          generalStyles: "rok__input--variant6",
          onFill: "onfill__type1",
        }}
        autoFocus={false}
        submitOtpButton={{ show: false }}
      />
    </>
  );
}

export default App;
`;

export default CustomInputStylesPage;
