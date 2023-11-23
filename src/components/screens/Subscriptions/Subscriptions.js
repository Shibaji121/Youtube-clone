import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideosByChannel } from "../../../redux/actions/videosAction";
import VideoHorizontal from "../../VideoHorizontal/VideoHorizontal";
import { Container } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Subscriptions = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
      return;
    }
    dispatch(getVideosByChannel());
  }, [dispatch, accessToken, navigate]);

  const { loading, videos } = useSelector(
    (state) => state.subscriptionChannels
  );
  return (
    <Container fluid>
      {!loading ? (
        videos.map((video) => (
          <VideoHorizontal key={video?.id} video={video} subscriptionScreen />
        ))
      ) : (
        <Skeleton width="100%" height="160px" count={8} />
      )}
    </Container>
  );
};

export default Subscriptions;
