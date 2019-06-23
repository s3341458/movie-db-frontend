import { createSlice } from "redux-starter-kit";

const auth = createSlice({
  slice: "auth",
  initialState: {
    isFetching: false,
    requestTokenApproved: false,
    requestToken: null,
    accessToken: null,
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
    approveRequestToken: state => {
      state.requestTokenApproved = true;
    },
    receivedRequestToken: (state, action) => {
      state.requestToken = action.payload.request_token;
      state.isFetching = false;
    },
    receivedAccessToken: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.isFetching = false;
    }

  },
});

export { auth };
