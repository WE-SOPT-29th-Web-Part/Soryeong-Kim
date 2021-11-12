import { useEffect, useState } from "react";
import styled from "styled-components";
import { Article } from "..";
import { client } from "../../libs/api";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainWrapper = () => {
  const [articleArray, setArticleArray] = useState([]);
  const fetchArticle = async () => {
    const { data } = await client.get("/article");
    console.log(`data`, data);
    setArticleArray(data);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <StyledWrapper>
      {articleArray.map((article, idx) => (
        <Article key={`article-${idx}`} article={article} />
      ))}
    </StyledWrapper>
  );
};

export default MainWrapper;
