import React from "react";
import styled from "styled-components";

const HeaderWrapper = () => {
  return <Header>GitHub Finder</Header>;
};

export default HeaderWrapper;

const Header = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  font-weight: bold;
`;
