import { createSlice } from "redux-starter-kit";

const movies = createSlice({
  slice: "movies",
  initialState: {
    isFetching: false,
    searchTerm: "",
    movies: [],
    totalPages: 0,
    currentPage: 0,
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload.query;
    },
    fetchingMovies: state => {
      state.isFetching = true;
    },
    receivedMovies: (state, action) => {
      state.isFetching = false;
      state.movies = action.payload.result;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.totalResult = action.payload.total_result;
    }

  },
});

export { movies };
