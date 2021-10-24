import React from 'react';
import styled from 'styled-components';

const DateResult = () => {
  return (
    <Wrapper>
      <ColWrapper>
        <Input />
        일째 되는 날은?
        <Result>yyyy년 mm월 dd일</Result>
      </ColWrapper>
      <ColWrapper>
        D-
        <Input />
        는?
        <Result>yyyy년 mm월 dd일</Result>
      </ColWrapper>
    </Wrapper>
  );
};

export default DateResult;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 100%;
`;

const ColWrapper = styled.section`
  display: flex;
  width: 100%;

  & + section {
    margin-top: 1.5rem;
  }
`;

const Input = styled.input`
  width: 5rem;
`;

const Result = styled.h2`
  margin-left: auto;
`;
