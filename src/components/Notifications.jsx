import React, { useState } from "react";

// Notification component
function Notification({ message, type, onClose }) {
  return (
    <div
      className={`notification ${type}`}
      onClick={() => onClose()}
      style={{ cursor: "pointer" }}
    >
      {message}
    </div>
  );
}

// Notifications component
function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type) => {
    const newNotification = { message, type };
    setNotifications([...notifications, newNotification]);
  };

  const removeNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  // For demonstration: a function to simulate adding a notification
  const handleAddNotificationClick = () => {
    addNotification("This is a new notification!", "info"); // 'info' is a placeholder for the type of notification
  };

  return (
    <div className="notifications-container">
      {/* Button to add a notification */}
      <button onClick={handleAddNotificationClick}>Add Notification</button>

      {notifications.map((notification, index) => (
        <Notification
          key={index}
          message={notification.message}
          type={notification.type}
          onClose={() => removeNotification(index)}
        />
      ))}
    </div>
  );
}

export default Notifications;
