import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries, languages } from "../data";
import CustomDropdown from "./Dropdown";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [countryFilter, setCountryFilter] = useState(["in"]);
  const [languageFilter, setLanguageFilter] = useState(["en"]);
  const [nextPage, setNextPage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate(); 
  
  const pageSize = 10;
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&category=${category}`;

      if (searchQuery) {
         url += `&q=${searchQuery}`;
      }

      if (countryFilter.length > 0) {
        url += `&country=${countryFilter.join(",")}`;
      }
      if (languageFilter.length > 0) {
        url += `&language=${languageFilter.join(",")}`;
      }
      if (nextPage) {
        url += `&size=${pageSize}&page=${nextPage}`;
      }
      
      const response = await fetch(url);
      const data = await response.json();
      console.log("data is", data);

      if (data.status === "error") {
        if (data.code === "rateLimited") {
          navigate("/rate-limit");
        } else if (
          [
            "apiKeyMissing",
            "apiKeyDisabled",
            "apiKeyExhausted",
            "apiKeyInvalid",
          ].includes(data.code)
        ) {
          navigate("/page-not-found");
        } else {
          console.error("This is why the page is empty", data);
        }
        return;
      }

      setArticles(data.results ?? []);
      setNextPage(data?.nextPage || "");
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
   
    fetchNews();
    
  }, [category,
      searchQuery,
      countryFilter,
      languageFilter]);

  return (
    <div className="pb-4 container">
      <div className="mt-3 d-flex justify-content-between">
        <h2 className="text-center ">
          Latest <span className="badge bg-danger">News</span>
        </h2>
        <div className="d-flex align-items-center">
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <div
          className="mb-3 "
          style={{
            width: "45%",
          }}
        >
          <label htmlFor="country-dropdown">Filter News by Country</label>
          <CustomDropdown
            selectedValue={countryFilter}
            setSelectedValue={setCountryFilter}
            data={countries}
            multiple={true}
          />
        </div>

        <div
          className="mb-3"
          style={{
            width: "45%",
          }}
        >
          <label htmlFor="country-dropdown">Filter News by Language</label>
          <CustomDropdown
            selectedValue={languageFilter}
            setSelectedValue={setLanguageFilter}
            data={languages}
            multiple={true}
          />
        </div>
      </div>

      {isLoading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "85vh" }}
        >
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            {articles?.map((news, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                <NewsItem
                  newsTitle={news?.title}
                  description={news?.description}
                  imgSrc={news?.urlToImage}
                  newsUrl={news?.url}
                  author={news?.author}
                  source={news?.source}
                  publishedAt={news?.publishedAt}
                />
              </div>
            ))}
          </div>

          <div>
            <Pagination
              nextPage={nextPage}
              onNext={() => fetchNews()}
              onPrevious={() => setNextPage("")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsBoard
