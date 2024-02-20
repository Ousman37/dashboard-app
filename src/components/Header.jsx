import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import {
  FaCog,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
} from "react-icons/fa";
import UserProfile from "./UserProfile"; // Import the UserProfile component

function Header({ title = "Dashboard" }) {
  const { isLoggedIn, logout } = useAuth();

  return (
    <main>
      <div className="flex justify-between items-center w-full bg-gray-700 text-white p-5 text-lg font-semibold">
        {title}
        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <>
              {/* Show UserProfile, Settings, and Log Out for logged-in users */}
              <UserProfile />
              <button
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded flex items-center"
                title="Settings"
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
          ) : (
            <>
              {/* Hide Login and Register on small screens, show on bigger screens */}
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded items-center hidden md:flex" // Hidden by default, visible on md screens and up
                title="Login"
              >
                <FaSignInAlt />
                <span className="ml-2">Login</span>
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded items-center hidden md:flex" // Hidden by default, visible on md screens and up
                title="Register"
              >
                <FaUserPlus />
                <span className="ml-2">Register</span>
              </Link>
            </>
          )}
          {/* Show the user icon if the user is logged in */}
          {isLoggedIn && <FaUser className="text-lg" title="User" />}
        </div>
      </div>
    </main>
  );
}

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCog,
//   faSignOutAlt,
//   faSignInAlt,
//   faUserPlus,
// } from "@fortawesome/free-solid-svg-icons";

// function Header({ title = "Dashboard" }) {
//   const { isLoggedIn, logout } = useAuth();

//   return (
//     <div className="flex justify-between items-center w-full  bg-gray-700 text-white p-5 text-lg font-semibold">
//       {title}
//       <div className="flex items-center space-x-2">
//         {isLoggedIn ? (
//           <>
//             {/* Always show Settings and Log Out for logged-in users */}
//             <button
//               className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded flex items-center"
//               title="Settings"
//             >
//               <FontAwesomeIcon icon={faCog} />
//               <span className="ml-2">Settings</span>
//             </button>
//             <button
//               onClick={logout}
//               className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex items-center"
//               title="Log Out"
//             >
//               <FontAwesomeIcon icon={faSignOutAlt} />
//               <span className="ml-2">Log Out</span>
//             </button>
//           </>
//         ) : (
//           <>
//             {/* Hide Login and Register on small screens, show on bigger screens */}
//             <Link
//               to="/login"
//               className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded items-center hidden md:flex" // Hidden by default, visible on md screens and up
//               title="Login"
//             >
//               <FontAwesomeIcon icon={faSignInAlt} />
//               <span className="ml-2">Login</span>
//             </Link>
//             <Link
//               to="/register"
//               className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded items-center hidden md:flex" // Hidden by default, visible on md screens and up
//               title="Register"
//             >
//               <FontAwesomeIcon icon={faUserPlus} />
//               <span className="ml-2">Register</span>
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;
