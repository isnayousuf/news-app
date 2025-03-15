import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
const App = () => {
  const [category, setCategory] = useState("general"); //todo: get this from components

  const [searchQuery, setSearchQuery] = useState("")
  return (
    <div>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <NewsBoard category={category} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
