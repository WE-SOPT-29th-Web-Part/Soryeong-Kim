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
    console.log(`history`, history);
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
  if (historyArray.length)
    return (
      <History showHistory={showHistory}>
        {historyArray.map((history, idx) => (
          <Text key={`history-${idx}`} onClick={() => handleSubmit(history)}>
            {history}
          </Text>
        ))}
      </History>
    );
  return <></>;
};

export default SearchHistory;

const History = styled.div`
  visibility: ${(props) => (props.showHistory ? "visible" : "hidden")};
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  width: 100%;
  margin-top: 0.5rem;
  position: absolute;
  z-index: 3;
  padding: 0.5rem 0;
`;

const Text = styled.p`
  padding: 0.5rem 1rem;
  cursor: pointer;

  & + p {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.skyblue};
  }
`;
