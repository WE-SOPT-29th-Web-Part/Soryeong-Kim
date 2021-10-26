import React from 'react';
import styled from 'styled-components';

const DateInput = ({ year, month, date, setYear, setMonth, setDate }) => {
  const changeDate = (e, setState) => {
    if (e.target.value < 0) return;
    setState(e.target.value);
  };
  const today = new Date();

  const returnToday = () => {
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    setDate(today.getDate());
  };

  return (
    <Wrapper>
      <ButtonToday onClick={returnToday}>
        오늘({today.getFullYear()}.{today.getMonth() + 1}.{today.getDate()})로 바꾸기
      </ButtonToday>
      <InputWrapper>
        <Input type="number" value={year} onChange={e => changeDate(e, setYear)} />년
        <Input type="number" value={month} onChange={e => changeDate(e, setMonth)} />월
        <Input type="number" value={date} onChange={e => changeDate(e, setDate)} />
        일을 기준으로
      </InputWrapper>
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

const InputWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const ButtonToday = styled.button`
  border: 0.1rem solid ${({ theme }) => theme.colors.orange};
  padding: 0.3rem 0.5rem;
  color: ${({ theme }) => theme.colors.orange};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.1;
    background-color: ${({ theme }) => theme.colors.orange};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Input = styled.input`
  width: 3.5rem;

  & + input {
    width: 2.5rem;
    margin-left: 0.5rem;
  }
`;
