import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../assets/svg/Logo";

const Header = () => {
  return (
    <header className="bg-baseFour flex items-center justify-between shadow shadow-accent-1 px-[60px] py-3 fixed top-0 left-0 w-full">
      <a href="/">
        <button role="link" className="flex items-center space-x-3">
          <div className="border border-accent-1 rounded-full p-1">
            <Logo size="30" />
          </div>
          <h1 className="sono text-[20px] font-bold">React OTP Kit</h1>
        </button>
      </a>

      <nav className="flex items-center space-x-5">
        <ul className="flex items-center space-x-5">
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
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
