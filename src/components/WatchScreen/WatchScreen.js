import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import VideoMetaData from "../VideoMetaData/VideoMetaData";
import "../WatchScreen/WatchScreen.css";
import VideoHorizontal from "../VideoHorizontal/VideoHorizontal";
import Comments from "../Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/actions/videosAction";

const WatchScreen = () => {
  const [params] = useSearchParams();
  const id = params.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen-player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title={video?.snippet?.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h1>Loading...</h1>
        )}

        <Comments noOfComment={video?.statistics?.commentCount} videoId={id} />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map((val, index) => {
          return <VideoHorizontal key={index} />;
        })}
      </Col>
    </Row>
  );
};

export default WatchScreen;
