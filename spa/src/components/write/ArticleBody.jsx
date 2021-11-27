import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 1.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray2};
  height: 30rem;
  margin-bottom: 2.5rem;
`;
const ArticleBody = ({ onBodyChange }) => {
  return <StyledTextarea placeholder="내용을 입력하세요" onChange={(e) => onBodyChange("body", e.target.value)} />;
};

export default ArticleBody;
