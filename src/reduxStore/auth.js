import { createSlice } from "redux-starter-kit";

const auth = createSlice({
  slice: "auth",
  initialState: {
    accountId: null,
    isFetching: false,
    requestToken: null,
    accessToken: null,
    errorMessage: "",
  },
  reducers: {
    fetchingRequestToken: state => {
      state.errorMessage = "";
      state.isFetching = true;
    },
    fetchingAccessToken: state => {
      state.errorMessage = "";
      state.isFetching = true;
    },
    receivedRequestToken: (state, action) => {
      state.requestToken = action.payload.request_token;
      console.log(state.isFetching, ' debug here is Fetching');
      state.isFetching = false;
    },
    receivedAccessToken: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.isFetching = false;
    }

  },
});

export default auth;
