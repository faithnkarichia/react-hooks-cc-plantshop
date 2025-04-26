import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        id="search"
        type="text"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
