import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTotalNumberOfPages } from "../utils";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortValue, setSortValue] = useState("publishedAt");

  const navigate = useNavigate(); 
  
  const pageSize = 10;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        let apiQuery = searchQuery
          ? `everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}&sortBy=${sortValue}
            `
          : `top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${currentPage}&sortBy=${sortValue}`;

        let url = `https://newsapi.org/v2/${apiQuery}&apiKey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "error") {
          if (data.code === "rateLimited") {
            navigate("/rate-limit"); 
          } else if (
            data.code === "apiKeyMissing" ||
            data.code === "apiKeyDisabled" ||
            data.code === "apiKeyExhausted" ||
            data.code === "apiKeyInvalid"
          ) {
             navigate("page-not-found"); 
          } else {
            console.error("This is why the page is empty", data);
            
          }
          return;
        }

        setArticles(data.articles ?? []);
        setTotalCount(data.totalResults || 0);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [category, searchQuery, currentPage, sortValue]);

  useEffect(() => {
    setCurrentPage(1); 
  }, [category, searchQuery, sortValue]);

  const totalPages = getTotalNumberOfPages(totalCount);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pb-4 container">
      <div className="mt-3 d-flex justify-content-between">
        <h2 className="text-center ">
          Latest <span className="badge bg-danger">News</span>
        </h2>
        <div className="d-flex align-items-center">
          <p style={{ width: "100px" }}>Sort By:</p>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            onChange={(e) => {
              setSortValue(e.target.value);
            }}
          >
            <option value="publishedAt" selected>
              Newest
            </option>
            <option value="popularity">Popularity</option>
            <option value="relevance">Relevance</option>
          </select>
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
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsBoard
