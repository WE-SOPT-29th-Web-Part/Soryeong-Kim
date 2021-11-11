import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import PostWrapper from "../components/main/PostsWrapper";

const Page1 = () => {
  return (
    <div>
      <h1>This is Main</h1>
      <ul>
        <li>
          <Link to="1">Post #1</Link>
        </li>
        <li>
          <Link to="2">Post #2</Link>
        </li>
      </ul>
      <Routes>
        <Route path=":id" element={<PostWrapper />} />
      </Routes>
    </div>
  );
};

export default Page1;
