import { createContext, useContext, useState } from "react";
import "./Dark.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const DarkLight = () => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <div className={`app-wrapper ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
      <h1>Dark Light Mode Website</h1>
      <p>Hello!! My React v19 Fans</p>

      <button className="theme-btn" onClick={handleToggleTheme}>
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
