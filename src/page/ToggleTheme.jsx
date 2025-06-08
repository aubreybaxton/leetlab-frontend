// ThemeToggle.jsx
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
    {theme === "light" ? "Dark" : "Light"} Mode
     <input type="checkbox" defaultChecked className="toggle" onClick={toggleTheme} />
    {/* <button onClick={toggleTheme} className="btn btn-primary">
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button> */}
    </>
   
  );
};

export default ThemeToggle;
