import React, { useState } from "react";
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
// Import only useAuth from your AuthProvider module
import { useAuth } from "../context/AuthProvider";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Destructure logout function and possibly user state from useAuth
  const { auth, logout } = useAuth();

  const isLoggedIn = !!auth?.user;

  // Handle logout logic using the logout function from useAuth
  const handleLogout = () => {
    logout(); // This should correctly logout the user
    setIsSidebarOpen(false);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="font-bold text-xl mb-4">Dashboard</div>
        <ul>
          <li>
            <NavLink
              to="/"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faHome} className="mr-4" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-4" />{" "}
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faChartBar} className="mr-4" /> Analytics
            </NavLink>
          </li>
          <li>
            {/* UserProfile Component Placeholder - Implement actual navigation or modal */}
            <NavLink
              to="/profile"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faUser} className="mr-4" /> UserProfile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-4" /> Help
              / FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faFileContract} className="mr-4" /> Terms
              of Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
            >
              <FontAwesomeIcon icon={faShieldAlt} className="mr-4" /> Privacy
              Policy
            </NavLink>
          </li>
          {/* Authentication Links */}
          {isLoggedIn ? (
            <>
              <li>
                <NavLink
                  to="/settings"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" /> Log
                  Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-4" /> Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="mr-4" />{" "}
                  Register
                </NavLink>
              </li>

              <li>
                <a
                  href="#!"
                  onClick={handleLogout}
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-4" /> Log
                  Out
                </a>
              </li>

              <li>
                <NavLink
                  to="/settings"
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                >
                  <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </aside>
      <div className="flex-1">
        {/* Main content goes here, e.g., header, main section */}
      </div>
    </div>
  );
}

export default Sidebar;
