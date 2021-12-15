import { Link } from "react-router-dom";
import styled from "styled-components";

import { profileImg } from "../../assets";
import { ReactComponent as SearchIcon } from "../../assets/header/searchIcon.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const StyledIconWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 4rem;

  & > img {
    width: 1.8rem;
    height: 1.8rem;
  }

  & > button {
    height: 2rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 1rem;
  }

  & > img {
    width: 2.5rem;
    height: 2.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <span>SOPT.log</span>
      <StyledIconWrapper>
        <SearchIcon alt="searchIcon" />
        <button>
          <Link to="/write">새 글 작성</Link>
        </button>
        <img src={profileImg} alt="profileImg" />
      </StyledIconWrapper>
    </StyledHeader>
  );
};

export default Header;
