import React from "react";
import "../VideoMetaData/VideoMetaData.css";
import { Avatar } from "@mui/material";
import {
  MoreHorizOutlined,
  ReplyOutlined,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
  VerticalAlignBottomOutlined,
} from "@mui/icons-material";

const VideoMetaData = () => {
  return (
    <div className="video-metaData">
      <h5>
        Fully Functional YouTube Clone | React | Redux | Firebase | YouTube API
        |
      </h5>
      <div className="metaData-details d-flex justify-content-between flex-wrap py-1">
        <div className="metaData-left d-flex align-items-center">
          <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocJdke4gPoS_zU4vDycyhzKiWumcuOcC4A65RHTIvlqNiA=s96-c" />
          <div className="channel-details mx-2 lh-sm">
            <div className="fw-bold">Channel Name</div>
            <div style={{ fontSize: "0.8rem" }}>7.3k subscribers</div>
          </div>
          <div
            className="border border-1 px-3 py-1 mx-1 rounded-pill"
            style={{ fontWeight: "500" }}
          >
            Join
          </div>
          <div
            className="border border-1 px-3 py-1 mx-1 rounded-pill bg-dark text-white"
            style={{ cursor: "pointer" }}
          >
            Subscribe
          </div>
        </div>
        <div className="metaData-right d-flex">
          <div className="like-dislike d-flex">
            <div>
              <ThumbUpOutlined />
              <span>2.9K</span>
            </div>
            <ThumbDownAltOutlined />
          </div>
          <div className="share-btn">
            <ReplyOutlined style={{ transform: "scaleX(-1)" }} />
            <span>share</span>
          </div>
          <div className="download-btn">
            <VerticalAlignBottomOutlined />
            <span>Download</span>
          </div>
          <MoreHorizOutlined />
        </div>
      </div>
    </div>
  );
};

export default VideoMetaData;
