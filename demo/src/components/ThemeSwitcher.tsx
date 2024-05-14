import { useEffect, useState } from "react";
import LightIcon from "../assets/svg/LightIcon";
import DarkIcon from "../assets/svg/DarkIcon";
const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    () =>
      localStorage.getItem("selectedTheme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

    const updateTheme = () => {
      const storedTheme = localStorage.getItem("selectedTheme");

      if (storedTheme !== null) {
        setSelectedTheme(storedTheme);
      } else {
        switch (true) {
          case prefersDark.matches:
            setSelectedTheme("Dark");
            break;
          case prefersLight.matches:
            setSelectedTheme("Light");
            break;
          default:
            break;
        }
      }
    };

    updateTheme();

    prefersDark.addEventListener("change", updateTheme);
    prefersLight.addEventListener("change", updateTheme);

    return () => {
      prefersDark.removeEventListener("change", updateTheme);
      prefersLight.removeEventListener("change", updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("selectedTheme", selectedTheme);
  }, [selectedTheme]);

  return (
    <button type="button" className="cursor-pointer flex items-center justify-center w-[20px]" onClick={toggleTheme}>
      {selectedTheme === "light" ? <LightIcon /> : <DarkIcon />}
    </button>
  );
};

export default ThemeSwitcher;
