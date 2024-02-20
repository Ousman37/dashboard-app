// src/components/Settings.js
import React from "react";
import { useSettings } from "../context/SettingsContext";

function Settings() {
  const { settings, updateSettings } = useSettings();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    updateSettings({ [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings saved:", settings);
    // Here you might also sync settings to a backend or local storage
    // This example simply logs the current settings state
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white p-5">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="darkMode"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="darkMode"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
              className="mr-2"
            />{" "}
            Dark Mode
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="notifications"
            className="flex items-center cursor-pointer"
          >
            <input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className="mr-2"
            />{" "}
            Enable Notifications
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Settings;
