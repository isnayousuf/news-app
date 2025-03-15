import { debounce } from "lodash";

import { useCallback, useState } from "react";

const Navbar = ({ setCategory, setSearchQuery }) => {
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
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News App</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("technology");
                }}
              >
                tech
              </div>
              <div></div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("business");
                }}
              >
                business
              </div>
              <div></div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("health");
                }}
              >
                health
              </div>
              <div></div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("science");
                }}
              >
                Science
              </div>
              <div></div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("sports");
                }}
              >
                Sports
              </div>
              <div></div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => {
                  setCategory("entertainment");
                }}
              >
                Entertainment
              </div>
              <div></div>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => setSearchQuery(searchTerm)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
