import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
};

export const homeVideosReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...prevState,
        videos: action.payload.videos,
        loading: false,
        nextPageToken: action.payload.nextPageToken,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    case HOME_VIDEOS_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    default:
      return prevState;
  }
};
