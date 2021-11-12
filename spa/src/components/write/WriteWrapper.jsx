import React, { useState } from "react";
import { ArticleBody, ArticleFooter, ArticleTags, ArticleTitle } from "..";

const WriteWrapper = () => {
  const [articleData, setArticleData] = useState({
    id: "",
    title: "",
    body: "",
    summary: "",
    series: "",
    tags: [],
    thumbnail: "",
    date: "",
  });

  return (
    <div>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags articleData={articleData} setArticleData={setArticleData} />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter articleData={articleData} />
    </div>
  );
};

export default WriteWrapper;
