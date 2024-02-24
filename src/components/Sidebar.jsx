// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faHome,
  faChartBar,
  faQuestionCircle,
  faFileContract,
  faShieldAlt,
  faSignInAlt,
  faUserPlus,
  faUser,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthProvider";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { auth, logout } = useAuth();
  const isLoggedIn = !!auth?.user;

  const handleLogout = () => {
    logout();
    toggleSidebar(); // Close the sidebar on logout
  };

  return (
    <aside
      className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform z-30 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-200 ease-in-out h-full`}
    >
      <div className="font-bold text-xl mb-4">Dashboard</div>
      <ul>
        <li>
          <NavLink
            to="/"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faHome} className="mr-4" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-4" />{" "}
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faChartBar} className="mr-4" /> Analytics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faUser} className="mr-4" /> UserProfile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-4" /> Help /
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/terms"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faFileContract} className="mr-4" /> Terms of
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faShieldAlt} className="mr-4" /> Privacy
            Policy
          </NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <NavLink
                to="/settings"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" /> Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/login"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-4" /> Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <FontAwesomeIcon icon={faUserPlus} className="mr-4" /> Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
