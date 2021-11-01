import React, { useState } from 'react';
import { SearchForm, Result } from '..';

const MainWrapper = () => {
  const [userInfo, setUserInfo] = useState({ data: null, status: 'idle' });
  return (
    <>
      <Result userInfo={userInfo} />
      <SearchForm setUserInfo={setUserInfo} />
    </>
  );
};

export default MainWrapper;
