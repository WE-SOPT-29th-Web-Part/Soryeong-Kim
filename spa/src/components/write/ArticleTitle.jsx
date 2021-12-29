import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  font-weight: bold;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 1rem;
  margin-top: 5rem;
  ::placeholder {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

const ArticleTitle = ({ title, onTitleChange }) => {
  return (
    <StyledTextArea
      placeholder="제목을 입력하십시오"
      value={title}
      onChange={(e) => onTitleChange("title", e.target.value)}
    />
  );
};

export default ArticleTitle;
