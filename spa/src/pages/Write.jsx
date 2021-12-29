import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { ArticleBody, ArticleCheck, ArticleFooter, ArticleTags, ArticleTitle } from "../components";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 100%;
`;

const Write = () => {
  const location = useLocation();
  const article = location.state;

  const [isPosting, setIsPosting] = useState(false);
  const [articleData, setArticleData] = useState({
    title: article?.title || "",
    body: article?.body || "",
    summary: article?.summary || "",
    series: article?.series || "",
    tags: article?.tags || [],
    thumbnail: article?.thumbnail || "",
    date: article?.date || "",
  });

  const handleChange = (key, value) => {
    const newData = { ...articleData };
    newData[key] = value;
    setArticleData(newData);
  };

  const handleArrayChange = (key, value, setValue) => {
    const newData = { ...articleData };
    newData[key] = [...newData[key], value];
    setArticleData(newData);
    setValue("");
  };

  const handelArrayElemRemove = (key, value) => {
    const newData = { ...articleData };
    newData[key] = newData[key].filter((elem) => elem !== value);
    setArticleData(newData);
  };

  return (
    <StyledWrapper>
      <ArticleTitle title={articleData.title} onTitleChange={handleChange} />
      <ArticleTags articleData={articleData} onTagRemove={handelArrayElemRemove} onTagChange={handleArrayChange} />
      <ArticleBody body={articleData.body} onBodyChange={handleChange} />
      <ArticleFooter articleData={articleData} setIsPosting={setIsPosting} />
      <ArticleCheck
        summaryData={articleData.summary}
        isPosting={isPosting}
        articleData={articleData}
        setIsPosting={setIsPosting}
        onDataChange={handleChange}
      />
    </StyledWrapper>
  );
};

export default Write;
