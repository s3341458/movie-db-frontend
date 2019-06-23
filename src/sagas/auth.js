import api from "../lib/api.js";
import { auth } from "../reduxStore/auth.js";
import config from "../config.js";
import { takeEvery, put, select } from "redux-saga/effects";

function* getRequestToken() {
  try {
    const response = yield api.post(
      "https://api.themoviedb.org/4/auth/request_token",
      {
        redirect_to: config.APP_URL + '/approve/'
      }
    );
    yield put(auth.actions.receivedRequestToken(response));
  } catch (e) {
    // Do not have enough time to enhance here pretend there is toast here
    console.log("debug here error: ", e);
  }
}

function* getAccessToken() {
  try {

    const state = select();
    const response = yield api.post(
      "https://api.themoviedb.org/4/auth/access_token",
      {
        request_token: state.auth.requestToken
      }
    );
    yield put(auth.actions.receivedAccessToken(response));
  } catch (e) {
    // Do not have enough time to enhance here pretend there is toast here
    console.log("debug here error: ", e);
  }
}

export default function* authSaga() {
  yield takeEvery(auth.actions.fetchingRequestToken, getRequestToken);
  yield takeEvery(auth.actions.fetchingAccessToken, getAccessToken);
}
