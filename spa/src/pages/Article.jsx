import { useLocation } from "react-router-dom";

import { ArticleOptions, Header, ImgWrapper, Profile } from "../components";
import { StyledTags } from "../components/main/Article";

const Article = () => {
  const location = useLocation();
  const { title, body, thumbnail, date, tags } = location.state;
  const article = location.state;

  return (
    <div style={{ width: "80vw", padding: "3rem 5rem" }}>
      <Header />
      <Profile />
      <ArticleOptions article={article} />
      <h1>{title}</h1>
      <StyledTags>
        <span>{date}</span>
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </StyledTags>
      <ImgWrapper ratio="50%">
        <img src={thumbnail} />
      </ImgWrapper>
      <p>{body}</p>
    </div>
  );
};

export default Article;
