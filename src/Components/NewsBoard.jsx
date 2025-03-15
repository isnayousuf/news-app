import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        let apiQuery = searchQuery
          ? `everything?q=${searchQuery}`
          : `top-headlines?country=us&category=${category}`;

        let url = `https://newsapi.org/v2/${apiQuery}&apiKey=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setArticles(data?.articles);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [category, searchQuery]);

  console.log("articles", articles);
  

  return (
    <div>
      <h2 className="text-center">
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
        <div className="container text-center">
          <div className="row">
            {articles?.map((news, index) => (
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <NewsItem
                  key={index}
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
        </div>
      )}
    </div>
  );
};

export default NewsBoard
