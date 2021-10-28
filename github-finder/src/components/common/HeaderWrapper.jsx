import React from "react";
import styled from "styled-components";

const HeaderWrapper = () => {
  return (
    <Button>
      <Text>깃허브 서핑</Text>
    </Button>
  );
};

export default HeaderWrapper;

const Button = styled.div`
  width: 23rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 30px;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: all 1s;
  &:before {
    content: "";
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 120px;
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
