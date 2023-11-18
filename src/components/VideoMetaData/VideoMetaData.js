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
import ReactShowMoreText from "react-show-more-text";
import moment from "moment/moment";
import numeral from "numeral";

const VideoMetaData = ({ video, videoId }) => {
  return (
    <div className="video-metaData">
      <h5>{video?.snippet?.title}</h5>
      <div className="metaData-details d-flex justify-content-between flex-wrap py-1 my-1 gap-8">
        <div className="metaData-left d-flex align-items-center">
          <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocJdke4gPoS_zU4vDycyhzKiWumcuOcC4A65RHTIvlqNiA=s96-c" />
          <div className="channel-details mx-2 lh-sm">
            <div className="fw-bold">{video?.snippet?.channelTitle}</div>
            <div style={{ fontSize: "0.8rem" }}>
              {numeral(video?.statistics?.viewCount).format("0.a")} subscribers
            </div>
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
        <div className="metaData-right d-flex gap-8">
          <div className="like-dislike meta-right-btns d-flex justify-content-around align-items-center border border-1 rounded-pill px-2 gap-6">
            <div
              className="d-flex p-1"
              style={{ gap: "4px", borderRight: "2px Solid" }}
            >
              <ThumbUpOutlined />
              <span>{numeral(video?.statistics?.likeCount).format("0.a")}</span>
            </div>
            <ThumbDownAltOutlined />
          </div>
          <div className="share-btn meta-right-btns d-flex align-items-center border border-1 rounded-pill px-2">
            <ReplyOutlined style={{ transform: "scaleX(-1)" }} />
            <span>share</span>
          </div>
          <div className="download-btn meta-right-btns d-flex align-items-center border border-1 rounded-pill px-2">
            <VerticalAlignBottomOutlined />
            <span>Download</span>
          </div>
          <MoreHorizOutlined
            fontSize="large"
            className="three-dot meta-right-btns border border-1 rounded-circle"
          />
        </div>
      </div>
      <div className="video-description">
        <ReactShowMoreText
          lines={3}
          more="...more"
          less="Show Less"
          anchorClass="showMoreText"
          expanded={false}
        >
          <p style={{ fontWeight: "bold" }}>
            {numeral(video?.statistics?.viewCount).format("0.a")} views{" "}
            {moment(video?.snippet?.publishedAt).fromNow()}{" "}
          </p>
          {video?.snippet?.description}
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
