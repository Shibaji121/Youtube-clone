import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import {
  homeVideosReducer,
  relatedVideoReducer,
  selectedVideoReducer,
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
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
