import React from "react";
import "../Comments/Comments.css";
import { Avatar } from "@mui/material";
import Comment from "../Comment/Comment";

const Comments = () => {
  const handleComment = () => {};
  return (
    <div className="comments">
      <p>1234 comments</p>
      <div className="comment-form d-flex w-100 my-2">
        <Avatar src="" alt="" className="me-2" />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Add a comment..."
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments-list">
        {[...Array(10)].map(() => {
          return <Comment />;
        })}
      </div>
    </div>
  );
};

export default Comments;
