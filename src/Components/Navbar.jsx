import { debounce } from "lodash";
import { NewsCategories } from "../constants";

import { useCallback, useState } from "react";

const Navbar = ({ setCategory, setSearchQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(NewsCategories.GENERAL); 

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

  const handleCategoryChange = (newValue) => {
    setCategory(newValue);
    setActiveCategory(newValue)
  };

  const navLinks = [
    {label: "General", value:NewsCategories.GENERAL},
    { label: "Technology", value: NewsCategories.TECHNOLOGY },
    { label: "Business", value: NewsCategories.BUSINESS },
    { label: "Health", value: NewsCategories.HEALTH },
    { label: "Science", value: NewsCategories.SCIENCE },
    { label: "Sports", value: NewsCategories.SPORTS },
    { label: "Entertainment", value: NewsCategories.ENTERTAINMENT },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a
          style={{
            fontWeight: "800",
            fontSize: "1.8rem",
            letterSpacing: "2px",
            fontFamily: "'Merriweather', serif",
          }}
          className="navbar-brand text-uppercase fw-bold d-flex align-items-center"
          href="#"
        >
          NEWS APP
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
            {navLinks?.map((link, index) => (
              <li className="nav-item" key={index}>
                <div
                  className={`nav-link ${
                    activeCategory === link.value ? "active" : ""
                  }`}
                  onClick={() =>
                     handleCategoryChange(link?.value)
                    }
                  style={{ cursor: "pointer" }}
                >
                  {link?.label}
                </div>
              </li>
            ))}
          </ul>
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
      </div>
    </nav>
  );
};

export default Navbar;
