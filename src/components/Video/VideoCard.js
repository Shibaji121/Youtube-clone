import { MoreVertRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../Video/videoCard.css";
import React from "react";

function VideoCard({
  thumbnail,
  channelImg,
  title,
  channelName,
  views,
  uploadDate,
}) {
  return (
    <div className="card-container">
      <div style={{ position: "relative" }}>
        <img src={thumbnail} alt="" />
        <span className="length">05:43</span>
      </div>
      <div id="details">
        <Avatar className="channel-avatar" src={channelImg} />
        <div id="meta-data">
          <h3>{title}</h3>
          <div>{channelName}</div>
          <div>
            <span>
              {views} views • {uploadDate} ago
            </span>
          </div>
        </div>
        <div id="menu">
          <MoreVertRounded />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
