import { createSlice } from "redux-starter-kit";
import Cookies from "universal-cookie";

const auth = createSlice({
  slice: "auth",
  initialState: {
    accountId: null,
    isFetching: false,
    requestTokenApproved: false,
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
    approveRequestToken: state => {
      state.requestTokenApproved = true;
    },
    receivedRequestToken: (state, action) => {
      const cookies = new Cookies();
      cookies.set('requestToken', action.payload.request_token);
      state.isFetching = false;
    },
    receivedAccessToken: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.isFetching = false;
    }

  },
});

export default auth;
