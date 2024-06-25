import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const apikey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;

    // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=411ad118160042bface02706623fece7`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div className="mx-auto">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
