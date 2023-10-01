import React from "react";
import "../Video/recomendVideo.css";
import VideoCard from "../Video/VideoCard";

function RecomendVideo() {
  return (
    <>
      <VideoCard
        thumbnail={
          "https://i.ytimg.com/vi/RsKE24ObCoQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACzAWKAgwIABABGFAgWyhlMA8=&rs=AOn4CLBSx-HBCVU4KvqD8cU7u0cSwYDAJg"
        }
        channelImg={
          "https://i.ytimg.com/vi/RsKE24ObCoQ/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACzAWKAgwIABABGFAgWyhlMA8=&rs=AOn4CLBSx-HBCVU4KvqD8cU7u0cSwYDAJg"
        }
        title={
          "Krishna || relaxing flute ||manmohak flute|| महाभारत बासुरी || skmusic_2.0#krish"
        }
        channelName={"Channel Name"}
        views={"230K"}
        uploadDate={"2 months"}
      />
    </>
  );
}

export default RecomendVideo;
