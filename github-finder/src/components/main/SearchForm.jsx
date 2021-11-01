import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchForm = ({ setUserInfo }) => {
  const [inputValue, setInputValue] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [historyArr, setHistoryArr] = useState(
    JSON.parse(localStorage["searchedId"] || "[]")
  );

  const saveHistory = (value) => {
    setHistoryArr(Array.from(new Set([...historyArr, value])));
    // if (historyArr.length >= 3) handleRemove(0);
    localStorage["searchedId"] = JSON.stringify(historyArr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUserInfo((current) => ({ ...current, status: "pending" }));
      const { data } = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      setUserInfo((current) => ({ ...current, data, status: "resolved" }));
    } catch (error) {
      setUserInfo((current) => ({
        ...current,
        data: null,
        status: "rejected",
      }));
    }
    setShowHistory(false);
    setInputValue("");
    saveHistory(inputValue);
  };

  const submitHistory = async (history) => {
    setUserInfo((current) => ({ ...current, status: "pending" }));
    const { data } = await axios.get(`https://api.github.com/users/${history}`);
    setUserInfo((current) => ({ ...current, data, status: "resolved" }));
    setShowHistory(false);
    setInputValue("");
  };

  const handleRemove = (idx) => {
    setHistoryArr((current) => {
      return current.filter((c, i) => i !== idx);
    });
    localStorage["searchedId"] = JSON.stringify(historyArr);
  };

  useEffect(() => {
    console.log(`historyArr`, historyArr);
  }, [historyArr]);
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
      {historyArr.length !== 0 && (
        <HistoryWrapper showHistory={showHistory}>
          {historyArr.map((history, idx) => (
            <History key={`history-${idx}`}>
              <Text onClick={() => submitHistory(history)}>{history}</Text>
              <DelBtn onClick={() => handleRemove(idx)}>X</DelBtn>
            </History>
          ))}
        </HistoryWrapper>
      )}
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

const HistoryWrapper = styled.div`
  visibility: ${(props) => (props.showHistory ? "visible" : "hidden")};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  z-index: 3;
  padding: 0.5rem 0.5rem;
`;

const History = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.skyblue};
  }
`;

const Text = styled.span`
  padding: 0.5rem 0.5rem;
  cursor: pointer;
`;

const DelBtn = styled.button`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.blue};
`;
