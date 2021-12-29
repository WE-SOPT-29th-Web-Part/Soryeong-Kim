import styled from "styled-components";
import { Link } from "react-router-dom";

import { ImgWrapper } from "..";

const StyledArticle = styled.article`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 50rem;
  padding: 1rem 2rem 0.8rem 2rem;

  & > strong {
    font-size: 1.5rem;
    font-weight: bold;
  }

  & > p {
    margin-top: 0.8rem;
  }
`;

export const StyledTags = styled.section`
  & > span + span {
    display: inline-block;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    border: 0.1rem solid ${({ theme }) => theme.colors.yellow};
    border-radius: 0.5rem;
    padding: 0.2rem 0.3rem;
    color: ${({ theme }) => theme.colors.white};
  }
  margin-top: 1rem;
  margin-bottom: 0.8rem;
`;

const Article = ({ article }) => {
  return (
    <StyledArticle>
      <Link to={`article/${article.id}`} state={article}>
        <strong>{article.title}</strong>
      </Link>
      <StyledTags>
        <span>{article.date}</span>
        {article.tags.map((tag, i) => (
          <span key={`tag-${i}`}>{tag}</span>
        ))}
      </StyledTags>
      {article.thumbnail && (
        <ImgWrapper ratio="56%">
          <img src={article.thumbnail} alt="thumbnail" />
        </ImgWrapper>
      )}
      <p>{article.summary}</p>
    </StyledArticle>
  );
};

export default Article;
