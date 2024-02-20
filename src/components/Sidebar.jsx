import React, { useState, useContext } from "react";
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
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../context/AuthProvider"; // Correct import path as needed

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  const isLoggedIn = !!auth?.user;

  const handleLogout = () => {
    setAuth({});
    setIsSidebarOpen(false);
  };

  return (
    <>
    <main>
      <div className="md:hidden fixed top-0 right-0 z-50 p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white bg-gray-700 p-2 rounded focus:outline-none focus:ring"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div
        className={`min-h-screen bg-gray-800 text-white fixed md:relative z-40 w-64 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 overflow-auto`}
      >
        <div className="font-bold text-xl p-5">Dashboard</div>
        <ul className="flex flex-col p-5 gap-2">
          {/* Home */}
          <li className="hover:bg-gray-700 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <NavLink to="/" onClick={() => setIsSidebarOpen(false)}>
              Home
            </NavLink>
          </li>

          {/* Dashboard */}
          <li className="hover:bg-gray-700 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
            <NavLink to="/dashboard" onClick={() => setIsSidebarOpen(false)}>
              Dashboard
            </NavLink>
          </li>

          {/* Analytics */}
          <li className="hover:bg-gray-700 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            <NavLink to="/analytics" onClick={() => setIsSidebarOpen(false)}>
              Analytics
            </NavLink>
          </li>

          {/* Help / FAQ */}
          <li className="hover:bg-gray-700 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            <NavLink to="/help" onClick={() => setIsSidebarOpen(false)}>
              Help / FAQ
            </NavLink>
          </li>

          {/* Terms of Service */}
          <li className="hover:bg-gray-700 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faFileContract} className="mr-2" />
            <NavLink to="/terms" onClick={() => setIsSidebarOpen(false)}>
              Terms of Service
            </NavLink>
          </li>

          {/* Privacy Policy */}
          <li className="hover:bg-gray-700 p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
            <NavLink to="/privacy" onClick={() => setIsSidebarOpen(false)}>
              Privacy Policy
            </NavLink>
          </li>

          {/* Conditional rendering based on login status */}
          {isLoggedIn ? (
            <>
              {/* Settings */}
              <li className="hover:bg-gray-700 p-2 rounded flex items-center">
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                <NavLink to="/settings" onClick={() => setIsSidebarOpen(false)}>
                  Settings
                </NavLink>
              </li>
              {/* Log Out */}
              <li className="hover:bg-gray-700 p-2 rounded flex items-center">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full text-left"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              {/* Login */}
              <li className="hover:bg-gray-700 p-2 rounded flex items-center">
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                <NavLink to="/login" onClick={() => setIsSidebarOpen(false)}>
                  Login
                </NavLink>
              </li>
              {/* Register */}
              <li className="hover:bg-gray-700 p-2 rounded flex items-center">
                <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                <NavLink to="/register" onClick={() => setIsSidebarOpen(false)}>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      </main>
    </>
  );
}

export default Sidebar;
