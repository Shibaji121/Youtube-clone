import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../CategoriesBar/CategoriesBar";
import RecomendVideo from "../../Video/RecomendVideo";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../../redux/actions/videosAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.homeVideos.videos);
  console.log(videos);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  return (
    <>
      <Container>
        <CategoriesBar />
        <Row>
          {videos.map((video) => {
            return (
              <Col key={video.id} lg={4} md={4}>
                <RecomendVideo video={video} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default HomeScreen;
