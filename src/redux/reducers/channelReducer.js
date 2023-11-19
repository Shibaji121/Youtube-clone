import {
  CHANNEL_DETAIL_FAIL,
  CHANNEL_DETAIL_REQUEST,
  CHANNEL_DETAIL_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
} from "../actionType";

export const channelDetailsReducer = (
  prevState = {
    loading: true,
    channel: null,
  },
  action
) => {
  switch (action.type) {
    case CHANNEL_DETAIL_REQUEST:
      return {
        ...prevState,
        loading: true,
      };
    case CHANNEL_DETAIL_SUCCESS:
      return {
        ...prevState,
        loading: false,
        channel: action.payload,
      };
    case CHANNEL_DETAIL_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    case SET_SUBSCRIPTION_STATUS:
      return {
        ...prevState,
        subscriptionStatus: action.payload,
      };
    default:
      return prevState;
  }
};
