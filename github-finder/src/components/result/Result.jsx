import React from "react";
import { SearchFulfilled, SearchPending } from "..";

const Result = ({ isPending, data, isFetched, setIsFetched }) => {
  if (isPending) return <SearchPending />;
  else
    return (
      <SearchFulfilled
        data={data}
        isFetched={isFetched}
        setIsFetched={setIsFetched}
      />
    );
};

export default Result;
