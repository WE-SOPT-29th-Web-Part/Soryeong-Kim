import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const DateResult = ({ year, month, date }) => {
  const [dayCount, setDayCount] = useState(0);
  const [resultDate, setResultDate] = useState(`${year}년 ${month}월 ${date}일`);

  const handleChange = e => {
    const inputValue = e.target.value;
    setDayCount(inputValue);
    returnResult(inputValue);
  };

  const returnResult = value => {
    const newDate = new Date();
    newDate.setFullYear(Number(year));
    newDate.setMonth(Number(month) - 1);
    newDate.setDate(Number(date) + Number(value));

    const result = `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;

    setResultDate(result);
  };

  useEffect(() => {
    returnResult(dayCount);
  }, [year, month, date]);

  return (
    <Wrapper>
      <ColWrapper>
        <Input type="number" value={dayCount} onChange={handleChange} />
        일째 되는 날은?
        <Result>{resultDate}</Result>
      </ColWrapper>
      <ColWrapper>
        D-
        <Input />
        는?
        <Result>
          {year}년 {month}월 {date}일
        </Result>
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
