import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchForm = ({ setData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${inputValue}`
    );
    setData(response.data);
    setInputValue("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <IdInput
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
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
  color: ${({ theme }) => theme.colors.borderGray};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
