import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import { AuthProvider } from "./context/AuthProvider";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
// import Chart from "./components/Chart";
import Settings from "./components/Settings";
import ContactUs from "./components/ContactUs";
import HelpFaq from "./components/HelpFaq";
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile"; // Import the UserProfileManagement component
import Analytics from "./components/Analytics"; // Import the Analytics component

function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* <Route path="/chart" element={<Chart />} /> */}
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
      </SettingsProvider>
    </AuthProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { SettingsProvider } from "./context/SettingsContext";
// import { AuthProvider } from "./context/AuthProvider";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Chart from "./components/Chart";
// import Settings from "./components/Settings";
// import ContactUs from "./components/ContactUs";
// import HelpFaq from "./components/HelpFaq";
// import TermsOfService from "./components/TermsOfService";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import UserProfile from "./components/UserProfile"; // Import the UserProfileManagement component

// function App() {
//   return (
//     <AuthProvider>
//       <SettingsProvider>
//         <Router>
//           <div className="flex flex-col min-h-screen">
//             <div className="flex flex-1">
//               <Sidebar />
//               <div className="flex-1 flex flex-col">
//                 <Header />
//                 <main className="flex-1">
//                   <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/chart" element={<Chart />} />
//                     <Route path="/settings" element={<Settings />} />
//                     <Route path="/contact" element={<ContactUs />} />
//                     <Route path="/help" element={<HelpFaq />} />
//                     <Route path="/terms" element={<TermsOfService />} />
//                     <Route path="/privacy" element={<PrivacyPolicy />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     {/* Define route for UserProfileManagement */}
//                     <Route path="/profile" element={<UserProfile />} />
//                   </Routes>
//                 </main>
//                 <Footer />
//               </div>
//             </div>
//           </div>
//         </Router>
//       </SettingsProvider>
//     </AuthProvider>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
// } from "@clerk/clerk-react";
// import { SettingsProvider } from "./contexts/SettingsContext";
// import Sidebar from "./components/Sidebar";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Chart from "./components/Chart";
// import Settings from "./components/Settings";
// import ContactUs from "./components/ContactUs";
// import HelpFaq from "./components/HelpFaq";
// import TermsOfService from "./components/TermsOfService";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import Footer from "./components/Footer";
// import Dashboard from "./components/Dashboard";
// import UserProfile from "./components/UserProfile";

// // Ensure the environment variable is correctly loaded
// const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY; // For Vite
// // const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API; // For Create React App

// if (!clerkFrontendApi) {
//   console.error("Clerk Frontend API key is not set");
// }

// function App() {
//   return (
//     <ClerkProvider frontendApi={clerkFrontendApi}>
//       <SettingsProvider>
//         <Router>
//           <div className="flex flex-col min-h-screen">
//             <Sidebar />
//             <div className="flex-1 flex flex-col">
//               <Header />
//               <main className="flex-1">
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/chart" element={<Chart />} />
//                   <Route path="/settings" element={<Settings />} />
//                   <Route path="/contact" element={<ContactUs />} />
//                   <Route path="/help" element={<HelpFaq />} />
//                   <Route path="/terms" element={<TermsOfService />} />
//                   <Route path="/privacy" element={<PrivacyPolicy />} />
//                   <Route
//                     path="/login"
//                     element={
//                       <SignedOut>
//                         <RedirectToSignIn />
//                       </SignedOut>
//                     }
//                   />
//                   <Route
//                     path="/register"
//                     element={
//                       <SignedOut>
//                         <RedirectToSignIn />
//                       </SignedOut>
//                     }
//                   />
//                   <Route
//                     path="/profile"
//                     element={
//                       <SignedIn>
//                         <UserProfile />
//                       </SignedIn>
//                     }
//                   />
//                 </Routes>
//               </main>
//               <Footer />
//             </div>
//           </div>
//         </Router>
//       </SettingsProvider>
//     </ClerkProvider>
//   );
// }

// export default App;
