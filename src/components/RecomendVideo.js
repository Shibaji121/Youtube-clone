import React from "react";
import "../styles/recomendVideo.css";
import VideoCard from "./VideoCard";

function RecomendVideo() {
  return (
    <div className="recomend-video">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default RecomendVideo;
