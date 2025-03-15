import { useEffect, useState } from "react";
import { getTotalNumberOfPages } from "../utils";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  
  
  const pageSize = 10;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
     let apiQuery = searchQuery
       ? `everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
       : `top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${currentPage}`;

        let url = `https://newsapi.org/v2/${apiQuery}&apiKey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        console.log("data", data);
        console.log("Articles Received:", data.length);

        setArticles(data.articles ?? []); 
        setTotalCount(data.totalResults || 0);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [category, searchQuery, currentPage]);

  useEffect(() => {
    setCurrentPage(1); // Reset page when category or search changes
  }, [category, searchQuery]);


  console.log("totalCount",totalCount);
  const totalPages = getTotalNumberOfPages(totalCount);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="pb-4">
      <h2 className="text-center my-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
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
        <div className="container">
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

          <div >
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
