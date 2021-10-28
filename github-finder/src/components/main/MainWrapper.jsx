import React, { useState } from "react";
import { SearchResult, SearchForm } from "..";

const MainWrapper = () => {
  const [data, setData] = useState("");
  return (
    <>
      <SearchForm setData={setData} />
      {data && <SearchResult data={data} />}
    </>
  );
};

export default MainWrapper;
