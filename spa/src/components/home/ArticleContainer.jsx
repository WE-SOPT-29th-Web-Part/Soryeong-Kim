import React, { useEffect, useState } from "react";
import axios from "axios";
import { client } from "../../libs/api";
import { ArticleCard } from "..";

const ArticleContainer = () => {
  const [articleData, setArticleData] = useState([]);
  const getArticleData = async () => {
    const { data } = await client.get("/article");
    setArticleData(data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div>
      {articleData.map((article) => (
        <ArticleCard key={`article-${article.id}`} article={article} />
      ))}
    </div>
  );
};

export default ArticleContainer;
