import React from "react";

const Guides: React.FC = () => {
  return (
    <section className="max-w-[800px]">
      <p>Bread Crumbs</p>
      <h2 className="sm:text-[36px] text-[24px] font-semibold pt-2 pb-3 text-accent-3">
        Guides
        <div className="w-[10%] h-[5px] rounded-md bg-gradient-to-r from-purple-500 to-pink-500 mt-3"></div>
      </h2>


      {/* Usage Guide */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Usage Guide</h3>
        <p className="mb-2 leading-8">
          The OTP Kit component is designed to be flexible and easy to use.
          Below are the props accepted by the component, examples of different
          configurations and use cases, as well as tips and best practices for
          integrating the component into various projects.
        </p>
        <h4 className="text-lg font-semibold mb-2">Props</h4>
        <p className="mb-2 leading-8">
          Detailed explanation of the props accepted by the OTP Kit component,
          such as <code>value</code>, <code>onChange</code>, <code>type</code>,{" "}
          <code>length</code>, <code>autoSubmit</code>, and more.
        </p>
        <h4 className="text-lg font-semibold mb-2">Examples</h4>
        <p className="mb-2 leading-8">
          Examples of different configurations and use cases, illustrating how
          to use the component in various scenarios.
        </p>
        <h4 className="text-lg font-semibold mb-2">Best Practices</h4>
        <p className="mb-2 leading-8">
          Tips and best practices for integrating the OTP Kit component into
          your projects effectively and efficiently.
        </p>
      </div>
      {/* Customization */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Customization</h3>
        <h4 className="text-lg font-semibold mb-2">Appearance and Behavior</h4>
        <h4 className="text-lg font-semibold mb-2">Customization Options</h4>
        <p>InputStyles, seperators and button options</p>
      </div>

      {/* Advanced Features */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Advanced Features</h3>

        <h4 className="text-lg font-semibold mb-2">Overview</h4>
        <p className="mb-2 leading-8">
          Overview of advanced features - auto-submit, clear button options, and
          resend OTP functions.
        </p>
      </div>

      {/* Testing and Debugging */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Testing and Debugging</h3>
        <p className="mb-2 leading-8">Run Test - base CLI</p>
      </div>

      {/* Contributing Guide */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contributing Guide</h3>
        <p className="mb-2 leading-8">
          Guidelines for contributing to the react-otp-kit, including
          instructions on how to report bugs, suggest features, or submit pull
          requests.
        </p>
      </div>

      {/* Version History */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Changelog</h3>
        <p className="mb-2 leading-8">
          Changelog detailings - improvements, bug fixes in each version of the
          package. Information on how to upgrade to the latest version.
        </p>
      </div>
    </section>
  );
};

export default Guides;
