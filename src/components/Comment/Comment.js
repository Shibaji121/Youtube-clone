import { Avatar } from "@mui/material";
import React from "react";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <Avatar src="" alt="" className="me-2" />
      <div className="comment-body">
        <p className="comment-header">Shibaji Sahu • 10hours ago</p>
        <p>Nice Design dude</p>
      </div>
    </div>
  );
};

export default Comment;
