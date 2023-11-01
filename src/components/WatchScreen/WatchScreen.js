import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import VideoMetaData from "../VideoMetaData/VideoMetaData";
import "../WatchScreen/WatchScreen.css";
import VideoHorizontal from "../VideoHorizontal/VideoHorizontal";
import Comments from "../Comments/Comments";

const WatchScreen = () => {
  const [params] = useSearchParams();
  const id = params.get("v");
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen-player">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            title="A AA 2 ( Chal Mohan Ranga ) Complete romantic/heart touching BGM | Nithiin, Megha Akash ||"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => {
          return <VideoHorizontal />;
        })}
      </Col>
    </Row>
  );
};

export default WatchScreen;
