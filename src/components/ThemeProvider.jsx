// src/components/ThemeProvider.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeProvider = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full flex items-center justify-center ${
        theme === "dark" ? "text-yellow-500" : "text-gray-800"
      } hover:bg-opacity-80 transition-colors duration-300`}
      aria-label={
        theme === "dark" ? "Activate light mode" : "Activate dark mode"
      }
    >
      {theme === "dark" ? (
        <FaMoon className="text-xl" />
      ) : (
        <FaSun className="text-xl" />
      )}
    </button>
  );
};

export default ThemeProvider;
