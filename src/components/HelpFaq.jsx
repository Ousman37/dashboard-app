// src/components/HelpFaq.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      'To reset your password, go to the settings page and click on "Reset Password".',
  },
  {
    question: "Where can I find the documentation?",
    answer: "Documentation can be found under the Help section of our website.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Support can be reached via email at support@example.com or through our contact form.",
  },
  // Add more FAQs here
];

function HelpFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-800   min-h-screen  text-white p-5">
      <h2 className="text-lg font-semibold mb-4">Help / FAQ</h2>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left text-lg font-semibold p-2 rounded focus:outline-none focus:ring bg-gray-700 hover:bg-gray-600"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="mt-2 p-2 bg-gray-600 rounded">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpFaq;
