import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 p-6 mt-auto">
      {" "}
      {/* Adjusted background and text color */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {" "}
        {/* Centered content with spacing */}
        <div>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
        <div className="flex justify-center space-x-6">
          <Link to="/terms" className="hover:text-white">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          {/* Add more links as needed */}
        </div>
        <div>
          Follow us:
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:text-white"
          >
            Facebook
          </a>
          {/* Add more social links */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
