import React from "react";

function Widget({ name, removeWidget }) {
  return (
    <main>
    <div className="widget p-4 shadow-lg rounded bg-white m-2">
      <h4 className="widget-title font-bold mb-2">{name}</h4>
      <button
        className="remove-widget bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        onClick={removeWidget}
      >
        Remove
      </button>
    </div>
    </main>
  );
}

export default Widget;
