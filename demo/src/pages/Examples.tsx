import BasicUsage from "../components/examples/basic-usage/BasicUsage";
import WithSeparators from "../components/examples/with-seperators/WithSeperators";

const Examples = () => {
  return (
    <div>
      <BasicUsage />
      <WithSeparators />
      <div id="autofocus" className="h-[200px] w-full bg-red-300 mt-[800px]">
        <h1>Auto focus</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis distinctio cum pariatur ipsam perspiciatis nostrum quia eligendi nesciunt minus qui illo neque voluptates voluptate, earum eum repellat temporibus numquam. Facilis.
      </div>
    </div>
  );
};

export default Examples;
