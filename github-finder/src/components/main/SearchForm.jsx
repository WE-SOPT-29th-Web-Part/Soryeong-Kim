import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { SearchHistory } from "..";

const SearchForm = ({ setData, setIsFetched, setIsPending }) => {
  const [inputValue, setInputValue] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const saveHistory = (value) => {
    const history = JSON.parse(localStorage["searchedId"] || "[]");
    if (history.length >= 3) history.splice(0, 1);
    history.push(value);
    localStorage["searchedId"] = JSON.stringify(Array.from(new Set(history)));
  };

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
    setShowHistory(false);
    setInputValue("");
    setIsPending(false);
    setIsFetched(true);
    saveHistory(inputValue);
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <IdInput
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onFocus={() => setShowHistory(true)}
        />
        <InputButton>검색</InputButton>
      </FormWrapper>
      <SearchHistory
        setIsPending={setIsPending}
        setData={setData}
        setIsFetched={setIsFetched}
        showHistory={showHistory}
        setShowHistory={setShowHistory}
      />
    </Wrapper>
  );
};

export default SearchForm;

const Wrapper = styled.div`
  position: relative;
`;

const FormWrapper = styled.form`
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
  padding: 0 1rem;
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
