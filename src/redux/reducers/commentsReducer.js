import {
  COMMENT_LIST_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
} from "../actionType";

export const commentsListReducer = (
  prevState = {
    loading: true,
    comments: null,
  },
  action
) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case COMMENT_LIST_SUCCESS:
      return {
        ...prevState,
        loading: false,
        comments: action.payload,
      };
    case COMMENT_LIST_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};
