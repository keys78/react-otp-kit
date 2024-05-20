import AutoSubmitPage from "../components/examples/auto-submit/AutoSubmit";
import AutofocusPage from "../components/examples/autofocus/Autofocus";
import BasicUsage from "../components/examples/basic-usage/BasicUsage";
import ClearButtonOptionsPage from "../components/examples/clear-button-options/ClearButtonOptions";
import InputLengthPage from "../components/examples/input-length/InputLength";
import CustomInputStylesPage from "../components/examples/input-styles/CustomInputStyles";
import InputTypePage from "../components/examples/input-type/InputType";
import PlaceholderPage from "../components/examples/placeholder/Placeholder";
import ResendCodePage from "../components/examples/resend-code/ResendCode";
import SeparatorsPage from "../components/examples/separators/Separators";
import SubmitButtonOptionsPage from "../components/examples/submit-button-options/SubmitButtonOptions";

const Examples = () => {
  return (
    <section className="max-w-[800px]">
      <div>
        <h2 className="sm:text-[36px] text-[24px] font-semibold pt-2 pb-3 text-accent-3">
          Examples
          <div className="w-[10%] h-[5px] rounded-md bg-gradient-to-r from-purple-500 to-pink-500 mt-3"></div>
        </h2>
        <p className="leading-8 -mb-10">
          Get started instantly with a collection of example components. Each
          example demonstrates different features and usage scenarios of the OTP
          Kit component, allowing you to quickly understand how to integrate and
          customize it for your projects.
        </p>
      </div>
      <BasicUsage />
      <SeparatorsPage />
      <CustomInputStylesPage />
      <InputTypePage />
      <InputLengthPage />
      <AutofocusPage />
      <PlaceholderPage />
      <AutoSubmitPage />
      <SubmitButtonOptionsPage />
      <ClearButtonOptionsPage />
      <ResendCodePage />
    </section>
  );
};

export default Examples;
