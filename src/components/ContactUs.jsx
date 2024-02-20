// src/components/ContactUs.jsx

import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", formData);
      setSuccessMessage(
        "Thank you for contacting us! We will get back to you soon."
      );
      setErrorMessage("");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <main>
      <div className="bg-gray-800  min-h-screen text-white p-5">
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        {successMessage && (
          <div className="bg-green-500 p-3 rounded mb-4">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="bg-red-500 p-3 rounded mb-4">{errorMessage}</div>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-gray-700 text-white w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-gray-700 text-white w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 rounded bg-gray-700 text-white w-full h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}

export default ContactUs;
