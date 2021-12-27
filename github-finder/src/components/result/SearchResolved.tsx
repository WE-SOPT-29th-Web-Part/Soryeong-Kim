import { useState } from 'react';
import styled from 'styled-components';
import githubIcon from './githubIcon.png';
import { DescriptionWrapper } from '..';
import { UserInfo, UserInfoState } from 'components/main/MainWrapper';

const SearchResolved = (props: { userInfo: UserInfoState }) => {
  const userInfo = props.userInfo;
  const [isVisible, setIsVisible] = useState(true);
  const sampleData: UserInfo = {
    bio: '',
    name: '',
    login: '',
    html_url: '',
    blog: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    avatar_url: githubIcon,
    isError: true,
  };

  let userData: UserInfo = sampleData;

  if (userInfo.data && userInfo.status != 'rejected') {
    userData = userInfo.data;
  }

  return (
    <Wrapper isVisible={isVisible}>
      <Profile src={userData?.avatar_url} />
      <DescriptionWrapper data={userData} />
      <CloseButton onClick={() => setIsVisible(!isVisible)}>X</CloseButton>
    </Wrapper>
  );
};

export default SearchResolved;

const Wrapper = styled.main<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
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
