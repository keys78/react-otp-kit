import ExamplesTemplate from "../ExamplesTemplate";
const BasicUsagePage = () => {
  const title = "Basic Usage";
  const description = "Description for basic usage.";

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateBasic />}
      codeContent={basicUsageTemp} id={"basicusage"}    />
  );
};

const TemplateBasic = () => {
  return (
    <div
      className="h-[140px] w-[200px] 
    rounded-md border bg-gray-300 p-3 text-center"
    >
      TemplateBasic NO NENENENENNE
      <input type="text" />
    </div>
  );
};


export const basicUsageTemp =`
const BasicUsageTemp = () => {
  return (
    <div
      className="h-[140px] w-[200px] 
    rounded-md border bg-gray-300 p-3 text-center"
    >
      TemplateBasic
      <input type="text" />
    </div>
  );
};

export default TemplateBasic;
`

export default BasicUsagePage;
