import React, { useState } from "react";
import {
  ArticleBody,
  ArticleFooter,
  ArticleTags,
  ArticleTitle,
} from "../components";
import { client } from "../libs/api";

const Write = () => {
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

  const createArticle = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${
      now.getMonth() + 1
    }월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약입니다.",
    });
  };

  const handleClick = async () => {
    await createArticle();
  };
  return (
    <div>
      <button onClick={handleClick}>Post!</button>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags articleData={articleData} setArticleData={setArticleData} />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter />
    </div>
  );
};

export default Write;
