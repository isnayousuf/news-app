import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

useEffect(() => {
  const fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    setIsLoading(true);
    try {
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
}, [category]);

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
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center flex-wrap">
          {articles?.map((news, index) => (
            <NewsItem
              key={index}
              articles={news?.title}
              description={news?.description}
              imgSrc={news?.urlToImage}
              readMoreUrl={news?.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard
