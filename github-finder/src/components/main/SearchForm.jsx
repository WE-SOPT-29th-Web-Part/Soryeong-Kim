import React from "react";
import styled from "styled-components";

const SearchForm = () => {
  return (
    <Wrapper>
      <IdInput />
      <InputButton>검색</InputButton>
    </Wrapper>
  );
};

export default SearchForm;

const Wrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

const IdInput = styled.input`
  width: 100%;
  height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 0.2rem solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 5px;
`;

const InputButton = styled.button`
  position: absolute;
  right: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: bold;
`;
