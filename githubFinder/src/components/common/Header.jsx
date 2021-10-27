import React from "react";
import styled from "styled-components";

const Header = () => {
  return <Title>Header</Title>;
};

export default Header;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
`;
