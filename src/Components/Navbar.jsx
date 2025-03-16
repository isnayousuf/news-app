import { NewsCategories } from "../constants";

import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState(NewsCategories.TOP); 

  const handleCategoryChange = (newValue) => {
    setCategory(newValue);
    setActiveCategory(newValue)
  };

  const navLinks = [
    { label: "Top", value: NewsCategories.TOP },
    { label: "Technology", value: NewsCategories.TECHNOLOGY },
    { label: "Business", value: NewsCategories.BUSINESS },
    { label: "Health", value: NewsCategories.HEALTH },
    { label: "Science", value: NewsCategories.SCIENCE },
    { label: "Sports", value: NewsCategories.SPORTS },
    { label: "Entertainment", value: NewsCategories.ENTERTAINMENT },
    { label: "Crime", value: NewsCategories.CRIME },
    { label: "Domestic", value: NewsCategories.DOMESTIC },
    { label: "Education", value: NewsCategories.EDUCATION },
    { label: "Environment", value: NewsCategories.ENVIRONMENT },
    { label: "Food", value: NewsCategories.FOOD },
    { label: "Lifestyle", value: NewsCategories.LIFESTYLE },
    { label: "Politics", value: NewsCategories.POLITICS },
    { label: "Tourism", value: NewsCategories.TOURISM },
    { label: "World", value: NewsCategories.WORLD },
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
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
