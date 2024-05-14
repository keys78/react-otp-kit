const SideNav = () => {
  return (
    <nav className="fixed top-0 left-0 w-[230px] mr-[350px] mt-24 pl-[60px]">
      <ul className="flex items-start flex-col space-y-5 uppercase font-semibold">
        <li>
          <a href="/get-started">Get Started</a>
        </li>
        <li>
          <a href="/guides">Guides</a>
        </li>
        <li>
          <a href="/examples">
            <h1 className="bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text">
              Examples
            </h1>
          </a>
        </li>
        <li>
          <ul>
            <li>Icon Npm</li>
            <li>Icon Npm</li>
            <li>Icon Npm</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
