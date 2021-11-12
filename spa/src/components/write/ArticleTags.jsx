import { useState } from "react";
import styled from "styled-components";

const StyledField = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;

  & > form {
    & > input {
      font-size: 1.2rem;
    }
  }

  & > .tag {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 5px;
    padding: 0.3rem 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    margin-right: 0.5rem;
  }
`;

const ArticleTags = ({ articleData, setArticleData }) => {
  const [tag, setTag] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setArticleData((current) => {
      const tags = [...current.tags];
      if (!tags.includes(tag)) tags.push(tag);
      setTag("");
      return { ...current, tags };
    });
  };

  return (
    <StyledField>
      {articleData.tags.map((tag, idx) => (
        <span className="tag" key={`tag-${idx}`}>
          {tag}
        </span>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="태그를 입력하세요" value={tag} onChange={(e) => setTag(e.target.value)} />
      </form>
    </StyledField>
  );
};

export default ArticleTags;
