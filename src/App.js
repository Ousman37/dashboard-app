import React, { useState } from "react";
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

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemeProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <div className="flex">
                <Sidebar
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
                <div className="flex-1">
                  <Header toggleSidebar={toggleSidebar} />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/contact" element={<ContactUs />} />
                      <Route path="/help" element={<HelpFaq />} />
                      <Route path="/terms" element={<TermsOfService />} />
                      <Route path="/privacy" element={<PrivacyPolicy />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/profile" element={<UserProfile />} />
                      {/* Add the route for Analytics */}
                      <Route path="/analytics" element={<Analytics />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </div>
            </div>
          </Router>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;
