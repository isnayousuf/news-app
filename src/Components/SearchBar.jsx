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
    <div className="w-100"> 
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
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar
