import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DMinusDay = ({ year, month, date }) => {
  const [dayCount, setDayCount] = useState(0);
  const [resultDate, setResultDate] = useState(`${year}년 ${month}월 ${date}일`);

  const handleChange = e => {
    setDayCount(e.target.value);
    returnResult(e.target.value);
  };

  const returnResult = value => {
    const newDate = new Date();
    newDate.setFullYear(Number(year));
    newDate.setMonth(Number(month) - 1);
    newDate.setDate(Number(date) - Number(value));

    const result = `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;

    setResultDate(result);
  };

  useEffect(() => {
    returnResult(dayCount);
  }, [year, month, date]);

  return (
    <Wrapper>
      D-
      <Input value={dayCount} type="number" onChange={handleChange} />
      는?
      <Result>{resultDate}</Result>
    </Wrapper>
  );
};

export default DMinusDay;

const Wrapper = styled.section`
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
