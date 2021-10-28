import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchForm = ({ setData, setIsActive, setIsPending }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsPending(true);
      const response = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      setData(response.data);
    } catch (err) {
      setData(Error);
    }
    setIsPending(false);
    setInputValue("");
    setIsActive(true);
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
  width: 48rem;
  height: 2.5rem;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 0.2rem solid ${({ theme }) => theme.colors.white};
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
