import styled from "styled-components";
import { client } from "../../libs/api";

const StyledWrapper = styled.section`
  display: flex;
`;

const ArticleFooter = ({ articleData }) => {
  const createArticle = async () => {
    const { data } = await client.get("/article");
    console.log(`data`, data);
    const id = data.length + 1;
    const now = new Date();
    const date = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;

    await client.post("/article", {
      ...articleData,
      id,
      date,
      summary: "요약입니다.",
    });
  };

  return (
    <StyledWrapper>
      <button>나가기</button>
      <button onClick={createArticle}>출간하기</button>
    </StyledWrapper>
  );
};

export default ArticleFooter;
