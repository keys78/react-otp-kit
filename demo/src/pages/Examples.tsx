import BasicUsage from "../components/examples/basic-usage/BasicUsage";
import WithSeparators from "../components/examples/with-seperators/WithSeparators";

const Examples = () => {
  return (
    <>
      <p>Bread Crumbs</p>
      <div>
        <h2 className="text-[36px] font-semibold pt-2 pb-3 text-accent-3">Examples</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem
          totam earum fugiat excepturi voluptate, error sit officia laudantium
          facere, possimus amet veniam optio odio at molestiae harum iusto
          vitae.
        </p>
      </div>
      <BasicUsage />
      <WithSeparators />
      <div id="autofocus" className="h-[200px] w-full bg-red-300 mt-[800px]">
        <h1>Auto focus</h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
        distinctio cum pariatur ipsam perspiciatis nostrum quia eligendi
        nesciunt minus qui illo neque voluptates voluptate, earum eum repellat
        temporibus numquam. Facilis.
      </div>
    </>
  );
};

export default Examples;
