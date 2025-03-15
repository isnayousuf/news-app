import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data?.articles));
  }, [category]);

  console.log("articles", articles);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
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
  );
};

export default NewsBoard
