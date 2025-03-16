import { debounce } from "lodash";
import React, { useCallback, useState } from 'react';

const SearchBar = ({setSearchQuery}) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const debounceSearch = useCallback(
      debounce((query) => {
        setSearchQuery(query);
      }, 500),
      []
    );
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (searchTerm.trim() !== "") {
        debounceSearch(searchTerm);
      }
    };
  
  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search any news"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={() => setSearchQuery(searchTerm)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar
