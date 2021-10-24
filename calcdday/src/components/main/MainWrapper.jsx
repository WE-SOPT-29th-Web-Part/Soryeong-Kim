import React, { useState } from 'react';
import styled from 'styled-components';
import { DateResult, DateInput } from '..';

const MainWrapper = () => {
  const newDate = new Date();
  const [year, setYear] = useState(newDate.getFullYear());
  const [month, setMonth] = useState(newDate.getMonth() + 1);
  const [date, setDate] = useState(newDate.getDate());

  return (
    <Wrapper>
      <DateInput
        year={year}
        month={month}
        date={date}
        setYear={setYear}
        setMonth={setMonth}
        setDate={setDate}
      />
      <DateResult year={year} month={month} date={date} />
    </Wrapper>
  );
};

export default MainWrapper;

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  padding: 5rem 0;
  border-top: 0.2rem solid ${({ theme }) => theme.colors.gray3};
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray3};
`;
