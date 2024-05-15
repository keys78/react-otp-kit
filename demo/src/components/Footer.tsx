import npm from '../assets/svg/npmIcon.svg'
import github from '../assets/svg/githubIcon.svg'
import contributors from '../assets/svg/contributorsIcon.svg'
const Footer = () => {
  return (
    <div className="py-4 mt-5 flex items-center space-x-10 justify-center">
      <a href="">
        <div className="flex items-center space-x-2">
          <img src={npm} alt="npm_icon" className="w-[25px]" />
          <span>Npm</span>
        </div>
      </a>
      <a href="">
        <div className="flex items-center space-x-2">
          <img src={github} alt="github_icon" className="w-[25px]" />
          <span>GitHub</span>
        </div>
      </a>
      <a href="">
        <div className="flex items-center space-x-2">
          <img
            src={contributors}
            alt="contributors_icon"
            className="w-[25px]"
          />
          <span>Contributors</span>
        </div>
      </a>
    </div>
  )
}

export default Footer
