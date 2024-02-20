import React, { useState } from "react";
import Avatar from "react-avatar";

function UserProfile() {
  const [formData, setFormData] = useState({
    username: "John Joe",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    profilePicUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Here, you can handle the form submission, like sending the data to a backend server.
    // After submission, you might want to reset the form or give some feedback to the user.
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        {formData.profilePicUrl ? (
          <img
            src={formData.profilePicUrl}
            alt="Profile"
            className="rounded-full mx-auto w-32 h-32 object-cover"
          />
        ) : (
          <Avatar
            name={formData.username || "User"}
            size="100"
            round={true}
            className="mx-auto"
          />
        )}
        <h2 className="text-xl font-semibold mt-4">
          {formData.username || "Your Name"}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow"
      >
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="profilePicUrl"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            Profile Picture URL:
          </label>
          <input
            type="text"
            id="profilePicUrl"
            name="profilePicUrl"
            value={formData.profilePicUrl}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            Current Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="newPassword"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="mb-1 text-sm font-semibold text-gray-700"
          >
            Confirm New Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
