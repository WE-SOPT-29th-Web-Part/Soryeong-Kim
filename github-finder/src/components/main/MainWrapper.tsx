import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { SearchForm, Result } from '..';

export interface UserInfo {
  bio: string;
  name: string;
  login: string;
  html_url: string;
  blog: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  isError?: boolean;
}

// export interface UserInfoState<T> {
//   data: T | null;
//   status: string;
// }

export interface UserInfoState {
  data: UserInfo | null;
  status: string;
}

const MainWrapper = () => {
  const [userInfo, setUserInfo] = useState<UserInfoState>({
    data: null,
    status: 'idle',
  });
  const [inputValue, setInputValue] = useState<string>('');
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [historyArr, setHistoryArr] = useState(
    JSON.parse(localStorage['searchedId'] || '[]'),
  );

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      setUserInfo((current) => ({ ...current, status: 'pending' }));
      const { data }: AxiosResponse<UserInfo> = await axios.get(
        `https://api.github.com/users/${inputValue}`,
      );
      setUserInfo((current) => ({ ...current, data, status: 'resolved' }));
    } catch (error) {
      setUserInfo((current) => ({
        ...current,
        data: null,
        status: 'rejected',
      }));
    }

    const saveHistory = (value: string): void => {
      setHistoryArr(Array.from(new Set([...historyArr, value])));
      // if (historyArr.length >= 3) handleRemove(0);
      localStorage['searchedId'] = JSON.stringify(historyArr);
    };
    setShowHistory(false);
    setInputValue('');
    saveHistory(inputValue);
  };

  const submitHistory = async (history: string): Promise<void> => {
    setUserInfo((current) => ({ ...current, status: 'pending' }));
    const { data } = await axios.get(`https://api.github.com/users/${history}`);
    setUserInfo((current) => ({ ...current, data, status: 'resolved' }));
    setShowHistory(false);
    setInputValue('');
  };

  const handleRemove = (idx: number): void => {
    setHistoryArr((current: string[]) => {
      return current.filter((c: string, i: number) => i !== idx);
    });
    localStorage['searchedId'] = JSON.stringify(historyArr);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleShowHistory = (): void => {
    setShowHistory(true);
  };

  return (
    <>
      <Result userInfo={userInfo} />
      <SearchForm
        onSubmit={handleSubmit}
        onSubmitHistory={submitHistory}
        onRemove={handleRemove}
        onChange={handleChange}
        onSetShowHistory={handleShowHistory}
        showHistory={showHistory}
        inputValue={inputValue}
        historyArr={historyArr}
      />
    </>
  );
};

export default MainWrapper;
