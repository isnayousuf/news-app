import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./Components/Error/PageNotFound";
import RateLimit from "./Components/Error/RateLimit";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { NewsCategories } from "./constants";
const App = () => {
  const [category, setCategory] = useState(NewsCategories.TOP);
  return (
    <Router>
      <Navbar setCategory={setCategory} />
      <Routes>
        <Route
          path="/"
          element={
            <NewsBoard
              category={category}
            />
          }
        />
        <Route path="rate-limit" element={<RateLimit />} />
        <Route path="page-not-found" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
