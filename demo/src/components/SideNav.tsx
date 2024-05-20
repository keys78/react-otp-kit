import { Link, useLocation } from "react-router-dom";
import npm from "../assets/svg/npmIcon.svg";
import github from "../assets/svg/githubIcon.svg";
import contributors from "../assets/svg/contributorsIcon.svg";
import { useEffect } from "react";

interface NavLink {
  to: string;
  label: string;
}

interface ExampleLink {
  to: string;
  label: string;
}

interface IconLink {
  icon: string;
  alt: string;
  label: string;
  link: string;
}

interface SideNavProps {
  toggleSideBar?: () => void;
}

const SideNav = ({ toggleSideBar }: SideNavProps) => {
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const navLinks: NavLink[] = [
    { to: "/get-started", label: "Get Started" },
    { to: "/guides", label: "Guides" },
  ];

  const exampleLinks: ExampleLink[] = [
    { to: "#basicusage", label: "Basic Usage" },
    { to: "#separators", label: "Separators & Intervals" },
    { to: "#inputstyles", label: "Custom Input Styles" },
    { to: "#type", label: "Input Type" },
    { to: "#numberofinputs", label: "Input Length" },
    { to: "#autofocus", label: "Autofocus" },
    { to: "#placeholder", label: "Input Placeholder" },
    { to: "#autosubmit", label: "Auto Submit" },
    { to: "#submitoptions", label: "Submit Button Options" },
    { to: "#clearbutton", label: "Clear Button Options" },
    { to: "#resendotp", label: "Resend OTP Functions" },
  ];

  const iconLinks: IconLink[] = [
    {
      icon: npm,
      alt: "npm_icon",
      label: "Npm",
      link: "https://www.npmjs.com/package/react-otp-kit",
    },
    {
      icon: github,
      alt: "github_icon",
      label: "GitHub",
      link: "https://github.com/keys78/react-otp-kit/",
    },
    {
      icon: contributors,
      alt: "contributors_icon",
      label: "Contributors",
      link: "https://github.com/keys78/react-otp-kit/",
    },
  ];

  return (
    <div className="relative xl:mr-[300px] sm:mr-[250px] mr-[300px] h-[100vh] md:pl-[70px] pl-[20px]">
      <nav className="md:min-w-[280px] mt-24 overflow-auto fixed h-full mb-20">
        <ul className="flex flex-col space-y-6 uppercase font-semibold">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                to={navLink.to}
                onClick={toggleSideBar}
                className={
                  location.pathname === navLink.to
                    ? "active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
                    : "text-accent-3"
                }
              >
                {navLink.label}
              </Link>
            </li>
          ))}
          <li>
            <span
              className={
                location.pathname.startsWith("/examples")
                  ? "active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
                  : "text-accent-3"
              }
            >
              Examples
            </span>
            <ul className="capitalize font-light border-l border-accent-1 pl-5 my-3 text-accent-2">
              {exampleLinks.map((exampleLink, index) => (
                <a key={index} href={`/examples/${exampleLink.to}`}>
                  <li
                    onClick={toggleSideBar}
                    className={
                      hash === exampleLink.to
                        ? "mb-3 bg-accent-1 pb-1 pt-[1px] px-3 rounded-md cursor-pointer"
                        : "mb-3 hover:bg-accent-1 pb-1 pt-[1px] px-3 rounded-md cursor-pointer"
                    }
                  >
                    {exampleLink.label}
                  </li>
                </a>
              ))}
            </ul>
          </li>
          <div className="py-4 flex flex-col space-y-4 font-normal capitalize">
            {iconLinks.map((iconLink, index) => (
              <a target="blank" href={iconLink.link} key={index}>
                <div className="flex items-center space-x-2">
                  <img
                    src={iconLink.icon}
                    alt={iconLink.alt}
                    className="w-[20px]"
                  />
                  <span className="text-[14px]">{iconLink.label}</span>
                </div>
              </a>
            ))}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
