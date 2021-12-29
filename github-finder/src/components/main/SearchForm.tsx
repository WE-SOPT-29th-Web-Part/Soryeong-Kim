import styled from 'styled-components';

const SearchForm = (props: {
  onSubmit: (arg: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onSubmitHistory: (arg: string) => Promise<void>;
  onRemove: (arg: number) => void;
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  onSetShowHistory(): void;
  showHistory: boolean;
  inputValue: string;
  historyArr: string[];
}) => {
  const {
    onSubmit,
    onSubmitHistory,
    onRemove,
    onChange,
    onSetShowHistory,
    showHistory,
    inputValue,
    historyArr,
  } = {
    ...props,
  };

  return (
    <Wrapper>
      <FormWrapper
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
      >
        <IdInput
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e);
          }}
          onFocus={onSetShowHistory}
        />
        <InputButton>검색</InputButton>
      </FormWrapper>
      {historyArr.length !== 0 && (
        <HistoryWrapper showHistory={showHistory}>
          {historyArr.map((history, idx) => (
            <History key={`history-${idx}`}>
              <Text onClick={() => onSubmitHistory(history)}>{history}</Text>
              <DelBtn onClick={() => onRemove(idx)}>X</DelBtn>
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

const HistoryWrapper = styled.div<{ showHistory: boolean }>`
  visibility: ${({ showHistory }) => (showHistory ? 'visible' : 'hidden')};
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
