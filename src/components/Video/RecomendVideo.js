import React, { useEffect, useState } from "react";
import "../Video/recomendVideo.css";
import request from "../../api";
import moment from "moment/moment";
import numeral from "numeral";
import { Avatar } from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";

function RecomendVideo({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id,
        },
      });
      console.log(items);
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [id]);
  return (
    <div className="card-container">
      <div style={{ position: "relative" }}>
        <img src={medium.url} alt="" />
        <span className="length">{_duration}</span>
      </div>
      <div id="details">
        <Avatar
          className="channel-avatar"
          src={
            "https://i.ytimg.com/vi/RsKE24ObCoQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACzAWKAgwIABABGFAgWyhlMA8=&rs=AOn4CLBSx-HBCVU4KvqD8cU7u0cSwYDAJg"
          }
        />
        <div id="meta-data">
          <h3>{title}</h3>
          <div>{channelTitle}</div>
          <div>
            <span>
              {numeral(views).format("0.a")} views •{" "}
              {moment(publishedAt).fromNow()}
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

export default RecomendVideo;
