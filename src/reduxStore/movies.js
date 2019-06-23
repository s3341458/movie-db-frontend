import { createSlice } from "redux-starter-kit";

const movies = createSlice({
  slice: "movies",
  initialState: {
    isFetching: false,
    searchTerm: "",
    movies: [],
    totalPages: 0,
    totalResults: 0,
    currentPage: 1
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload.query;
    },
    fetchingMovies: (state, action) => {
      state.isFetching = true;
      state.currentPage = action.payload ? action.payload.page + 1 : 1;
    },
    receivedMovies: (state, action) => {
      state.isFetching = false;
      state.movies = action.payload.results;
      state.currentPage = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.totalResults = action.payload.total_results;
    }
  }
});

export { movies };
