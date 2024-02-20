import React from "react";

function TermsOfService() {
  return (
    <main>
    <div className="p-5 bg-gray-900 min-h-screen text-white">
      {" "}
      {/* Ensures dark background and white text */}
      <h1 className="text-xl font-semibold mb-4">Terms of Service</h1>
      <p>
        These terms of service outline the rules and regulations for the use of
        [Your Company's Name]'s Website.
      </p>
      <section>
        <h2 className="text-lg font-semibold mb-2">Introduction</h2>
        <p>...</p>
        {/* Additional content */}
      </section>
      {/* More sections */}
    </div>
    </main>
  );
}

export default TermsOfService;
