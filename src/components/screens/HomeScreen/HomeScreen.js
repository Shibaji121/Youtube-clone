import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../CategoriesBar/CategoriesBar";
import RecomendVideo from "../../Video/RecomendVideo";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../../redux/actions/videosAction";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.homeVideos.videos);

  const fetchData = () => {};

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  return (
    <>
      <Container>
        <CategoriesBar />
        <Row>
          <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
              <div className="spinner-border text-danger d-block mx-auto"></div>
            }
            style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
          >
            {videos.map((video) => {
              const id = video.id?.videoId || video.id;
              return (
                <Col key={id} lg={4} md={6}>
                  <RecomendVideo video={video} />
                </Col>
              );
            })}
          </InfiniteScroll>
        </Row>
      </Container>
      <Outlet />
    </>
  );
};

export default HomeScreen;
