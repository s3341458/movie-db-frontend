import api from "../lib/api.js";
import auth from "../reduxStore/auth.js";
import { takeEvery, put } from "redux-saga/effects";

function* getRequestToken() {
  try {
    const response = yield api.post(
      "https://api.themoviedb.org/4/auth/request_token",
      {
        redirect_to: "http://localhost:3000"
      }
    );
    //const products = response.products;
    //yield put(auth.actions.receiveProducts(products));
    console.log("debug here", response);
  } catch (e) {
    // Do not have enough time to enhance here pretend there is toast here
    console.log("debug here error: ", e);
  }
}

export default function* authSaga() {
  yield takeEvery(auth.actions.fetchingRequestToken, getRequestToken);
}
