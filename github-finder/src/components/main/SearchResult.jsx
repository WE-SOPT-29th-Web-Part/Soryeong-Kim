import React from "react";
import styled from "styled-components";

const SearchResult = () => {
  return (
    <Wrapper>
      <Profile />
      <Description>
        <UserInfo>
          <Text>userName</Text>
          <Text>userId</Text>
          <Text>userTitle</Text>
        </UserInfo>
        <VisitButton>Github 구경하기</VisitButton>
        <GithubInfo>GithubInfo</GithubInfo>
      </Description>
    </Wrapper>
  );
};

export default SearchResult;

const Wrapper = styled.main`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
`;

const Profile = styled.div`
  background-color: #ccc;
  width: 15rem;
  height: 15rem;
  margin-right: 3rem;
  border-radius: 50%;
`;

const Description = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  padding: 1rem;
`;

const UserInfo = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
`;

const VisitButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.3rem 0;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: bold;
  border: 0.1rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.orange};
  width: 10rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const GithubInfo = styled.section`
  margin-top: 1.5rem;
`;
