import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getVideosBySearch } from "../../../redux/actions/videosAction";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../VideoHorizontal/VideoHorizontal";
import Skeleton from "react-loading-skeleton";

const SearchScreen = () => {
  const [params] = useSearchParams();
  const searchQuery = params.get("search_query");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(searchQuery));
  }, [dispatch, searchQuery]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);
  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal
            key={video?.id?.videoId}
            video={video}
            searchScreen
          />
        ))
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default SearchScreen;
