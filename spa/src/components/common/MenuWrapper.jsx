import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 4rem;
`;

const Menu = styled.li`
  margin-right: 20px;
  color: ${(props) => (props.selected ? "white" : "black")};
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  transition: color ease 0.8s;
`;

const StyledTab = styled.div`
  position: absolute;
  width: ${(props) => (props.pathname === "/" ? "11rem" : "10rem")};
  height: 3rem;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.yellow};
  transform: translateX(${(props) => (props.pathname === "/" ? "0.1rem" : "12.8rem")});
  transition: transform ease 0.8s;
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <StyledTab pathname={pathname} />
      <Menu selected={pathname === "/" ? true : false}>
        <Link to="/">글 목록 보기</Link>
      </Menu>
      <Menu selected={pathname === "/series" ? true : false}>
        <Link to="/series">시리즈 보기</Link>
      </Menu>
    </Wrapper>
  );
};

export default Header;
