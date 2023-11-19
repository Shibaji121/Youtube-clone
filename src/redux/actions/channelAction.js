import request from "../../api";
import {
  CHANNEL_DETAIL_FAIL,
  CHANNEL_DETAIL_REQUEST,
  CHANNEL_DETAIL_SUCCESS,
  SET_SUBSCRIPTION_STATUS,
} from "../actionType";

export const getChannelDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAIL_REQUEST,
    });

    const response = await request.get("/channels", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: id,
      },
    });

    dispatch({
      type: CHANNEL_DETAIL_SUCCESS,
      payload: response.data.items[0],
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CHANNEL_DETAIL_FAIL,
      payload: error.message,
    });
  }
};

export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
  try {
    const response = await request.get("/subscriptions", {
      params: {
        part: "snippet",
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    console.log(response.data);

    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: response.data.items.length !== 0,
    });
  } catch (error) {
    console.log(error);
  }
};
