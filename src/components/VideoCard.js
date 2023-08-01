import { MoreVertRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../styles/videoCard.css";
import React from "react";

function VideoCard() {
  return (
    <div className="card-container">
      <img
        src="https://i.ytimg.com/vi/RsKE24ObCoQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACzAWKAgwIABABGFAgWyhlMA8=&rs=AOn4CLBSx-HBCVU4KvqD8cU7u0cSwYDAJg"
        alt=""
      />
      <div id="details">
        <Avatar
          className="channel-avatar"
          src="https://i.ytimg.com/vi/RsKE24ObCoQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACzAWKAgwIABABGFAgWyhlMA8=&rs=AOn4CLBSx-HBCVU4KvqD8cU7u0cSwYDAJg"
        />
        <div id="meta-data">
          <h3>
            Krishna || relaxing flute ||manmohak flute|| महाभारत बासुरी ||
            skmusic_2.0#krish
          </h3>
          <div>Channel Name</div>
          <div>
            <span>230K views • 2 months ago</span>
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
