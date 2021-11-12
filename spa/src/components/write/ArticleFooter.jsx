import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > a {
    color: ${({ theme }) => theme.colors.yellow};
  }

  & > button {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};
    border: 0.1rem solid ${({ theme }) => theme.colors.yellow};
    border-radius: 1rem;
    padding: 0.2rem 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.yellow};
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
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
