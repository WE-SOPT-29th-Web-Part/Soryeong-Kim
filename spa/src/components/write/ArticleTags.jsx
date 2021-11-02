import React from "react";

const ArticleTags = ({ articleData, setArticleData }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newData = [...articleData];
      newData.tags = [...newData.tags, e.target.value];
      setArticleData(newData);
      e.target.value = "";
    }
  };
  return (
    <div>
      {articleData.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      <input
        placeholder="태그를 입력하세요"
        type="text"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default ArticleTags;
