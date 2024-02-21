import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import { AuthProvider } from "./context/AuthProvider";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import Settings from "./components/Settings";
import ContactUs from "./components/ContactUs";
import HelpFaq from "./components/HelpFaq";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import Analytics from "./components/Analytics";
import { ThemeProvider } from "./context/ThemeContext";
import Notifications from "./components/Notifications"; // Make sure this component exists
import { generateNotificationMessage } from "./utils/notificationUtils"; // Ensure the utility is correctly imported

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Example of adding a notification on component mount
  useEffect(() => {
    // Example of generating a welcome message on component mount
    const welcomeMessage = generateNotificationMessage("feedbackThankYou", {
      userName: "User",
    });
    addNotification(welcomeMessage, "info");
    // You could add other types of notifications here based on app logic
  }, []);

  const addNotification = (message, type = "info") => {
    setNotifications((prev) => [...prev, { message, type }]);
  };

  const removeNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemeProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header toggleSidebar={toggleSidebar} />
              <div className="bg-light-900 dark:bg-dark-900 text-light-300 dark:text-dark-300p-4">
                <Notifications
                  notifications={notifications}
                  removeNotification={removeNotification}
                />
              </div>
              <div className="flex flex-1">
                <Sidebar
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
                <main className="flex-1">
                  <Routes>
                    <Route
                      path="/"
                      element={<Home addNotification={addNotification} />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/help" element={<HelpFaq />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/analytics" element={<Analytics />} />{" "}
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;
