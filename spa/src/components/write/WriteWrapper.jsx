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

  return (
    <StyledWrapper>
      <ArticleTitle setArticleData={setArticleData} />
      <ArticleTags articleData={articleData} setArticleData={setArticleData} />
      <ArticleBody setArticleData={setArticleData} />
      <ArticleFooter articleData={articleData} setIsPosting={setIsPosting} />
      <ArticleCheck isPosting={isPosting} articleData={articleData} setIsPosting={setIsPosting} />
    </StyledWrapper>
  );
};

export default WriteWrapper;
