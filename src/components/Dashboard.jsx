import React, { useState, useEffect } from "react";
import Widget from "./Widget";
import Search from "./SearchComponent"; // Import the Search component

function Dashboard({ user }) {
  const [widgets, setWidgets] = useState([]);
  const [filteredWidgets, setFilteredWidgets] = useState([]);

  const availableWidgets = [
    "AnalyticsWidget",
    "TasksWidget",
    "CalendarWidget", // Add more widgets as needed
  ];

  useEffect(() => {
    const savedWidgets = JSON.parse(localStorage.getItem("userWidgets"));
    if (savedWidgets) {
      setWidgets(savedWidgets);
      setFilteredWidgets(savedWidgets);
    }
  }, [user]);

  const addWidget = (widgetName) => {
    if (!widgets.includes(widgetName)) {
      const newWidgets = [...widgets, widgetName];
      setWidgets(newWidgets);
      localStorage.setItem("userWidgets", JSON.stringify(newWidgets));
      setFilteredWidgets(newWidgets);
    }
  };

  const removeWidget = (widgetName) => {
    const filteredWidgets = widgets.filter((widget) => widget !== widgetName);
    setWidgets(filteredWidgets);
    localStorage.setItem("userWidgets", JSON.stringify(filteredWidgets));
    setFilteredWidgets(filteredWidgets);
  };

  const handleSearch = (query) => {
    const filtered = widgets.filter((widget) =>
      widget.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredWidgets(filtered);
  };

  return (
    <main className=" bg-light-900 dark:bg-dark-900 text-light-300 dark:text-dark-300 min-h-screen p-8">
      <div>
        <Search onSearch={handleSearch} />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {availableWidgets.map((widgetName) => (
            <button
              key={widgetName}
              onClick={() => addWidget(widgetName)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add {widgetName}
            </button>
          ))}
        </div>
        <div className="dashboard-grid mt-4 text-black">
          {filteredWidgets.map((widgetName) => (
            <Widget
              key={widgetName}
              name={widgetName}
              removeWidget={() => removeWidget(widgetName)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
