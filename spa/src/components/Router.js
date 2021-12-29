import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainWrapper, Series } from ".";
import { Main, Write, Article } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<MainWrapper />} />
          <Route path="/series" element={<Series />} />
        </Route>
        <Route path="/write/*" element={<Write />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/articleEdit/:id" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
