import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DPlusDay, DMinusDay } from '..';

const DateResult = ({ year, month, date }) => {
  return (
    <Wrapper>
      <DPlusDay year={year} month={month} date={date} />
      <DMinusDay year={year} month={month} date={date} />
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
