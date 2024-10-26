import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// ThemeToggler component
const ThemeToggler: React.FC = () => {
  const context = useContext(ThemeContext);

  // Ensure the component is used within the ThemeProvider
  if (!context) {
    throw new Error("ThemeToggler must be used within a ThemeProvider");
  }

  const { toggleTheme } = context; // Destructure toggleTheme from context

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-light-muted dark:bg-dark-muted rounded transition-colors duration-300"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
