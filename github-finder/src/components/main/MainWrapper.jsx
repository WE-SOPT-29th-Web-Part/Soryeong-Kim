import React, { useState } from "react";
import { SearchForm, Result } from "..";

const MainWrapper = () => {
  const [data, setData] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);

  return (
    <>
      <SearchForm
        setData={setData}
        setIsActive={setIsActive}
        setIsPending={setIsPending}
      />
      {
        <Result
          data={data}
          isActive={isActive}
          setIsActive={setIsActive}
          isPending={isPending}
        />
      }
    </>
  );
};

export default MainWrapper;
