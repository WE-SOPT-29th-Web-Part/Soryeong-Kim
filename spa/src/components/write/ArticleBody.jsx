const ArticleBody = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((current) => ({ ...current, body: e.target.value }));
  };
  return <textarea placeholder="내용을 입력하세요" onChange={handleChange} />;
};

export default ArticleBody;
