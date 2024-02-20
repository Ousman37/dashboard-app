// src/components/LogOut.jsx
import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const { logout } = useAuth(); // Destructure logout function from context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded"
    >
      Log Out
    </button>
  );
};

export default LogOut;
