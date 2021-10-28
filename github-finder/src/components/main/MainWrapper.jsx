import React, { useState } from "react";
import { SearchForm, SearchResult } from "..";

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
