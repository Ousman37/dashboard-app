// src/components/PrivacyPolicy.jsx
import React from "react";

function PrivacyPolicy() {
  return (
    <main>
    <div className="bg-gray-900 min-h-screen p-5 text-white">
      <h1 className="text-xl font-semibold mb-4">Privacy Policy</h1>
      <p>
        At [Your Company's Name], accessible from [your website], one of our
        main priorities is the privacy of our visitors.
      </p>
      <section>
        <h2 className="text-lg font-semibold mb-2">Information We Collect</h2>
        <p>...</p>
        {/* Add more sections detailing your privacy practices */}
      </section>
      {/* Populate with your actual privacy policy */}
    </div>
    </main>
  );
}

export default PrivacyPolicy;
