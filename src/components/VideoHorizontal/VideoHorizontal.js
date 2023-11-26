import React, { useEffect, useState } from "react";
import "../VideoHorizontal/VideoHorizontal.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import moment from "moment/moment";
import numeral from "numeral";
import request from "../../api";
import { MoreVertRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const VideoHorizontal = ({ video, searchScreen, subscriptionScreen }) => {
  const {
    id,
    snippet: {
      resourceId,
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
  const [subscriberCount, setSubscriberCount] = useState();
  const [channelUrl, setChannelUrl] = useState("");
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const videoId = id?.videoId || id;
  const channelIdValue = resourceId?.channelId || channelId;
  const navigate = useNavigate();
  const isVideo =
    id.kind === "youtube#video" || (!searchScreen && !subscriptionScreen);
  const isPlaylist = id.kind === "youtube#playlist";
  const isChannel = id.kind === "youtube#channel" || subscriptionScreen;

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
      setDuration(items[0]?.contentDetails?.duration);
      setViews(items[0]?.statistics?.viewCount);
    };
    if (isVideo) getVideoDetails();
  }, [videoId, isVideo]);

  useEffect(() => {
    const getChannelDetails = async () => {
      const {
        data: { items },
      } = await request.get("/channels", {
        params: {
          part: "snippet,contentDetails,statistics",
          id: channelIdValue,
        },
      });
      setIconUrl(items[0]?.snippet?.thumbnails?.default?.url);
      setSubscriberCount(items[0]?.statistics?.subscriberCount);
      setChannelUrl(items[0]?.snippet?.customUrl);
    };
    if (!isPlaylist) getChannelDetails();
  }, [channelIdValue, isPlaylist]);

  const handleVideoClick = () => {
    if (isVideo) {
      navigate(`/watch?v=${videoId}`);
      document.documentElement.scrollTop = 0;
    }
  };

  return (
    <div
      className={`videoHorizontal py-2 d-flex gap-1 ${
        searchScreen ? "mx-5" : "m-1"
      } ${subscriptionScreen ? "mx-auto" : ""} `}
      onClick={handleVideoClick}
    >
      <div className="video-hor-left">
        <LazyLoadImage
          src={medium.url}
          alt=""
          effect="blur"
          className={`video-thumb ${isChannel && "mx-5"}`}
          style={{
            width: searchScreen ? (isChannel ? "200px" : "300px") : "180px",
            borderRadius: isChannel && "50%",
          }}
          wrapperClassName="video-thumb-wrapper"
        />
        {isVideo && <span className="video-duration">{_duration}</span>}
      </div>
      <div className="video-hor-right p-0">
        <p className={`${searchScreen && "fs-5"}`}>{title}</p>
        <div className="d-flex gap-2 align-items-center my-1">
          {searchScreen && isVideo && (
            <Avatar
              className="channel-avatar"
              style={{ width: "30px", height: "30px" }}
              src={iconUrl}
            />
          )}
          {isVideo && <div style={{ fontSize: "0.9rem" }}>{channelTitle}</div>}
        </div>
        <div>
          {isVideo && (
            <span className="views">
              {numeral(views).format("0.a")} views •{" "}
              {moment(publishedAt).fromNow()}
            </span>
          )}
          {isChannel && (
            <span className="views">
              {channelUrl} • {numeral(subscriberCount).format("0.a")}{" "}
              subscribers
            </span>
          )}
          {isPlaylist && (
            <span className="views">{channelTitle} • Playlist</span>
          )}
        </div>
        {(subscriptionScreen || searchScreen) && (
          <div className="line-clamp"> {video?.snippet?.description}</div>
        )}
        {isPlaylist && <div className="fw-bold">VIEW FULL PLAYLIST</div>}
      </div>
      <MoreVertRounded style={{ marginLeft: "auto" }} />
    </div>
  );
};

export default VideoHorizontal;
