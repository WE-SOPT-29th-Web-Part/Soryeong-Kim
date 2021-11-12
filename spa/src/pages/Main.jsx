import { Outlet } from "react-router";
import styled from "styled-components";
import { Header, MenuWrapper, Profile } from "../components";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 5rem;
  width: 80vw;
`;

const Main = () => {
  return (
    <StyledWrapper>
      <Header />
      <Profile />
      <MenuWrapper />
      <Outlet />
    </StyledWrapper>
  );
};

export default Main;
