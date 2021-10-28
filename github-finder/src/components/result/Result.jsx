import React from "react";
import { SearchFulfilled, SearchPending } from "..";

const Result = ({ isPending, data, isActive, setIsActive }) => {
  if (isPending) return <SearchPending />;
  else
    return (
      <SearchFulfilled
        data={data}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    );
};

export default Result;
