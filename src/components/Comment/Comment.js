import { Avatar } from "@mui/material";
import React from "react";
import "../Comment/Comment.css";
import {
  KeyboardArrowDown,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import moment from "moment/moment";
import numeral from "numeral";

const Comment = ({ comment }) => {
  return (
    <div className="comment p-2 d-flex mb-1">
      <Avatar
        src={comment?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt=""
        className="me-2"
      />
      <div className="comment-body">
        <p className="comment-header mb-0">
          {comment?.topLevelComment?.snippet?.authorDisplayName} •{" "}
          {moment(comment?.topLevelComment?.snippet?.publishedAt).fromNow()}{" "}
        </p>
        <p className="mb-1">
          {comment?.topLevelComment?.snippet?.textOriginal}
        </p>
        <div className="comment-btns d-flex align-items-center gap-1">
          <ThumbUpOutlined fontSize="small" />
          <span>
            {numeral(comment?.topLevelComment?.snippet?.likeCount).format(
              "0.a"
            )}
          </span>
          <ThumbDownAltOutlined fontSize="small" />
          <button className="border-0 px-2 py-1 rounded-pill mx-2">
            Reply
          </button>
        </div>
        <div className="reply-cnt px-2 py-1 m-1 d-flex align-items-center gap-1">
          <KeyboardArrowDown />
          <div>{comment?.totalReplyCount} Replies</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
