import React from "react";
import { FaPlus, FaBell } from "react-icons/fa"; // Import icons

// Notification component
function Notification({ message, type, onClose }) {
  const handleCloseClick = (e) => {
    e.stopPropagation(); // Prevents the click from bubbling up to parent elements
    onClose();
  };

  return (
    <div
      className={`flex items-center justify-between ${
        type === "error"
          ? "bg-red-100 border-l-4 border-red-500 text-red-700"
          : "bg-blue-100 border-l-4 border-blue-500 text-blue-700"
      } p-4 mb-4 rounded shadow-lg transition-all duration-300 ease-in-out`}
      role="alert"
    >
      <div className="flex items-center">
        <FaBell className="mr-2" size={20} />
        <span className="font-medium">{message}</span>
      </div>
      <span className="text-sm cursor-pointer" onClick={handleCloseClick}>
        X
      </span>
    </div>
  );
}

// Assuming addNotification is now passed as a prop
function Notifications({ notifications, addNotification, removeNotification }) {
  const handleAddNotificationClick = () => {
    addNotification("New notification!", "info"); // Example notification
  };

  return (
    <div className="notifications-container">
      <button
        onClick={handleAddNotificationClick}
        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full flex items-center justify-center"
        title="Add Notification" // Tooltip for clarity
        style={{ width: "40px", height: "40px" }} // Adjust size as needed
      >
        <FaPlus size={16} />
      </button>

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

// import React from "react";
// import { FaPlus, FaBell } from "react-icons/fa"; // Import icons

// // Notification component
// function Notification({ message, type, onClose }) {
//   // Function to stop propagation and call onClose
//   const handleCloseClick = (e) => {
//     e.stopPropagation(); // Prevents the click from bubbling up to parent elements
//     onClose();
//   };

//   return (
//     <div
//       className={`flex items-center justify-between ${
//         type === "error"
//           ? "bg-red-100 border-l-4 border-red-500 text-red-700"
//           : "bg-blue-100 border-l-4 border-blue-500 text-blue-700"
//       } p-4 mb-4 rounded shadow-lg transition-all duration-300 ease-in-out`}
//       role="alert"
//     >
//       <div className="flex items-center">
//         <FaBell className="mr-2" size={20} />
//         <span className="font-medium">{message}</span>
//       </div>
//       {/* Attach onClick handler directly to the span acting as the close button */}
//       <span className="text-sm cursor-pointer" onClick={handleCloseClick}>
//         X
//       </span>
//     </div>
//   );
// }

// function Notifications({ notifications, addNotification, removeNotification }) {
//   // No need to use useState here because notifications are passed from Home

//   // Function to handle click event for adding notification
//   const handleAddNotificationClick = () => {
//     addNotification("This is a new notification!", "info");
//   };
//   return (
//     <div className="notifications-container">
//       <button
//         onClick={handleAddNotificationClick}
//         className="flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
//         type="button"
//       >
//         <FaPlus className="mr-2" size={16} /> Add Notification
//       </button>

//       {notifications.map((notification, index) => (
//         <Notification
//           key={index}
//           message={notification.message}
//           type={notification.type}
//           onClose={() => removeNotification(index)}
//         />
//       ))}
//     </div>
//   );
// }

// export default Notifications;
