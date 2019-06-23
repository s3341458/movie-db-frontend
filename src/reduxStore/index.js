
import { combineReducers } from "redux";

import { auth } from "./auth";
import { movies } from "./movies";

const rootReducer = combineReducers({
  auth: auth.reducer,
  movies: movies.reducer,
});

export { rootReducer, auth, movies };
