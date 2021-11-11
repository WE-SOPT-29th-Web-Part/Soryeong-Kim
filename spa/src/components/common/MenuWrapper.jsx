import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
`;
const Menu = styled.li`
  margin-right: 20px;
  color: ${(props) => (props.selected ? "white" : "black")};
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${(props) => (props.selected ? "#f1c40f" : "white")};
`;

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Menu selected={pathname === "/"}>
        <Link to="/">글 목록 보기</Link>
      </Menu>
      <Menu selected={pathname.startsWith("/series")}>
        <Link to="/series">시리즈 보기</Link>
      </Menu>
    </Wrapper>
  );
};

export default Header;
