import { createSlice } from "redux-starter-kit";

const auth = createSlice({
  slice: "auth",
  initialState: {
    accountId: null,
    isFetching: false,
    requestToken: null,
    errorMessage: "",
  },
  reducers: {
    fetchingRequestToken: state => {
      state.errorMessage = "";
      state.isFetching = true;
    },
    receivedRequestToken: (state, action) => {
      state.requestToken = action.payload.request_token;
      state.isFetching = false;
    }

  },
});

export default auth;
