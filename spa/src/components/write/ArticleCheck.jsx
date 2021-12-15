import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { ImgWrapper } from "..";

import { client, formClient } from "../../libs/api";

const ArticleCheck = ({ summaryData, articleData, isPosting, setIsPosting, onDataChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state;
  const [animate, setAnimate] = useState(false);
  const [summary, setSummary] = useState("");
  const createArticle = async () => {
    if (article) {
      await client.patch(`article/${article.id}`, articleData);
      navigate(`/article/${article.id}`, { state: articleData });
      return;
    }
    await client.post("/article", { ...articleData, summary });
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

  const handleFileChange = async (e) => {
    const formData = new FormData();
    const imgFile = e.target.files[0];
    formData.append("file", imgFile);

    // formData가 requestBody, post 후 받을 responseBody의 내용이 imgResponse
    const imgResponse = await formClient.post("", formData);
    const imgUrl = imgResponse.data.url;
    onDataChange("thumbnail", imgUrl);
  };

  if (!isPosting && !animate) return null;
  return (
    <StyledWrapper>
      <div>
        <div>
          {articleData.thumbnail && (
            <ImgWrapper ratio="56%">
              <img src={articleData.thumbnail} alt="preview" />
            </ImgWrapper>
          )}
          <input type="file" onChange={handleFileChange} />
        </div>
        <textarea
          placeholder="내용을 요약하세요(150자 제한)"
          value={summaryData}
          onChange={(e) => setSummary(e.target.value)}
        />
        <button onClick={handleClick}>진짜 출간하기</button>
      </div>
    </StyledWrapper>
  );
};

export default ArticleCheck;

const StyledWrapper = styled.section`
  position: absolute;
  width: 80vw;
  height: 100%;
  background-color: rgba(256, 256, 256, 0.8);
  animation: slideUp 0.5s ease-in forwards;

  @keyframes slideUp {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  & > div {
    position: absolute;
    left: calc(40vw - 15rem);
    top: 10vh;
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
