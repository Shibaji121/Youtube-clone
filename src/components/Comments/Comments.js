import React, { useEffect, useState } from "react";
import "../Comments/Comments.css";
import { Avatar } from "@mui/material";
import Comment from "../Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/commentsAction";

const Comments = ({ noOfComment, videoId }) => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const { comments, loading } = useSelector((state) => state.commentList);
  const handleComment = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      return;
    }
    dispatch(addComment(videoId, inputText));
    setInputText("");
  };
  return (
    <>
      {!loading ? (
        <div className="comments mt-2">
          <p>{noOfComment} comments</p>
          <div className="comment-form d-flex w-100 my-2">
            <Avatar src="" alt="" className="me-2" />
            <form onSubmit={handleComment} className="d-flex flex-grow-1">
              <input
                type="text"
                className="flex-grow-1"
                placeholder="Add a comment..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button className="border-0 p-2 rounded-pill">Comment</button>
            </form>
          </div>
          <div className="comments-list">
            {comments.map((comment) => {
              return <Comment key={comment.id} comment={comment?.snippet} />;
            })}
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default Comments;
