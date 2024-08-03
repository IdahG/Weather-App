import React from 'react';

const SearchBar = ({ city, setCity, handleSearch }) => (
  <div>
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city"
    />
    <button onClick={handleSearch}>Search</button>
  </div>
);

export default SearchBar;