import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchHistory = ({
  setUserInfo,
  showHistory,
  setShowHistory,
  historyArr,
  setHistoryArr,
}) => {
  const handleSubmit = async (history) => {
    try {
      setUserInfo((current) => ({ ...current, status: "pending" }));
      const { data } = await axios.get(
        `https://api.github.com/users/${history}`
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
  };

  const handleRemove = (idx) => {
    setHistoryArr((current) => {
      return current.splice(idx, 1);
    });
    localStorage["searchedId"] = JSON.stringify(historyArr);
  };
  console.log(`historyArr`, historyArr);
  if (historyArr.length)
    return (
      <HistoryWrapper showHistory={showHistory}>
        {historyArr.map((history, idx) => (
          <History key={`history-${idx}`}>
            <Text onClick={() => handleSubmit(history)}>{history}</Text>
            <DelBtn onClick={() => handleRemove(idx)}>X</DelBtn>
          </History>
        ))}
      </HistoryWrapper>
    );
  return <></>;
};

export default SearchHistory;

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
