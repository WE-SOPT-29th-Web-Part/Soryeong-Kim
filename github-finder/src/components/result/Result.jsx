import React from 'react';
import styled from 'styled-components';
import { SearchResolved, SearchPending } from '..';

const Result = ({ userInfo }) => {
  switch (userInfo.status) {
    default:
      return <SearchDefault />;
    case 'pending':
      return <SearchPending />;
    case 'resolved':
      return <SearchResolved userInfo={userInfo} />;
    case 'rejected':
      return <SearchResolved userInfo={userInfo} />;
  }
};

export default Result;

const SearchDefault = styled.main`
  width: 4.8rem;
  height: 15rem;
  visibility: hidden;
`;
