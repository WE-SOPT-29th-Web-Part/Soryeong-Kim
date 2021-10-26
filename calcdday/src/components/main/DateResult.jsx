import React from 'react';
import styled from 'styled-components';
import { Result } from '..';

const DateResult = ({ year, month, date }) => {
  return (
    <Wrapper>
      {['+', '-'].map((sign, idx) => (
        <Result key={`dateResult-${idx}`} sign={sign} year={year} month={month} date={date} />
      ))}
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
