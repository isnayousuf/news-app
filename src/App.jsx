import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./Components/Error/PageNotFound";
import RateLimit from "./Components/Error/RateLimit";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { NewsCategories } from "./constants";
const App = () => {
  const [category, setCategory] = useState(NewsCategories.GENERAL);

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Router>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={<NewsBoard category={category} searchQuery={searchQuery} />}
        />
        <Route path="rate-limit" element={<RateLimit />} />
        <Route path="page-not-found" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
