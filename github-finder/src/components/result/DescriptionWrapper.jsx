import React from "react";
import styled from "styled-components";

const DescriptionWrapper = ({ data }) => {
  if (data.isError)
    return (
      <Description>
        <UserBio style={{ color: "#F7630C" }}>404 Not Found</UserBio>
      </Description>
    );
  return (
    <Description>
      {data.bio && <UserBio>{data.bio}</UserBio>}
      <UserInfo>
        <InfoText>{data.name}</InfoText>
        <InfoText>{data.login}</InfoText>
      </UserInfo>
      <ButtonWrapper>
        <VisitButton href={data.html_url}>Github 구경하기</VisitButton>
        {data.blog && (
          <VisitButton href={data.blog}>블로그도 있네요!</VisitButton>
        )}
      </ButtonWrapper>
      <GithubInfo>
        <InfoText style={{ color: "#F7630C" }}>
          레포 {data.public_repos}개
        </InfoText>
        <InfoText style={{ color: "#F7630C" }}>
          {data.followers}명이 팔로잉 중
        </InfoText>
        <InfoText style={{ color: "#F7630C" }}>
          {data.following}명을 팔로잉 중
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
  border: 0.1rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
  padding: 1rem;
`;

const UserBio = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;

const UserInfo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
`;

const InfoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
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
  border: 0.1rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.orange};
  width: 10rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const GithubInfo = styled.section`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
`;
