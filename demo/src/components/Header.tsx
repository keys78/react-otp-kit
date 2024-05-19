import { useLocation, Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "../assets/svg/Logo";

interface HeaderProps {
  toggleSideBar: () => void;
}


const Header = ({ toggleSideBar }: HeaderProps) => {
  const location = useLocation();

  return (
    <>
      <header className="bg-baseFour flex items-center justify-between shadow shadow-accent-1 md:px-[60px] px-[20px] py-3 fixed top-0 max-w-[1920px] w-full mx-auto z-[2]">
        <button className="md:hidden block" onClick={toggleSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M88,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Zm128,56H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H96a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM56,56H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
        <Link to="/">
          <button role="link" className="flex items-center space-x-3">
            <div className="border border-accent-1 rounded-full p-1">
              <Logo size="30" />
            </div>
            <h1 className="sono text-[20px] font-bold text-accent-4">
              React OTP Kit
            </h1>
          </button>
        </Link>

        <nav className="flex items-center space-x-5">
          <ul className="md:flex hidden items-center space-x-5">
            <li>
              <Link
                to="/get-started"
                className={
                  location.pathname === "/get-started"
                    ? "active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
                    : ""
                }
              >
                Get Started
              </Link>
            </li>
            <li>
              <Link
                to="/guides"
                className={
                  location.pathname === "/guides"
                    ? "active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
                    : ""
                }
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                to="/examples"
                className={
                  location.pathname.startsWith("/examples")
                    ? "active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
                    : ""
                }
              >
                Examples
              </Link>
            </li>
          </ul>
          <ThemeSwitcher />
        </nav>
      </header>
    </>
  );
};

export default Header;
