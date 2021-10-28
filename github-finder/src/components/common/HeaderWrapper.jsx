import React from "react";
import styled from "styled-components";

const HeaderWrapper = () => {
  return <Header>깃hub 프로필 ㅍr인더</Header>;
};

export default HeaderWrapper;

const Header = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  font-weight: bold;
  text-align: center;
`;
