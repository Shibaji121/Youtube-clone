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
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

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
            {!loading
              ? videos.map((video, index) => {
                  return (
                    <Col key={index} lg={4} md={6}>
                      <RecomendVideo video={video} />
                    </Col>
                  );
                })
              : [...Array(20)].map(() => {
                  return (
                    <Col lg={4} md={6}>
                      <Skeleton height={100} width="90%" />
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
