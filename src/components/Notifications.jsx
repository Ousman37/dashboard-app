import React, { useState } from "react";

// Notification component
function Notification({ message, type, onClose }) {
  return (
    <main>
      <div
        className={`notification ${type}`}
        onClick={() => onClose()}
        style={{ cursor: "pointer" }}
      >
        {message}
      </div>
    </main>
  );
}

// Notifications component
function Notifications() {
  const [notifications, setNotifications] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const addNotification = (message, type) => {
    const newNotification = { message, type };
    setNotifications([...notifications, newNotification]);
  };

  const removeNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
     <main>
    <div className="notifications-container">
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          message={notification.message}
          type={notification.type}
          onClose={() => removeNotification(index)}
        />
      ))}
      </div>
     </main>
  );
}

export default Notifications;
