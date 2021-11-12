import styled from "styled-components";

const StyledTextArea = styled.textarea``;

const ArticleTitle = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((current) => ({ ...current, title: e.target.value }));
  };
  return <StyledTextArea placeholder="제목을 입력하십시오" onChange={handleChange} />;
};

export default ArticleTitle;
