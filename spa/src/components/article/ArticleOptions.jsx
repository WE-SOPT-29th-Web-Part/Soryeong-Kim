import { useNavigate } from "react-router-dom";

import { client } from "../../libs/api";

const ArticleOptions = ({ article }) => {
  const { id } = article;
  const navigate = useNavigate();
  const handleArticleDel = async () => {
    await client.delete(`article/${id}`);
    navigate("/");
  };

  return (
    <div>
      <button>통계</button>
      <button onClick={() => navigate(`/articleEdit/${id}`, { state: article })}>수정</button>
      <button onClick={handleArticleDel}>삭제</button>
    </div>
  );
};

export default ArticleOptions;
