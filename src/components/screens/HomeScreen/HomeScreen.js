import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../CategoriesBar/CategoriesBar";
import RecomendVideo from "../../Video/RecomendVideo";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../../redux/actions/videosAction";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos, activeCategory } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(activeCategory));
  };

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
            {videos.map((video, index) => {
              return (
                <Col key={index} lg={4} md={6}>
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
