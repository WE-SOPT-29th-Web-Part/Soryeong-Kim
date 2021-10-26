import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Title>SOPT WEB 29th soryeongk</Title>;
};

export default Footer;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
`;
