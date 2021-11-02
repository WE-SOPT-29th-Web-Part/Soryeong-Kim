import React from 'react';
import styled from 'styled-components';

const SearchPending = () => {
  return <Loader>로딩 중...</Loader>;
};

export default SearchPending;

const Loader = styled.div`
  text-align: center;
  height: 15rem;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
  animation: tongtong 0.1s cubic-bezier(0.5, 0.05, 1, 0.5) 0s infinite;

  @keyframes tongtong {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 50px, 0);
    }
  }
`;
