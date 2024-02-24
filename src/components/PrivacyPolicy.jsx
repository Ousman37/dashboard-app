// src/components/PrivacyPolicy.jsx
import React from "react";

function PrivacyPolicy() {
  // Assuming your Tailwind setup includes custom colors named appropriately
  return (
    <main className="bg-light-900 dark:bg-dark-900 text-light-300 dark:text-dark-300 min-h-screen p-8">
      <div className="min-h-screen p-5">
        <h1 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Privacy Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          At [Your Company's Name], accessible from [your website], one of our
          main priorities is the privacy of our visitors.
        </p>
        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Information We Collect
          </h2>
          <p className="text-gray-600 dark:text-gray-400">...</p>
          {/* Add more sections detailing your privacy practices */}
        </section>
        {/* Populate with your actual privacy policy */}
      </div>
    </main>
  );
}

export default PrivacyPolicy;

// import React from "react";

// function PrivacyPolicy() {
//   return (
//     <main className=" bg-light-900 dark:bg-dark-900 text-light-300 dark:text-dark-300 min-h-screen p-8">
//       <div className=" min-h-screen p-5  ">
//         <h1 className="text-xl font-semibold mb-4 ">Privacy Policy</h1>
//         <p>
//           At [Your Company's Name], accessible from [your website], one of our
//           main priorities is the privacy of our visitors.
//         </p>
//         <section>
//           <h2 className="text-lg font-semibold mb-2">Information We Collect</h2>
//           <p>...</p>
//           {/* Add more sections detailing your privacy practices */}
//         </section>
//         {/* Populate with your actual privacy policy */}
//       </div>
//     </main>
//   );
// }

// export default PrivacyPolicy;
