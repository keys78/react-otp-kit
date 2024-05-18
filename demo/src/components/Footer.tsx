import npm from '../assets/svg/npmIcon.svg'
import github from '../assets/svg/githubIcon.svg'
import contributors from '../assets/svg/contributorsIcon.svg'
const Footer = () => {
  return (
    <div className="py-4 mt-10 flex items-center sm:space-x-10 space-x-5 justify-center border border-accent-1">
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
