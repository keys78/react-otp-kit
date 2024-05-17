import { Link, useLocation } from "react-router-dom";
import npm from "../assets/svg/npmIcon.svg";
import github from "../assets/svg/githubIcon.svg";
import contributors from "../assets/svg/contributorsIcon.svg";

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

const SideNav = () => {
  const location = useLocation();
  const hash = location.hash;

  const navLinks: NavLink[] = [
    { to: "/get-started", label: "Get Started" },
    { to: "/guides", label: "Guides" },
  ];

  const exampleLinks: ExampleLink[] = [
    { to: "#basicusage", label: "basic sage" },
    { to: "#withseparators", label: "with separators" },
    { to: "#autofocus", label: "auto focus" },
  ];

  const iconLinks: IconLink[] = [
    {
      icon: npm,
      alt: "npm_icon",
      label: "Npm",
      link: "https://github.com/keys78",
    },
    {
      icon: github,
      alt: "github_icon",
      label: "GitHub",
      link: "https://github.com/keys78",
    },
    {
      icon: contributors,
      alt: "contributors_icon",
      label: "Contributors",
      link: "https://github.com/keys78",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-[230px] mr-[350px] mt-24 pl-[60px]">
      <ul className="flex flex-col space-y-6 uppercase font-semibold">
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link
              to={navLink.to}
              className={
                location.pathname === navLink.to
                  ? "active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text"
                  : ""
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
                : ""
            }
          >
            Examples
          </span>
          <ul className="capitalize font-light border-l border-accent-1 pl-5 my-3 text-accent-2">
            {exampleLinks.map((exampleLink, index) => (
              <a key={index} href={`/examples/${exampleLink.to}`}>
                <li
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
            <a href={iconLink.link} key={index}>
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
  );
};

export default SideNav;
