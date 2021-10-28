import React from "react";
import styled from "styled-components";

const DescriptionWrapper = ({ data }) => {
  if (data.isError)
    return (
      <Description>
        <UserBio style={{ color: "#0097e6" }}>404 Not Found</UserBio>
      </Description>
    );
  return (
    <Description>
      {data.bio && <UserBio>{data.bio}</UserBio>}
      <InfoText>
        {data.name} | {data.login}
      </InfoText>
      <ButtonWrapper>
        <VisitButton href={data.html_url}>Github 구경하기</VisitButton>
        {data.blog && (
          <VisitButton href={data.blog}>블로그도 있네요!</VisitButton>
        )}
      </ButtonWrapper>
      <GithubInfo>
        <InfoText>
          레포 <span style={{ color: "#0097e6" }}>{data.public_repos}</span>개
        </InfoText>
        <InfoText>
          <span style={{ color: "#0097e6" }}>{data.followers}</span>명이 팔로잉
          중
        </InfoText>
        <InfoText>
          <span style={{ color: "#0097e6" }}>{data.following}</span>명을 팔로잉
          중
        </InfoText>
      </GithubInfo>
    </Description>
  );
};

export default DescriptionWrapper;

const Description = styled.div`
  width: 30rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  padding: 1rem;
`;

const UserBio = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: bold;
`;

const InfoText = styled.span`
  text-align: center;
  margin-top: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

const VisitButton = styled.a`
  padding: 0.3rem 0;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: bold;
  border: 0.1rem solid ${({ theme }) => theme.colors.blue};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.blue};
  width: 10rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const GithubInfo = styled.section`
  display: flex;
  justify-content: space-around;
`;
