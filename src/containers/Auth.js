import React from "react";
import { connect } from "react-redux";
import { auth } from "../reduxStore";

const AuthView = props => (
  <div>
    {props.isFetching && <p>is Fetching</p>}
    <button
      onClick={e => {props.fetchingRequestToken()}}
    >
      fetching Reques tToken
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = {
  fetchingRequestToken: auth.actions.fetchingRequestToken
};

export const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthView);
