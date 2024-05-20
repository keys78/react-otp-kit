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
      <p>Bread Crumbs</p>
      <div>
        <h2 className="sm:text-[36px] text-[24px] font-semibold pt-2 pb-3 text-accent-3">
          Examples
        </h2>
        <p>Get started instantly with... help me complete this</p>
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
