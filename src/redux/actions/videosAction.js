import request from "../../api";
import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
  SUBSCRIPTIONS_CHANNEL_FAIL,
  SUBSCRIPTIONS_CHANNEL_REQUEST,
  SUBSCRIPTIONS_CHANNEL_SUCCESS,
} from "../actionType";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const response = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 12,
        pageToken: getState().homeVideos.nextPageToken,
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken,
        category: "All",
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

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_VIDEOS_REQUEST,
    });
    const response = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 12,
        pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: response.data.items,
        nextPageToken: response.data.nextPageToken,
        category: keyword,
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

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST,
    });

    const response = await request.get("/videos", {
      params: {
        part: "snippet,statistics",
        id: id,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: response.data.items[0],
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideos = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });

    const response = await request.get("/search", {
      params: {
        part: "snippet",
        forMine: true,
        maxResults: 15,
        q: "fun",
        type: "video",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: response.data.items,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCHED_VIDEO_REQUEST,
    });
    const response = await request.get("/search", {
      params: {
        part: "snippet",
        maxResults: 12,
        q: keyword,
        type: "videos, channels",
      },
    });
    dispatch({
      type: SEARCHED_VIDEO_SUCCESS,
      payload: response.data.items,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: SEARCHED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getVideosByChannel = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_REQUEST,
    });
    const response = await request.get("/subscriptions", {
      params: {
        part: "snippet, contentDetails",
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
      payload: response.data.items,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SUBSCRIPTIONS_CHANNEL_FAIL,
      payload: error.message,
    });
  }
};
