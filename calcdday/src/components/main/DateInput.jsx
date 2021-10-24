import React from 'react';
import styled from 'styled-components';

const DateInput = ({ year, month, date, setYear, setMonth, setDate }) => {
  const changeDate = (e, setState) => {
    // console.log(e.target);
    setState(e.target.value);
  };

  const returnToday = () => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());
  };

  return (
    <Wrapper>
      <ButtonToday onClick={returnToday}>오늘</ButtonToday>
      <ResultSection>
        <Input type="text" value={year} onChange={e => changeDate(e, setYear)} />년
        <Input type="text" value={month} onChange={e => changeDate(e, setMonth)} />월
        <Input type="text" value={date} onChange={e => changeDate(e, setDate)} />
        일을 기준으로
      </ResultSection>
    </Wrapper>
  );
};

export default DateInput;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;
  height: 10rem;
`;

const ButtonToday = styled.button`
  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  width: 3rem;
`;

const ResultSection = styled.section``;

const Input = styled.input`
  width: 3.5rem;

  & + input {
    width: 2.5rem;
    margin-left: 0.5rem;
  }
`;
