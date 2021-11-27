import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { client } from "../../libs/api";

const StyledWrapper = styled.section`
  position: absolute;
  width: 80vw;
  height: 100%;
  background-color: rgba(256, 256, 256, 0.8);
  animation: slideUp 0.5s ease-in forwards;

  @keyframes slideUp {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  & > div {
    position: absolute;
    left: calc(40vw - 15rem);
    top: 30vh;
    display: flex;
    flex-direction: column;

    & > textarea {
      width: 30rem;
      height: 10rem;
      font-size: 1rem;
    }

    & > button {
      margin-top: 2rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.yellow};
      border: 0.1rem solid ${({ theme }) => theme.colors.yellow};
      border-radius: 1rem;
      padding: 0.2rem 1rem;

      &:hover {
        color: ${({ theme }) => theme.colors.yellow};
        background-color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

const ArticleCheck = ({ articleData, isPosting, setIsPosting }) => {
  const navigate = useNavigate();

  const [animate, setAnimate] = useState(false);
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

  useEffect(() => {
    let timeoutId = null;
    if (isPosting) setAnimate(true);
    else if (!isPosting && animate) {
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 125);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isPosting, animate]);

  if (!isPosting && !animate) return null;
  return (
    <StyledWrapper>
      <div>
        <textarea placeholder="내용을 요약하세요(150자 제한)" onChange={(e) => setSummary(e.target.value)} />
        <button onClick={handleClick}>진짜 출간하기</button>
      </div>
    </StyledWrapper>
  );
};

export default ArticleCheck;
