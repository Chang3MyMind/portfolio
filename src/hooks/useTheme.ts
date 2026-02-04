import { useState, useEffect } from "react";

export const useTheme = () => {
  const getInitialTheme = (): "light" | "dark" => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    return userMedia.matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { toggleTheme };
};
