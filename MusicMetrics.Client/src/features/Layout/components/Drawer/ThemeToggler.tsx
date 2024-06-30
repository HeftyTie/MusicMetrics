import React, { useEffect, useState } from "react";
import { manageTheme } from "../../../../utils/themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<"theme-dark" | "theme-light">(
    () =>
      (localStorage.getItem("theme") as "theme-dark" | "theme-light") ||
      "theme-dark"
  );

  const toggleTheme = () => {
    const newTheme = theme === "theme-dark" ? "theme-light" : "theme-dark";
    manageTheme(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    manageTheme();
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 btn btn-spotify-green hover:btn-spotify-green"
    >
      Toggle Theme:
      <span className="theme-icon">
        {theme === "theme-dark" ? <FaMoon /> : <FaSun />}
      </span>
    </button>
  );
};
