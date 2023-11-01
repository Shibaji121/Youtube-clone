import React from "react";
import "../VideoHorizontal/VideoHorizontal.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment/moment";
import numeral from "numeral";
// import request from "../../api";
import { MoreVertRounded } from "@mui/icons-material";

const VideoHorizontal = () => {
  const seconds = moment.duration(1000).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <div className="videoHorizontal m-1 py-2 d-flex gap-1">
      <div className="video-hor-left">
        <LazyLoadImage
          src="https://i.ytimg.com/vi/ieiUISyLNfM/mqdefault.jpg"
          alt=""
          effect="blur"
          className="video-thumb"
          wrapperClassName="video-thumb-wrapper"
        />
        <span className="video-duration">{_duration}</span>
      </div>
      <div className="video-hor-right p-0">
        <p>
          Fully Functional YouTube Clone | React | Redux | Firebase | YouTube
          API
        </p>
        <div style={{ fontSize: "0.9rem" }}>Channel name</div>
        <div>
          <span className="views">
            {numeral(10000).format("0.a")} views •{" "}
            {moment(2022 - 10 - 31).fromNow()}
          </span>
        </div>
      </div>
      <MoreVertRounded />
    </div>
  );
};

export default VideoHorizontal;
