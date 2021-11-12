import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { client } from "../../libs/api";

const StyledWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgba(256, 256, 256, 0.5);

  & > .fieldWrapper {
    position: absolute;
    left: calc(50vw - 10rem);
    top: 30vh;
    display: flex;
    flex-direction: column;

    & > .summaryField {
      width: 20rem;
      height: 10rem;
    }
  }
`;

const ArticleCheck = ({ articleData, setIsPosting }) => {
  const navigate = useNavigate();
  const [summary, setSummary] = useState("");
  const createArticle = async () => {
    const { data } = await client.get("/article");
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary,
    });
  };

  const handleClick = () => {
    createArticle();
    setIsPosting(false);
    navigate("/");
  };
  return (
    <StyledWrapper>
      <div className="fieldWrapper">
        <textarea
          className="summaryField"
          placeholder="내용을 요약하세요(150자 제한)"
          onChange={(e) => setSummary(e.target.value)}
        />
        <button onClick={handleClick}>진짜 출간하기</button>
      </div>
    </StyledWrapper>
  );
};

export default ArticleCheck;
