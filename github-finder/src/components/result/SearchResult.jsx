import React from "react";
import styled from "styled-components";
import githubIcon from "./githubIcon.png";
import { DescriptionWrapper } from "..";

const SearchResult = ({ data }) => {
  const sampleData = {
    avatar_url: githubIcon,
    isError: true,
  };
  const userData = data.id === undefined ? sampleData : data;
  return (
    <Wrapper>
      <Profile src={userData.avatar_url} />
      <DescriptionWrapper data={userData} />
    </Wrapper>
  );
};

export default SearchResult;

const Wrapper = styled.main`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
`;

const Profile = styled.img`
  width: 15rem;
  height: 15rem;
  margin-right: 3rem;
  border-radius: 50%;
`;
