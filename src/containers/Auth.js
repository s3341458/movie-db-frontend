import { connect } from "react-redux";
import { auth } from "../reduxStore";


const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    requestToken: state.auth.requestToken,
    accessToken: state.auth.AccessToken,
  };
};

const mapDispatchToProps = {
  fetchingRequestToken: auth.actions.fetchingRequestToken,
  fetchingAccessToken: auth.actions.fetchingAccessToken
};

export const WithAuth = connect(
  mapStateToProps,
  mapDispatchToProps
)
