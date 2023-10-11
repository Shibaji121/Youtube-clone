import request from "../../api";
import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionType";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const response = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: "",
      },
    });
    console.log(response);
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken,
      },
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
