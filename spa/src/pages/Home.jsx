import React, { useEffect } from "react";
import { ArticleContainer, Header, Profile, HomeNav } from "../components";
import axios from "axios";

import { client } from "../libs/api";

const Home = () => {
  const getArticleData = async () => {
    const { data } = await client.get();
    console.log(`daata`, data);
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <>
      app
      {/* <Header />
      <Profile />
      <HomeNav />
      <ArticleContainer /> */}
    </>
  );
};

export default Home;
