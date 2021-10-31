import React from "react";
import styled from "styled-components";
import axios from "axios";

const SearchHistory = ({
  showHistory,
  setIsPending,
  setData,
  setIsFetched,
  setShowHistory,
}) => {
  const historyArray = JSON.parse(localStorage["searchedId"] || "[]");
  const handleSubmit = async (history) => {
    try {
      setIsPending(true);
      const response = await axios.get(
        `https://api.github.com/users/${history}`
      );
      setData(response.data);
    } catch (err) {
      setData(Error);
    }
    setIsPending(false);
    setIsFetched(true);
    setShowHistory(false);
  };

  const handleRemove = (idx) => {
    historyArray.splice(idx, 1);
    localStorage["searchedId"] = JSON.stringify(historyArray);
    setShowHistory(false);
  };

  if (historyArray.length)
    return (
      <HistoryWrapper showHistory={showHistory}>
        {historyArray.map((history, idx) => (
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
