import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from "react-icons/fa";

function Notification({ message, type, onClose }) {
  const notificationStyles = {
    success: "bg-green-100 border-l-4 border-green-500 text-green-700",
    error: "bg-red-100 border-l-4 border-red-500 text-red-700",
    info: "bg-blue-100 border-l-4 border-blue-500 text-blue-700",
  };

  const iconTypes = {
    success: <FaCheckCircle className="mr-2" size={20} />,
    error: <FaExclamationTriangle className="mr-2" size={20} />,
    info: <FaInfoCircle className="mr-2" size={20} />,
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className={`flex items-center justify-between ${notificationStyles[type]} p-4 mb-4 rounded shadow-lg transition-all duration-300 ease-in-out`}
      role="alert"
    >
      <div className="flex items-center">
        {iconTypes[type]}
        <span className="font-medium">{message}</span>
      </div>
      <span className="text-sm cursor-pointer" onClick={handleCloseClick}>
        X
      </span>
    </div>
  );
}

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Automatically add a notification after a delay
    const timer = setTimeout(() => {
      setNotifications([
        {
          message: "Welcome to VisuaLytics! Start exploring your dashboard.",
          type: "info",
        },
      ]);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const removeNotification = (index) => {
    setNotifications((currentNotifications) =>
      currentNotifications.filter((_, i) => i !== index)
    );
  };

  return (
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
  );
}

export default Notifications;
