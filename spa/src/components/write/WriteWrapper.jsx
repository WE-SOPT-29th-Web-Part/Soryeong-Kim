import React, { useState } from "react";
import { ArticleBody, ArticleCheck, ArticleFooter, ArticleTags, ArticleTitle } from "..";

const WriteWrapper = () => {
  const [isPosting, setIsPosting] = useState(false);
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
      {isPosting ? <ArticleCheck articleData={articleData} setIsPosting={setIsPosting} /> : <></>}
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags articleData={articleData} setArticleData={setArticleData} />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter articleData={articleData} setIsPosting={setIsPosting} />
    </div>
  );
};

export default WriteWrapper;
