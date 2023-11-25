import React, { useEffect, useState } from "react";
import "../Video/recomendVideo.css";
import request from "../../api";
import moment from "moment/moment";
import numeral from "numeral";
import { Avatar } from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

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
  const [iconUrl, setIconUrl] = useState("");
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const videoId = id?.videoId || id;
  const navigate = useNavigate();

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
    // console.log("video api");
  }, [videoId]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request.get("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setIconUrl(items[0]?.snippet?.thumbnails?.default?.url);
    };
    getChannelIcon();
    console.log("channel api");
  }, [channelId]);

  const handleVideoClick = () => {
    navigate(`/watch?v=${videoId}`);
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="card-container" onClick={handleVideoClick}>
      <div style={{ position: "relative" }}>
        <LazyLoadImage src={medium.url} effect="blur" />
        <span className="length">{_duration}</span>
      </div>
      <div id="details">
        <Avatar className="channel-avatar" src={iconUrl} />
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
