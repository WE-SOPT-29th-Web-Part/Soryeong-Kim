import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Write } from "../pages";
import { Header, MenuWrapper, Profile } from ".";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Profile />
      <MenuWrapper />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write/*" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
