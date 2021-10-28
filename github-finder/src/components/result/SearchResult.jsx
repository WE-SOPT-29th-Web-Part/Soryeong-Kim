import React from "react";
import styled from "styled-components";
import githubIcon from "./githubIcon.png";
import { DescriptionWrapper } from "..";

const SearchResult = ({ data, isActive, setIsActive }) => {
  const sampleData = {
    avatar_url: githubIcon,
    isError: true,
  };
  const userData = data.id === undefined ? sampleData : data;

  return (
    <Wrapper isActive={isActive}>
      <Profile src={userData.avatar_url} />
      <DescriptionWrapper data={userData} />
      <CloseButton onClick={() => setIsActive(false)}>X</CloseButton>
    </Wrapper>
  );
};

export default SearchResult;

const Wrapper = styled.main`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  position: relative;
  margin-top: 2rem;
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
  color: #f00;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;
