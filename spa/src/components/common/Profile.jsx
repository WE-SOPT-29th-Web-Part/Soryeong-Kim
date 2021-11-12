import styled from "styled-components";
import { profileImg } from "../../assets";

const StyledWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray3};

  & > img.profileImg {
    width: 8rem;
    height: 8rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }

  & > .descWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;

    & > .iconWrapper {
      display: flex;
      align-items: flex-start;

      & > span {
        color: ${({ theme }) => theme.colors.gray3};
        border: 0.1rem solid ${({ theme }) => theme.colors.gray3};
        border-radius: 0.2rem;
        padding: 0.1rem 0.2rem;

        & + span {
          margin-left: 0.5rem;
        }
      }
    }
  }
`;

const Profile = () => {
  return (
    <StyledWrapper>
      <img className="profileImg" src={profileImg} alt="profileImg" />
      <section className="descWrapper">
        <span>soryeongk</span>
        <span>아직 뭐가 될지 모르는 기발자 령</span>
        <section className="iconWrapper">
          <span>깃헙</span>
          <span>메일</span>
        </section>
      </section>
    </StyledWrapper>
  );
};

export default Profile;
