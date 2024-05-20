import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "../components/Tab";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import copyIcon from "../assets/svg/copyIcon.svg";
import checkIcon from "../assets/svg/checkIcon.svg";

const GetStarted: React.FC = () => {
  const [showCheck, setShowCheck] = useState<boolean>(false);
  const [showCheckUsage, setShowCheckUsage] = useState<boolean>(false);

  const handleCopyClick = (codeContent: string) => {
    navigator.clipboard.writeText(codeContent);
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 2000);
  };
  const handleDemoCopyClick = (codeContent: string) => {
    navigator.clipboard.writeText(codeContent);
    setShowCheckUsage(true);
    setTimeout(() => {
      setShowCheckUsage(false);
    }, 2000);
  };

  const customSyntaxHighlighterStyle: React.CSSProperties = {
    backgroundColor: "var(--accentCodeBox)",
    color: "var(--accentCode)",
    padding: "20px 10px",
    borderRadius: "10px",
  };

  const code = `
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
          type="number"
        />
      </>
    );
  };

  export default App;
  `;

  const renderInstallationTab = (packageManager: string) => {
    return (
      <div className="max-w-full relative">
        <SyntaxHighlighter
          language="jsx"
          customStyle={customSyntaxHighlighterStyle}
          style={tomorrowNight}
        >
          {packageManager === "npm"
            ? "npm install --save react-otp-kit"
            : "yarn add react-otp-kit"}
        </SyntaxHighlighter>
        <button
          title={!showCheck ? "Copy" : "Copied"}
          className="absolute top-5 sm:right-10 right-4 copy-svg"
          onClick={() =>
            handleCopyClick(
              packageManager === "npm"
                ? "npm install --save react-otp-kit"
                : "yarn add react-otp-kit"
            )
          }
        >
          {!showCheck && <img src={copyIcon} alt="copy" />}
        </button>
        {showCheck && (
          <img
            className="absolute top-5 sm:right-10 right-4"
            src={checkIcon}
            alt="check"
          />
        )}
      </div>
    );
  };

  return (
    <section className="max-w-[800px]">
      <p>Bread Crumbs</p>
      <h2 className="sm:text-[36px] text-[24px] font-semibold pt-2 pb-3 text-accent-3">
        Get Started
        <div className="w-[10%] h-[5px] rounded-md bg-gradient-to-r from-purple-500 to-pink-500 mt-3"></div>
      </h2>
      <div className="mb-2">
        <h3 className="sm:text-[24px] text-[20px] font-normal text-accent-3">
          Overview
        </h3>
        <p className="mb-4 leading-8">
          React OTP Kit is a lightweight and versatile component designed to
          simplify the implementation of OTP (One-Time Password) input fields in
          React applications. With React OTP Kit, you can quickly integrate OTP
          functionality into your projects, enabling seamless user
          authentication and verification processes.
        </p>
        <p className="mb-2 leading-8">
          React OTP Kit offers a range of features and customization options,
          allowing you to tailor the OTP input fields to suit your specific
          requirements. Whether you need a basic OTP input field or advanced
          functionality like auto-submit and clear button options, React OTP Kit
          has you covered.
        </p>
      </div>{" "}
      <br />
      <div className="mb-6">
        <h3 className="sm:text-[24px] text-[20px] font-normal text-accent-3">
          Installation
        </h3>
        <p className="mb-2 leading-8">
          To begin using the React OTP Kit in your project, you need to install
          it via npm or yarn. Open your terminal and run the following command:
        </p>
        <Tabs
          tabs={[
            {
              label: "npm",
              content: renderInstallationTab("npm"),
            },
            {
              label: "yarn",
              content: renderInstallationTab("yarn"),
            },
          ]}
        />
      </div>{" "} <br />
      <div className="rounded-md relative">
        <SyntaxHighlighter
          language="jsx"
          style={tomorrowNight}
          customStyle={customSyntaxHighlighterStyle}
        >
          {code}
        </SyntaxHighlighter>
        <button
          title={!showCheckUsage ? "Copy" : "Copied"}
          className="absolute top-5 sm:right-10 right-4"
          onClick={() => handleDemoCopyClick(code)}
        >
          {!showCheckUsage && <img src={copyIcon} alt="Copy" />}
        </button>
        {showCheckUsage && (
          <img
            className="absolute top-5 sm:right-10 right-4"
            src={checkIcon}
            alt="Copied"
          />
        )}
      </div>
      <br />
      <div className="mb-6">
        <h3 className="sm:text-[24px] text-[20px] font-normal text-accent-3">
          Basic Usage
        </h3>
        <p className="mb-2 leading-8">
          Once the package is installed, you can start using the OTP Kit
          component in your React application. Import the component where you
          want to use it and render it within your JSX:
        </p>
        <div className="rounded-md relative">
          <SyntaxHighlighter
            language="jsx"
            style={tomorrowNight}
            customStyle={customSyntaxHighlighterStyle}
          >
            {code}
          </SyntaxHighlighter>
          <button
            title={!showCheckUsage ? "Copy" : "Copied"}
            className="absolute top-5 sm:right-10 right-4"
            onClick={() => handleDemoCopyClick(code)}
          >
            {!showCheckUsage && <img src={copyIcon} alt="Copy" />}
          </button>
          {showCheckUsage && (
            <img
              className="absolute top-5 sm:right-10 right-4"
              src={checkIcon}
              alt="Copied"
            />
          )}
        </div>
      </div>
      <br />
      <div className="mb-6">
        <h3 className="sm:text-[24px] text-[20px] font-normal text-accent-3">
          Next Steps
        </h3>
        <p className="mb-4 leading-8">
          Congratulations! You've successfully set up the React OTP Kit in your
          project. To learn more about the advanced features and customization
          options, check out our{" "}
          <Link
            to="/guides"
            className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            Guides
          </Link>{" "}
          section.
        </p>
        <p className="leading-8">
          If you encounter any issues or have questions, feel free to reach out
          to us on our{" "}
          <a
            href="https://github.com/keys78/react-otp-kit/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            GitHub repository
          </a>{" "}
          or join our community discussion on{" "}
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text"
          >
            Discord
          </a>
          . Our team and community are here to assist you in any way we can!
        </p>
      </div>
    </section>
  );
};

export default GetStarted;
