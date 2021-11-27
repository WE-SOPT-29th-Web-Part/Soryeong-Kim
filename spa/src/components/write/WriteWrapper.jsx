import { useState } from "react";
import styled from "styled-components";
import { ArticleBody, ArticleCheck, ArticleFooter, ArticleTags, ArticleTitle } from "..";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  height: 100%;
`;

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

  const handleChange = (key, value) => {
    const newData = { ...articleData };
    articleData[key] = value;
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
      <ArticleTitle onTitleChange={handleChange} />
      <ArticleTags articleData={articleData} onTagRemove={handelArrayElemRemove} onTagChange={handleArrayChange} />
      <ArticleBody onBodyChange={handleChange} />
      <ArticleFooter articleData={articleData} setIsPosting={setIsPosting} />
      <ArticleCheck isPosting={isPosting} articleData={articleData} setIsPosting={setIsPosting} />
    </StyledWrapper>
  );
};

export default WriteWrapper;
