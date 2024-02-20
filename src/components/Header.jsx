import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import {
  FaBars,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaChartLine,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import UserProfile from "./UserProfile"; // Ensure this is the correct path to your UserProfile component
import { useTheme } from "../context/ThemeContext"; // Import useTheme if needed

// Accepting toggleSidebar as a prop
function Header({ toggleSidebar }) {
  const { isLoggedIn, logout } = useAuth();
  const { theme, toggleTheme } = useTheme(); // Use the useTheme hook here

  return (
    <header className="flex justify-between items-center w-full bg-gray-700 text-white p-5 text-lg font-semibold">
      <div className="flex items-center">
        {/* Adding a button to toggle the sidebar visibility */}
        <button onClick={toggleSidebar} className="mr-4 text-xl md:hidden">
          <FaBars />
        </button>
        {/* Wrap the icon and the text with Link component to make it clickable */}
        <Link to="/" className="flex items-center">
          <FaChartLine className="text-xl mr-2" />
          <span className="text-xl font-bold">VisuaLytics</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
            theme === "dark" ? "bg-yellow-500" : "bg-gray-800"
          }`}
        >
          {theme === "dark" ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </button>
        {/* User Profile and Logout functionality */}
        {isLoggedIn ? (
          <>
            <UserProfile />
            <button
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded flex items-center"
              title="Settings"
              onClick={() => {
                /* Settings click handler */
              }}
            >
              <FaCog />
              <span className="ml-2">Settings</span>
            </button>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex items-center"
              title="Log Out"
            >
              <FaSignOutAlt />
              <span className="ml-2">Log Out</span>
            </button>
          </>
        ) : null}
        {/* Display user icon if logged in */}
        {isLoggedIn && <FaUser className="text-lg" title="User" />}
        {/* Menu button visible on larger screens to toggle sidebar */}
        <button
          onClick={toggleSidebar}
          className="text-xl focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hidden md:block"
        >
          <FaBars aria-label="Open sidebar" />
        </button>
      </div>
    </header>
  );
}

export default Header;
