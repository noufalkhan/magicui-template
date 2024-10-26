'use client';
import React, { createContext, useState, useEffect } from "react";

type Theme = "light" | "dark"; // Define a specific type for theme

type ThemeContextType = {
  toggleTheme: () => void; // Function to toggle the theme
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined); // Create context

// ThemeProvider component to manage theme state
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null); // Initial theme state

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme; // Get stored theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Check system preference

    // Set initial theme based on localStorage or system preference
    setTheme(storedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme; // Apply theme class to root
      localStorage.setItem("theme", theme); // Store the new theme
    }
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Prevent rendering until the theme is determined
  if (theme === null) {
    return null; 
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children} {/* Provide context to children */}
    </ThemeContext.Provider>
  );
};
