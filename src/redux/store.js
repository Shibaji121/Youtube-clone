import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import {
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideoReducer,
  selectedVideoReducer,
  subscriptionsChannelReducer,
} from "./reducers/videosReducer";
import { channelDetailsReducer } from "./reducers/channelReducer";
import { commentsListReducer } from "./reducers/commentsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetail: channelDetailsReducer,
  commentList: commentsListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideoReducer,
  subscriptionChannels: subscriptionsChannelReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
