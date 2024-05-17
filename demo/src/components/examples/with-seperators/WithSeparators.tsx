import ExamplesTemplate from "../ExamplesTemplate";
const WithSeparators = () => {
  const title = "Separators";
  const description = "Description for separators";

  return (
    <ExamplesTemplate
      title={title}
      description={description}
      templateContent={<TemplateWithSeperators />}
      codeContent={withSeperatorsTemp} id={"separators"}    />
  );
};

const TemplateWithSeperators = () => {
  return (
    <div
      className="h-[140px] w-[200px] 
    rounded-md border bg-gray-300 p-3 text-center"
    >
      TemplateWithSeperators NO NENENENENNE
      <input type="text" />
    </div>
  );
};


export const withSeperatorsTemp =`
const WithSeperatorsTemp = () => {
  return (
    <div
      className="h-[140px] w-[200px] 
    rounded-md border bg-gray-300 p-3 text-center"
    >
      TemplateWithSeperators
      <input type="text" />
    </div>
  );
};

export default TemplateWithSeperators;
`

export default WithSeparators;
