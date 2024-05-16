import { Link } from 'react-router-dom'
import npm from '../assets/svg/npmIcon.svg'
import github from '../assets/svg/githubIcon.svg'
import contributors from '../assets/svg/contributorsIcon.svg'

const SideNav = () => {
  return (
    <nav className="fixed top-0 left-0 w-[230px] mr-[350px] mt-24 pl-[60px]">
      <ul className="flex flex-col space-y-6 uppercase font-semibold">
        <li>
          <Link
            to="/get-started"
            className={
              location.pathname === '/get-started'
                ? 'active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text'
                : ''
            }
          >
            Get Started
          </Link>
        </li>
        <li>
          <Link
            to="/guides"
            className={
              location.pathname === '/guides'
                ? 'active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text'
                : ''
            }
          >
            Guides
          </Link>
        </li>
        <li>
          <Link
            to="/examples"
            className={
              location.pathname === '/examples'
                ? 'active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text'
                : ''
            }
          >
            Examples
          </Link>
        </li>
        <div className="py-4 flex flex-col space-y-4 font-normal capitalize">
          <a href="#">
            <div className="flex items-center space-x-2">
              <img src={npm} alt="npm_icon" className="w-[20px]" />
              <span className="text-[14px]">Npm</span>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center space-x-2">
              <img src={github} alt="github_icon" className="w-[20px]" />
              <span className="text-[14px]">GitHub</span>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center space-x-2">
              <img
                src={contributors}
                alt="contributors_icon"
                className="w-[20px]"
              />
              <span className="text-[14px]">Contributors</span>
            </div>
          </a>
        </div>
      </ul>
    </nav>
  )
}

export default SideNav
