import React, { useState } from "react";
import styled from "styled-components";
import githubIcon from "./githubIcon.png";
import { DescriptionWrapper } from "..";

const SearchResolved = ({ userInfo }) => {
  const [isVisible, setIsVisible] = useState(true);
  const sampleData = {
    avatar_url: githubIcon,
    isError: true,
  };
  const userData = userInfo.status === "rejected" ? sampleData : userInfo.data;

  return (
    <Wrapper isVisible={isVisible}>
      <Profile src={userData.avatar_url} />
      <DescriptionWrapper data={userData} />
      <CloseButton onClick={() => setIsVisible(!isVisible)}>X</CloseButton>
    </Wrapper>
  );
};

export default SearchResolved;

const Wrapper = styled.main`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  position: relative;
  display: flex;
  align-items: flex-start;
`;

const Profile = styled.img`
  width: 15rem;
  height: 15rem;
  margin-right: 3rem;
  border-radius: 50%;
`;

const CloseButton = styled.button`
  position: absolute;
  right: -2rem;
  padding: 0.1rem 0.3rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;
