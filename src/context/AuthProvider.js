import { createContext, useContext, useState } from "react";

// Define the initial authentication state
const initialAuthState = {
  user: null,
  isLoggedIn: false,
};

// Create the authentication context
const AuthContext = createContext(initialAuthState);

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);

// Authentication provider component
export const AuthProvider = ({ children }) => {
  // Initialize authentication state using useState
  const [auth, setAuth] = useState(initialAuthState);

  // Function to handle user login
  const login = async (userData) => {
    // Perform login logic here, e.g., make API request to login endpoint
    // Update auth state if login is successful
    setAuth({ user: userData, isLoggedIn: true });
  };

  // Function to handle user logout
  const logout = async () => {
    // Perform logout logic here, e.g., clear session, revoke tokens, etc.
    // Update auth state
    setAuth(initialAuthState);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
