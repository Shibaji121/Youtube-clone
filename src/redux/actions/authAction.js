import firebase from "firebase/compat/app";
import auth from "../../config/firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
    const response = await auth.signInWithPopup(provider);

    const accessToken = response.credential.accessToken;
    const profile = {
      name: response.additionalUserInfo.profile.name,
      photoURL: response.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("utube-access-token", JSON.stringify(accessToken));
    sessionStorage.setItem("utube-user", JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });
    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({
      type: LOG_OUT,
    });
    sessionStorage.removeItem("utube-access-token");
    sessionStorage.removeItem("utube-user");
  } catch (error) {}
};
