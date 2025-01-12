import React from "react"
const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex flex-col items-center space-y-3 p-4 bg-blue-50 shadow-md rounded-lg">
      <input
        type="text"
        aria-label="Search for a movie"
        placeholder="Search movies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-blue-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      />
      <button
        onClick={onSearch}
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
