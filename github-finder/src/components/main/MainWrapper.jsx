import React, { useState, useEffect } from "react";
import { SearchForm, Result } from "..";

const MainWrapper = () => {
  const [data, setData] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const [isPending, setIsPending] = useState(false);

  return (
    <>
      <Result
        data={data}
        isFetched={isFetched}
        setIsFetched={setIsFetched}
        isPending={isPending}
      />
      <SearchForm
        setData={setData}
        setIsFetched={setIsFetched}
        setIsPending={setIsPending}
      />
    </>
  );
};

export default MainWrapper;
