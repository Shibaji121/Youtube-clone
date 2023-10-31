import { Avatar } from "@mui/material";
import React from "react";
import "../Comment/Comment.css";
import { ThumbDownAltOutlined, ThumbUpOutlined } from "@mui/icons-material";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex mb-1">
      <Avatar src="" alt="" className="me-2" />
      <div className="comment-body">
        <p className="comment-header mb-0">Shibaji Sahu • 10 hours ago</p>
        <p className="mb-1">Nice Design dude</p>
        <div className="comment-btns d-flex align-items-center gap-1">
          <ThumbUpOutlined fontSize="small" />
          <span>3</span>
          <ThumbDownAltOutlined fontSize="small" />
          <button className="border-0 px-2 py-1 rounded-pill mx-2">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
