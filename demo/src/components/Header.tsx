import { useLocation, Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'
import Logo from '../assets/svg/Logo'

const Header = () => {
  const location = useLocation()

  return (
    <header className="bg-baseFour flex items-center justify-between shadow shadow-accent-1 px-[60px] py-3 fixed top-0 left-0 w-full">
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
        <ul className="flex items-center space-x-5">
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
  );
}

export default Header
