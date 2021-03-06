import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = () => {
  return (
    <Header>
      <Text>πββοΈκΉνλΈ μνπββοΈ</Text>
    </Header>
  );
};

export default HeaderWrapper;

const Header = styled.header`
  margin-bottom: 2rem;
  cursor: pointer;
  width: 30rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 1s;
  &:before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 150px;
    background-color: ${({ theme }) => theme.colors.blue};
    top: 50px;
    left: 50%;
    animation: wave 5s infinite linear;
    transition: all 1s;
  }
  &:hover:before {
    top: 15px;
  }
  @keyframes wave {
    0% {
      transform: translate(-50%) rotate(-180deg);
    }
    100% {
      transform: translate(-50%) rotate(360deg);
    }
  }
`;

const Text = styled.span`
  position: relative;
`;
