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

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
};

export const homeVideosReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...prevState,
        videos:
          prevState.activeCategory === action.payload.category
            ? [...prevState.videos, ...action.payload.videos]
            : action.payload.videos,
        loading: false,
        nextPageToken: action.payload.nextPageToken,
        activeCategory: action.payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...prevState,
        loading: true,
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

export const selectedVideoReducer = (
  prevState = {
    loading: true,
    video: null,
  },
  action
) => {
  switch (action.type) {
    case SELECTED_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        video: action.payload,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};

export const relatedVideoReducer = (
  prevState = {
    loading: true,
    videos: null,
  },
  action
) => {
  switch (action.type) {
    case RELATED_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case RELATED_VIDEO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: action.payload,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};

export const searchedVideoReducer = (
  prevState = {
    loading: true,
    videos: null,
  },
  action
) => {
  switch (action.type) {
    case SEARCHED_VIDEO_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SEARCHED_VIDEO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: action.payload,
      };
    case SEARCHED_VIDEO_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};

export const subscriptionsChannelReducer = (
  prevState = {
    loading: true,
    videos: null,
  },
  action
) => {
  switch (action.type) {
    case SUBSCRIPTIONS_CHANNEL_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case SUBSCRIPTIONS_CHANNEL_SUCCESS:
      return {
        ...prevState,
        loading: false,
        videos: action.payload,
      };
    case SUBSCRIPTIONS_CHANNEL_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};
