import npmIcon from "../assets/svg/npmIcon.svg";
import githubIcon from "../assets/svg/githubIcon.svg";
import contributorsIcon from "../assets/svg/contributorsIcon.svg";
import React from "react";

interface Icon {
  src: string;
  alt: string;
  link: string;
  label: string;
}

const icons: Icon[] = [
  {
    src: npmIcon,
    alt: "npm_icon",
    link: "https://www.npmjs.com/package/react-otp-kit",
    label: "Npm",
  },
  {
    src: githubIcon,
    alt: "github_icon",
    link: "https://github.com/keys78/react-otp-kit/",
    label: "GitHub",
  },
  {
    src: contributorsIcon,
    alt: "contributors_icon",
    link: "https://github.com/keys78/react-otp-kit/",
    label: "Contributors",
  },
];

const Footer: React.FC = () => {
  return (
    <div className="py-4 mt-10 flex items-center sm:space-x-10 space-x-5 justify-center">
      {icons.map((icon, index) => (
        <a key={index} target="_blank" href={icon.link}>
          <div className="flex items-center space-x-2">
            <img src={icon.src} alt={icon.alt} className="w-[25px]" />
            <span>{icon.label}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Footer;
