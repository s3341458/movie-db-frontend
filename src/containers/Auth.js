import { connect } from "react-redux";
import { auth } from "../reduxStore";


const mapStateToProps = state => {
  return {...state.auth};
};

const mapDispatchToProps = {
  fetchingRequestToken: auth.actions.fetchingRequestToken,
  approveRequestToken: auth.actions.approveRequestToken,
  fetchingAccessToken: auth.actions.fetchingAccessToken
};

export const WithAuth = connect(
  mapStateToProps,
  mapDispatchToProps
)
