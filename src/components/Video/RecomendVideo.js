import React, { useEffect, useState } from "react";
import "../Video/recomendVideo.css";
import VideoCard from "../Video/VideoCard";
import request from "../../api";
import moment from "moment/moment";
import numeral from "numeral";

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
    <>
      <VideoCard
        thumbnail={medium.url}
        channelImg={
          "https://i.ytimg.com/vi/RsKE24ObCoQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACzAWKAgwIABABGFAgWyhlMA8=&rs=AOn4CLBSx-HBCVU4KvqD8cU7u0cSwYDAJg"
        }
        title={title}
        channelName={channelTitle}
        views={numeral(views).format("0.a")}
        uploadDate={moment(publishedAt).fromNow()}
        duration={_duration}
      />
    </>
  );
}

export default RecomendVideo;
