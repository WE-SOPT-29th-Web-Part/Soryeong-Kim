import React from "react";
import { useParams } from "react-router";

const PostWrapper = () => {
  const { id } = useParams();

  return <div>#{id} This is PostWrapper</div>;
};

export default PostWrapper;
