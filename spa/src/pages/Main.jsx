import { Outlet } from "react-router";
import { Header, MenuWrapper, Profile } from "../components";

const Main = () => {
  return (
    <>
      <Header />
      <Profile />
      <MenuWrapper />
      <Outlet />
    </>
  );
};

export default Main;
