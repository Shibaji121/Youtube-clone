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

const VideoMetaData = () => {
  return (
    <div className="video-metaData">
      <h5>
        Fully Functional YouTube Clone | React | Redux | Firebase | YouTube API
        |
      </h5>
      <div className="metaData-details d-flex justify-content-between flex-wrap py-1 my-1 gap-8">
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
        <div className="metaData-right d-flex gap-8">
          <div className="like-dislike meta-right-btns d-flex justify-content-around align-items-center border border-1 rounded-pill px-2 gap-6">
            <div
              className="d-flex p-1"
              style={{ gap: "4px", borderRight: "2px Solid" }}
            >
              <ThumbUpOutlined />
              <span>2.9K</span>
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
          Get exclusive NordVPN deal here ➵ https://NordVPN.com/dhruv It’s risk
          free with Nord’s 30 day money-back guarantee! ✌ This video delves
          into the tragic incident of NASA's Columbia Space Shuttle, which
          disintegrated upon reentering Earth's atmosphere on February 1, 2003,
          ending the lives of all seven astronauts onboard, including India's
          Kalpana Chawla. The crew was returning from a two-week mission, and
          everything appeared normal until communication was suddenly lost. The
          world watched in shock as the shuttle disintegrated, marking a dark
          day in space history. It has been 20 years since this disaster, with
          no similar incidents in space missions since. Join us as we pay
          tribute to Kalpana Chawla and explore the details of this fateful
          mission.
        </ReactShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
