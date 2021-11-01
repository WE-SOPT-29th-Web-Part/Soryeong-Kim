import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <StyledTitle>sopt.log</StyledTitle>
      <StyledButton>새 글 작성</StyledButton>
    </div>
  );
};

export default Header;

const StyledTitle = styled.div``;
const StyledButton = styled.button``;
