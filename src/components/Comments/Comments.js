import React, { useEffect } from "react";
import "../Comments/Comments.css";
import { Avatar } from "@mui/material";
import Comment from "../Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfVideoById } from "../../redux/actions/commentsAction";

const Comments = ({ noOfComment, videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const { comments, loading } = useSelector((state) => state.commentList);
  const handleComment = () => {};
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
