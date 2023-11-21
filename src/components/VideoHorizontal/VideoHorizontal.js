import React, { useEffect, useState } from "react";
import "../VideoHorizontal/VideoHorizontal.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment/moment";
import numeral from "numeral";
import request from "../../api";
import { MoreVertRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const VideoHorizontal = ({ video }) => {
  const {
    id,
    snippet: {
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
  }, [videoId]);

  const handleVideoClick = () => {
    navigate(`/watch?v=${id}`);
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className="videoHorizontal m-1 py-2 d-flex gap-1"
      onClick={handleVideoClick}
    >
      <div className="video-hor-left">
        <LazyLoadImage
          src={medium.url}
          alt=""
          effect="blur"
          className="video-thumb"
          wrapperClassName="video-thumb-wrapper"
        />
        <span className="video-duration">{_duration}</span>
      </div>
      <div className="video-hor-right p-0">
        <p>{title}</p>
        <div style={{ fontSize: "0.9rem" }}>{channelTitle}</div>
        <div>
          <span className="views">
            {numeral(views).format("0.a")} views •{" "}
            {moment(publishedAt).fromNow()}
          </span>
        </div>
      </div>
      <MoreVertRounded />
    </div>
  );
};

export default VideoHorizontal;
