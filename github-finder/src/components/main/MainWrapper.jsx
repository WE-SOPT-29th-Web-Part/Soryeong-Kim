import React, { useState } from "react";
import { SearchResult, SearchForm } from "..";

const MainWrapper = () => {
  const [data, setData] = useState("");
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <SearchForm setData={setData} setIsActive={setIsActive} />
      {data && (
        <SearchResult
          data={data}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      )}
    </>
  );
};

export default MainWrapper;
