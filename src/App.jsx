import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import { NewsCategories } from "./constants";
const App = () => {
  const [category, setCategory] = useState(NewsCategories.GENERAL);

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <NewsBoard category={category} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
