import api from "../lib/api.js";
import { movies } from "../reduxStore/movies.js";

import { takeEvery, put, select } from "redux-saga/effects";

function* queryMovies(action) {
  try {
    const state = yield select();
    const page = action.payload.page ? action.payload.page + 1 : 1;
    const response = yield api.get(
      "https://api.themoviedb.org/3/search/movie",
      {query: state.movies.searchTerm, page});
    yield put(movies.actions.receivedMovies(response));
  } catch (e) {
    // Do not have enough time to enhance here pretend there is toast here
    console.log("error: ", e);
  }
}

export default function* moviesSaga() {
  yield takeEvery(movies.actions.fetchingMovies, queryMovies);
}
