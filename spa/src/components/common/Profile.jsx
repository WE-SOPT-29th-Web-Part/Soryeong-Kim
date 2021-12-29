import styled from "styled-components";

import { ReactComponent as GithubIcon } from "../../assets/header/githubIcon.svg";
import { ReactComponent as MailIcon } from "../../assets/header/mailIcon.svg";
import { profileImg } from "../../assets";

const StyledWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray3};

  & > img {
    width: 8rem;
    height: 8rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }
`;

const StyledDescWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.8rem 1rem;

  & > strong {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & > span {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const StyledIconWrapper = styled.section`
  display: flex;
  align-items: flex-start;

  & > svg {
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray2};
    border-radius: 50%;

    &:hover {
      fill: ${({ theme }) => theme.colors.yellow};
    }

    & + svg {
      margin-left: 0.5rem;
    }
  }
`;

const Profile = () => {
  return (
    <StyledWrapper>
      <img src={profileImg} alt="profileImg" />
      <StyledDescWrapper>
        <strong>soryeongk</strong>
        <span>아직 뭐가 될지 모르는 기발자 령</span>
        <StyledIconWrapper>
          <GithubIcon alt="github" fill="darkgray" />
          <MailIcon alt="github" fill="darkgray" />
        </StyledIconWrapper>
      </StyledDescWrapper>
    </StyledWrapper>
  );
};

export default Profile;
