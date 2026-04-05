import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Initialize state from localStorage (default to 'light' if empty)
 const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("app-theme");
  if (savedTheme) return savedTheme;

  // If no saved preference, check the browser/OS setting
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
});

  useEffect(() => {
    // 2. Update the HTML attribute for DaisyUI/Tailwind
    document.documentElement.setAttribute("data-theme", theme);

    // 3. Save the current theme to localStorage
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
