import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
      className="block w-full px-4 py-2 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline"
    />
  );
}

export default Search;
