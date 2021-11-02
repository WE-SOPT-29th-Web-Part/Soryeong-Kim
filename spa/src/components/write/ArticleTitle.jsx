import React from "react";

const ArticleTitle = ({ setArticleData }) => {
  const handleChange = (e) => {
    setArticleData((current) => ({
      ...current,
      title: e.target.value,
    }));
  };
  return <textarea placeholder="제목을 입력하세요." onChange={handleChange} />;
};

export default ArticleTitle;
