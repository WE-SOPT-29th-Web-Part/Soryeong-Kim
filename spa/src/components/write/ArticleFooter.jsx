import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
`;

const ArticleFooter = ({ articleData, setIsPosting }) => {
  const handleClick = () => {
    if (articleData.title && articleData.body) {
      console.log("clicked");
      setIsPosting(true);
    }
  };

  return (
    <StyledWrapper>
      <Link to="/">나가기</Link>
      <button onClick={handleClick}>출간하기</button>
    </StyledWrapper>
  );
};

export default ArticleFooter;
